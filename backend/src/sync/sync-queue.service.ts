import { Injectable } from '@nestjs/common'

export interface InitialSyncJob {
  storeId: string
  tenantId: string
  requestedByUserId: string
}

@Injectable()
export class SyncQueueService {
  private readonly initialSyncJobs: InitialSyncJob[] = []

  enqueueInitialStoreSync(job: InitialSyncJob): void {
    this.initialSyncJobs.push(job)
  }

  listInitialSyncJobs(): InitialSyncJob[] {
    return [...this.initialSyncJobs]
  }
}
