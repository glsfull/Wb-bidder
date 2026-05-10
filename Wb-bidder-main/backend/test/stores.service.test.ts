import { BadRequestException } from '@nestjs/common'
import { describe, expect, it } from 'vitest'
import { AuditService } from '../src/audit/audit.service'
import { TokenEncryptionService } from '../src/crypto/token-encryption.service'
import { SyncQueueService } from '../src/sync/sync-queue.service'
import { StoresRepository } from '../src/stores/stores.repository'
import { StoresService } from '../src/stores/stores.service'
import type { WildberriesTokenValidator } from '../src/stores/wildberries-token-validator'

const connectInput = {
  tenantId: 'tenant-1',
  userId: 'user-1',
  name: 'Основной магазин',
  promotionToken: 'valid-promotion-token'
}

function createService(validator: WildberriesTokenValidator) {
  const repository = new StoresRepository()
  const encryption = new TokenEncryptionService(
    '0123456789abcdef0123456789abcdef',
    'test-v1'
  )
  const audit = new AuditService()
  const syncQueue = new SyncQueueService()
  const service = new StoresService(repository, encryption, validator, audit, syncQueue)

  return { service, repository, encryption, audit, syncQueue }
}

describe('StoresService', () => {
  it('rejects non-promotion tokens without saving them', async () => {
    const { service, repository, audit, syncQueue } = createService({
      async validatePromotionToken() {
        return {
          valid: true,
          category: 'statistics',
          sellerAccountId: 'seller-1'
        }
      }
    })

    await expect(service.connectStore(connectInput)).rejects.toBeInstanceOf(
      BadRequestException
    )

    expect(repository.list()).toHaveLength(0)
    expect(syncQueue.listInitialSyncJobs()).toHaveLength(0)
    expect(audit.list()).toMatchObject([
      {
        type: 'store.token_validation_failed',
        actorUserId: 'user-1',
        metadata: { category: 'statistics' }
      }
    ])
  })

  it('encrypts valid promotion tokens and queues the initial sync', async () => {
    const { service, repository, encryption, audit, syncQueue } = createService({
      async validatePromotionToken() {
        return {
          valid: true,
          category: 'promotion',
          sellerAccountId: 'seller-1'
        }
      }
    })

    const store = await service.connectStore(connectInput)

    expect(repository.list()).toHaveLength(1)
    expect(store.sellerAccountId).toBe('seller-1')
    expect(store.syncStatus).toBe('queued')
    expect(store.encryptedPromotionToken.ciphertext).not.toContain(
      connectInput.promotionToken
    )
    expect(encryption.decrypt(store.encryptedPromotionToken)).toBe(
      connectInput.promotionToken
    )
    expect(syncQueue.listInitialSyncJobs()).toEqual([
      {
        storeId: store.id,
        tenantId: 'tenant-1',
        requestedByUserId: 'user-1'
      }
    ])
    expect(audit.list().map((event) => event.type)).toEqual([
      'store.connected',
      'store.initial_sync_enqueued'
    ])
  })
})
