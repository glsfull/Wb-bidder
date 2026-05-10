import { Module } from '@nestjs/common'
import { AuditService } from '../audit/audit.service'
import { TokenEncryptionService } from '../crypto/token-encryption.service'
import { SyncQueueService } from '../sync/sync-queue.service'
import { StoresRepository } from './stores.repository'
import { StoresService } from './stores.service'
import {
  OfficialWildberriesTokenValidator,
  type WildberriesTokenValidator
} from './wildberries-token-validator'

export const WILDBERRIES_TOKEN_VALIDATOR = Symbol('WILDBERRIES_TOKEN_VALIDATOR')

@Module({
  providers: [
    StoresRepository,
    TokenEncryptionService,
    AuditService,
    SyncQueueService,
    StoresService,
    {
      provide: WILDBERRIES_TOKEN_VALIDATOR,
      useClass: OfficialWildberriesTokenValidator
    }
  ],
  exports: [StoresService]
})
export class StoresModule {}

export type WildberriesTokenValidatorProvider = WildberriesTokenValidator
