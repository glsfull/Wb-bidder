import { describe, expect, it } from 'vitest'
import {
  OfficialWildberriesTokenValidator,
  type WildberriesFetch
} from '../src/stores/wildberries-token-validator'

function jsonResponse(status: number, body: unknown = {}) {
  return {
    ok: status >= 200 && status < 300,
    status,
    async json() {
      return body
    }
  }
}

describe('OfficialWildberriesTokenValidator', () => {
  it('checks WB connectivity, seller info, promotion count, and advert details', async () => {
    const requestedUrls: string[] = []
    const fetchClient: WildberriesFetch = async (url) => {
      requestedUrls.push(url)

      if (url.endsWith('/api/v1/seller-info')) {
        return jsonResponse(200, { supplierId: 783014, supplierName: 'ИП Иванов Е.Е.' })
      }

      return jsonResponse(200)
    }

    const validator = new OfficialWildberriesTokenValidator(fetchClient)
    const result = await validator.validatePromotionToken('wb-token')

    expect(result).toEqual({
      valid: true,
      category: 'promotion',
      sellerAccountId: '783014'
    })
    expect(requestedUrls).toEqual([
      'https://common-api.wildberries.ru/ping',
      'https://common-api.wildberries.ru/api/v1/seller-info',
      'https://advert-api.wildberries.ru/adv/v1/promotion/count',
      'https://advert-api.wildberries.ru/api/advert/v2/adverts'
    ])
  })

  it('rejects tokens that cannot access WB advertising endpoints', async () => {
    const fetchClient: WildberriesFetch = async (url) => {
      if (url.endsWith('/adv/v1/promotion/count')) {
        return jsonResponse(403)
      }

      return jsonResponse(200, { supplierId: 783014 })
    }

    const validator = new OfficialWildberriesTokenValidator(fetchClient)

    await expect(validator.validatePromotionToken('statistics-token')).resolves.toMatchObject({
      valid: false,
      category: 'unknown',
      error: 'Wildberries promotion count request failed with status 403'
    })
  })
})
