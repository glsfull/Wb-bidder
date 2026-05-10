import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { AuditService } from '../audit/audit.service'
import { TokenEncryptionService } from '../crypto/token-encryption.service'
import { SyncQueueService } from '../sync/sync-queue.service'
import { StoresRepository, type StoreRecord } from './stores.repository'
import { WILDBERRIES_TOKEN_VALIDATOR } from './stores.module'
import type { WildberriesTokenValidator } from './wildberries-token-validator'

export interface ConnectStoreInput {
  tenantId: string
  userId: string
  name: string
  promotionToken: string
}

@Injectable()
export class StoresService {
  constructor(
    private readonly repository: StoresRepository,
    private readonly encryption: TokenEncryptionService,
    @Inject(WILDBERRIES_TOKEN_VALIDATOR)
    private readonly validator: WildberriesTokenValidator,
    private readonly audit: AuditService,
    private readonly syncQueue: SyncQueueService
  ) {}

  async connectStore(input: ConnectStoreInput): Promise<StoreRecord> {
    const validation = await this.validator.validatePromotionToken(input.promotionToken)

    if (!validation.valid || validation.category !== 'promotion') {
      this.audit.record({
        type: 'store.token_validation_failed',
        actorUserId: input.userId,
        metadata: {
          category: validation.category ?? 'unknown',
          error: validation.error ?? 'invalid token category'
        }
      })

      throw new BadRequestException('Токен не подходит. Нужен токен категории Продвижение')
    }

    const store = this.repository.create({
      tenantId: input.tenantId,
      ownerUserId: input.userId,
      name: input.name,
      sellerAccountId: validation.sellerAccountId ?? 'unknown',
      encryptedPromotionToken: this.encryption.encrypt(input.promotionToken),
      syncStatus: 'queued'
    })

    this.audit.record({
      type: 'store.connected',
      actorUserId: input.userId,
      storeId: store.id,
      metadata: { sellerAccountId: store.sellerAccountId }
    })

    this.syncQueue.enqueueInitialStoreSync({
      storeId: store.id,
      tenantId: store.tenantId,
      requestedByUserId: input.userId
    })

    this.audit.record({
      type: 'store.initial_sync_enqueued',
      actorUserId: input.userId,
      storeId: store.id
    })

    return store
  }
}
