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

export interface WildberriesFetchResponse {
  ok: boolean
  status: number
  json(): Promise<unknown>
}

export type WildberriesFetch = (
  url: string,
  options: { headers: Record<string, string> }
) => Promise<WildberriesFetchResponse>

export interface SellerInfoResponse {
  name?: string
  supplierName?: string
  sellerId?: string | number
  supplierId?: string | number
}

@Injectable()
export class OfficialWildberriesTokenValidator implements WildberriesTokenValidator {
  private readonly commonApiBaseUrl = 'https://common-api.wildberries.ru'
  private readonly advertApiBaseUrl = 'https://advert-api.wildberries.ru'
  private readonly fetchClient: WildberriesFetch

  constructor(fetchClient: WildberriesFetch = fetch as WildberriesFetch) {
    this.fetchClient = fetchClient
  }

  async validatePromotionToken(token: string): Promise<TokenValidationResult> {
    const normalizedToken = token.trim()

    if (!normalizedToken) {
      return { valid: false, error: 'Token is empty' }
    }

    const headers = { Authorization: normalizedToken }
    const ping = await this.fetchClient(`${this.commonApiBaseUrl}/ping`, { headers })

    if (!ping.ok) {
      return {
        valid: false,
        category: 'unknown',
        error: `Wildberries API ping failed with status ${ping.status}`
      }
    }

    const sellerInfoResponse = await this.fetchClient(
      `${this.commonApiBaseUrl}/api/v1/seller-info`,
      { headers }
    )

    if (!sellerInfoResponse.ok) {
      return {
        valid: false,
        category: 'unknown',
        error: `Wildberries seller info request failed with status ${sellerInfoResponse.status}`
      }
    }

    const promotionCount = await this.fetchClient(
      `${this.advertApiBaseUrl}/adv/v1/promotion/count`,
      { headers }
    )

    if (!promotionCount.ok) {
      return {
        valid: false,
        category: 'unknown',
        error: `Wildberries promotion count request failed with status ${promotionCount.status}`
      }
    }

    const adverts = await this.fetchClient(`${this.advertApiBaseUrl}/api/advert/v2/adverts`, {
      headers
    })

    if (!adverts.ok) {
      return {
        valid: false,
        category: 'unknown',
        error: `Wildberries advert details request failed with status ${adverts.status}`
      }
    }

    const sellerInfo = (await sellerInfoResponse.json()) as SellerInfoResponse

    return {
      valid: true,
      category: 'promotion',
      sellerAccountId: this.resolveSellerAccountId(sellerInfo)
    }
  }

  private resolveSellerAccountId(sellerInfo: SellerInfoResponse): string | undefined {
    const sellerId = sellerInfo.sellerId ?? sellerInfo.supplierId
    const sellerName = sellerInfo.name ?? sellerInfo.supplierName

    return sellerId === undefined ? sellerName : String(sellerId)
  }
}
