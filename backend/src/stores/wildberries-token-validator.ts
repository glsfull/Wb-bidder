import { Injectable } from '@nestjs/common'

export interface TokenValidationResult {
  valid: boolean
  category?: 'promotion' | 'statistics' | 'content' | 'unknown'
  sellerAccountId?: string
  error?: string
}

export interface WildberriesTokenValidator {
  validatePromotionToken(token: string): Promise<TokenValidationResult>
}

@Injectable()
export class OfficialWildberriesTokenValidator implements WildberriesTokenValidator {
  async validatePromotionToken(token: string): Promise<TokenValidationResult> {
    if (!token.trim()) {
      return { valid: false, error: 'Token is empty' }
    }

    throw new Error('Wildberries token validation client is not configured')
  }
}
