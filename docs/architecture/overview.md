# WB Bidder architecture overview

WB Bidder is planned as a TypeScript-first SaaS application with Nuxt 3 on the frontend, NestJS on the backend, PostgreSQL for durable data, and Redis + BullMQ for background processing. The system must use official Wildberries APIs, store seller tokens securely, and make advertising optimization decisions traceable.

## Repository layout

```text
frontend/                 Nuxt 3 application
docs/architecture/         Architecture decisions and diagrams
docs/roadmap/              Delivery roadmap and phase plans
README.md                  Product specification
```

Future backend work should add a separate `backend/` workspace and shared tooling only when implementation starts.

## Frontend

The frontend is a Nuxt 3 application stored in `frontend/`.

Responsibilities:

- Public SSR/SSG landing pages.
- Authentication and onboarding screens.
- Store connection flow.
- Dashboard, campaign views, bidder workspace, analytics, AI advisor, reports, and settings.
- User-facing state handling for loading, partial API errors, empty data, expired tokens, unsupported campaign features, and queued updates.

Initial UI principle:

- Operational screens should be dense, scannable, and task-focused.
- The bidder screen is the primary product surface, not a marketing overview.

## Backend

The backend should be a NestJS application with modules aligned to product domains.

Planned modules:

- `auth`: registration, login, email confirmation, password reset, refresh-token rotation, rate limiting.
- `users` and `teams`: roles, invitations, access boundaries.
- `stores`: Wildberries store connection, token validation, token lifecycle.
- `campaigns`: campaign sync, campaign creation, product and phrase data.
- `metrics`: advertising statistics, KPI calculation, analytics snapshots.
- `bidder`: strategies, decision engine, bid update commands, dry runs, emergency stops.
- `recommendations`: AI advice, expected effect, risk, explanation, apply action.
- `reports`: scheduled and on-demand reports, CSV/XLSX exports.
- `audit`: immutable event trail for security and operational actions.

## Data storage

PostgreSQL is the source of truth for tenants, stores, campaigns, metrics, configuration, and audit records.

Core entities:

- User, team, role, invitation, session.
- Store, encrypted token, token validation result, sync status.
- Product, campaign, placement zone, phrase or cluster.
- Campaign metric snapshot and phrase metric snapshot.
- Bidder strategy, limits, decision, application result.
- Recommendation, report, export job.
- Audit event.

Redis supports queues, job state, short-lived locks, and rate-limit counters. Durable business data must remain in PostgreSQL.

## Background jobs

BullMQ queues should be split by workload to keep failures isolated:

- `wb-profile-sync`
- `wb-balance-sync`
- `wb-campaign-sync`
- `wb-statistics-sync`
- `bidder-decisions`
- `position-parser`
- `ai-reports`
- `maintenance`

Every job should record:

- Tenant and store identifiers.
- External API endpoint or action name.
- Start time, finish time, status, retries, and normalized error.
- Whether the failure is retryable, token-related, rate-limit-related, or validation-related.

## Wildberries integration

Integration rules:

- Use only official Wildberries APIs.
- Validate token category before persistence.
- Do not save invalid tokens.
- Persist tokens only in encrypted form.
- Model API limitations explicitly in UI and backend validation.
- Treat partial API failure as a first-class state.

The integration layer should expose typed clients and normalized errors. Product code should not depend directly on raw HTTP response shapes.

## Bidder decision flow

1. Load active strategy, campaign, phrase, placement, current bid, budget limits, and recent metrics.
2. Validate campaign type and placement capabilities.
3. Calculate target action based on strategy.
4. Clamp the result by minimum bid, maximum bid, step size, daily limit, and emergency-stop state.
5. Persist a decision record before applying external changes.
6. Apply the change through the Wildberries API or record a dry-run result.
7. Persist application status and expose the explanation in the UI.

All automated bid changes must be auditable and reversible through a clear operator action.

## Security

Baseline requirements:

- Argon2 or bcrypt password hashing.
- Refresh-token rotation with HttpOnly, Secure, SameSite cookies.
- AES-256-GCM token encryption with a boundary that can later move to KMS or envelope encryption.
- Tenant-scoped authorization checks on every private endpoint.
- Rate limiting for authentication and token validation endpoints.
- Audit logs for authentication, token, role, campaign, bidder, and recommendation actions.

## Observability

Required telemetry:

- Structured application logs with request, tenant, store, job, and correlation identifiers.
- Metrics for Wildberries API latency, error rate, rate limits, queue depth, job duration, and bidder decisions.
- Alerts for expired tokens, repeated sync failures, stuck queues, and unusual bid update failure rates.

