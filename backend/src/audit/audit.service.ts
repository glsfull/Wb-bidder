import { Injectable } from '@nestjs/common'

export type AuditEventType =
  | 'store.token_validation_failed'
  | 'store.connected'
  | 'store.initial_sync_enqueued'

export interface AuditEvent {
  type: AuditEventType
  actorUserId: string
  storeId?: string
  metadata?: Record<string, unknown>
  createdAt: Date
}

@Injectable()
export class AuditService {
  private readonly events: AuditEvent[] = []

  record(event: Omit<AuditEvent, 'createdAt'>): AuditEvent {
    const stored = { ...event, createdAt: new Date() }
    this.events.push(stored)
    return stored
  }

  list(): AuditEvent[] {
    return [...this.events]
  }
}
