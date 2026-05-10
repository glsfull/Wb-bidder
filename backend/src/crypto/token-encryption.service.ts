import { createCipheriv, createDecipheriv, randomBytes } from 'node:crypto'
import { Injectable } from '@nestjs/common'

export interface EncryptedToken {
  algorithm: 'aes-256-gcm'
  ciphertext: string
  iv: string
  authTag: string
  keyVersion: string
}

@Injectable()
export class TokenEncryptionService {
  private readonly key: Buffer
  private readonly keyVersion: string

  constructor(secret = process.env.TOKEN_ENCRYPTION_KEY, keyVersion = 'local-v1') {
    this.key = this.normalizeSecret(secret)
    this.keyVersion = keyVersion
  }

  encrypt(token: string): EncryptedToken {
    const iv = randomBytes(12)
    const cipher = createCipheriv('aes-256-gcm', this.key, iv)
    const ciphertext = Buffer.concat([cipher.update(token, 'utf8'), cipher.final()])

    return {
      algorithm: 'aes-256-gcm',
      ciphertext: ciphertext.toString('base64'),
      iv: iv.toString('base64'),
      authTag: cipher.getAuthTag().toString('base64'),
      keyVersion: this.keyVersion
    }
  }

  decrypt(payload: EncryptedToken): string {
    const decipher = createDecipheriv(
      'aes-256-gcm',
      this.key,
      Buffer.from(payload.iv, 'base64')
    )
    decipher.setAuthTag(Buffer.from(payload.authTag, 'base64'))
    return Buffer.concat([
      decipher.update(Buffer.from(payload.ciphertext, 'base64')),
      decipher.final()
    ]).toString('utf8')
  }

  private normalizeSecret(secret?: string): Buffer {
    if (!secret) {
      return Buffer.from('development-token-encryption-key-32', 'utf8')
    }

    const decoded = Buffer.from(secret, 'base64')
    if (decoded.length === 32) {
      return decoded
    }

    const raw = Buffer.from(secret, 'utf8')
    if (raw.length === 32) {
      return raw
    }

    throw new Error('TOKEN_ENCRYPTION_KEY must be 32 bytes as utf8 or base64')
  }
}
