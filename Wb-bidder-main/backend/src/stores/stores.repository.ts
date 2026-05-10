import { randomUUID } from 'node:crypto'
import { Injectable } from '@nestjs/common'
import type { EncryptedToken } from '../crypto/token-encryption.service'

export interface StoreRecord {
  id: string
  tenantId: string
  ownerUserId: string
  name: string
  sellerAccountId: string
  encryptedPromotionToken: EncryptedToken
  syncStatus: 'queued' | 'syncing' | 'ready' | 'failed'
  createdAt: Date
}

@Injectable()
export class StoresRepository {
  private readonly stores: StoreRecord[] = []

  create(input: Omit<StoreRecord, 'id' | 'createdAt'>): StoreRecord {
    const store = {
      ...input,
      id: randomUUID(),
      createdAt: new Date()
    }
    this.stores.push(store)
    return store
  }

  list(): StoreRecord[] {
    return [...this.stores]
  }
}
