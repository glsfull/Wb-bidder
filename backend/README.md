# WB Bidder backend

NestJS backend workspace for private WB Bidder application features.

## Current scope

Phase 2 starts the store connection boundary:

- validate a Wildberries promotion API token before persistence;
- reject non-promotion tokens with the user-facing category error from the specification;
- encrypt accepted tokens with AES-256-GCM;
- create a store record with queued sync status;
- record audit events for token validation, store connection, and initial sync enqueueing.

The current repository uses in-memory repositories and queues so the behavior is testable before PostgreSQL and BullMQ are introduced in Phase 3.

## Commands

```bash
npm install
npm run build
npm run test
```
