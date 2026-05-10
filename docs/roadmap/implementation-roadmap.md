# WB Bidder implementation roadmap

This roadmap splits the technical specification into delivery phases. Each phase should leave the product in a reviewable state with documented behavior, tests, and a deployable increment.

## Phase 0. Product and architecture foundation

Goal: define the project structure, target architecture, delivery order, and first frontend workspace.

Deliverables:

- Architecture overview for frontend, backend, data, queues, integrations, and security.
- Entity model and bounded contexts for stores, campaigns, bidder strategies, analytics, recommendations, users, and audit events.
- Nuxt 3 frontend workspace under `frontend/`.
- Initial product surface for the public landing page and operator dashboard shell.
- Environment and quality gates for future implementation.

Exit criteria:

- The team can start backend and frontend implementation without reinterpreting the specification.
- All major Wildberries integration and security assumptions are documented.

## Phase 1. Public site and onboarding

Goal: create the public entry point and account registration flow.

Deliverables:

- SSR/SSG landing page with SEO metadata, OpenGraph, Twitter Cards, and Schema.org markup.
- Registration, login, email confirmation, password reset, refresh-token sessions, and role-aware account model.
- Static legal and support pages.
- First automated frontend tests for landing and auth flows.

Exit criteria:

- A user can register, authenticate, and enter the private application shell.
- Public pages meet Core Web Vitals targets in production-like builds.

## Phase 2. Store connection and secure token handling

Goal: connect a Wildberries store through OAuth where available or a manual promotion API token.

Deliverables:

- Store creation flow.
- Wildberries token validation with clear category-specific errors.
- Encrypted token persistence using AES-256-GCM with envelope-encryption-ready boundaries.
- Audit trail for token and store actions.
- Initial sync job enqueueing after successful connection.

Exit criteria:

- Invalid tokens are never saved.
- Valid tokens create a store and start the initial sync pipeline.

Current implementation note:

- The backend workspace now contains the first store connection service boundary, AES-256-GCM token encryption helper, audit service, in-memory store repository, and initial sync queue abstraction.
- Persistence and BullMQ adapters remain intentionally deferred to Phase 3, where PostgreSQL schemas and queue workers are introduced.

## Phase 3. Synchronization and data model

Goal: persist advertising account data and keep it current through queues.

Deliverables:

- PostgreSQL schema for users, teams, stores, campaigns, products, phrases, metrics, sync runs, and audit events.
- Redis + BullMQ queues for profile, balance, campaign, statistics, bidder, parser, and AI report tasks.
- Retry, rate limit, and partial-failure handling for Wildberries APIs.
- Sync status visible in the private UI.

Exit criteria:

- Campaign, balance, and statistics data can be synced repeatedly and inspected from the dashboard.

## Phase 4. Operational bidder screen

Goal: deliver the main working screen described in the specification.

Deliverables:

- Store, period, sync, and balance top bar.
- Campaign filters and strategy status.
- Product card, placement-zone controls, inline bid editing, limits, and validation.
- Phrase and cluster table with KPI columns and actions.
- Loading, empty, expired-token, unsupported-campaign, disabled-bidder, and queued-update states.

Exit criteria:

- Operators can review campaigns, edit bids and limits, and apply manual actions from one screen.

## Phase 5. Campaign creation

Goal: support campaign creation through a guided wizard.

Deliverables:

- Store, product, type, payment model, phrase, budget, strategy, preview, and submit steps.
- Validation for minimum budgets, bid ranges, product eligibility, and duplicate active scenarios.
- Post-create synchronization.

Exit criteria:

- A valid campaign can be created and immediately enters the sync lifecycle.

## Phase 6. Bidder automation

Goal: implement automated bid strategy execution.

Deliverables:

- Strategy configuration for position holding, CPO/DRR control, budget protection, and scale-up scenarios.
- Decision engine with bounded bid changes, min/max limits, step changes, daily limits, and dry-run mode.
- Scheduled BullMQ jobs and decision audit records.
- Manual override and emergency stop controls.

Exit criteria:

- Bidder decisions are explainable, auditable, and can be applied or simulated safely.

## Phase 7. Analytics, AI advisor, and reports

Goal: turn collected metrics into actionable recommendations.

Deliverables:

- Analytics views for spend, orders, revenue, CPO, DRR, CTR, CPC/CPM, phrase performance, and campaign dynamics.
- AI recommendation model with expected effect, risk, explanation, and apply action.
- Daily and on-demand reports.
- Export to CSV/XLSX.

Exit criteria:

- Recommendations are tied to campaign, phrase, current metrics, and a concrete action.

## Phase 8. Team, billing, reliability, and production hardening

Goal: prepare the service for multi-tenant production use.

Deliverables:

- Team roles: owner, manager, analyst, admin.
- Billing and tariff limits for stores, campaigns, refresh frequency, and AI quotas.
- Observability: logs, metrics, traces, job dashboards, API error dashboards, and alerts.
- Backup, retention, privacy, and incident-response procedures.
- Load and security testing.

Exit criteria:

- The system can be operated, monitored, and supported as a SaaS product.
