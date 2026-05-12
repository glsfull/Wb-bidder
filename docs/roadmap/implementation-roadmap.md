# WB Bidder implementation roadmap

This roadmap splits the technical specification into delivery phases. Each phase should leave the product in a reviewable state with documented behavior, tests, and a deployable increment.

## Progress legend

- [x] Complete: delivered and covered by local checks.
- [~] In progress: started and tracked by the current implementation phase.
- [ ] Planned: not started yet or intentionally deferred to a later phase.

## Phase progress

| Phase | Status | Current checkpoint | Next checkpoint |
| --- | --- | --- | --- |
| Phase 0 | [x] Complete | Architecture, roadmap, frontend workspace, landing shell, and dashboard shell are present. | Keep documentation aligned with implementation changes. |
| Phase 1 | [~] In progress | Public landing, privacy page, auth modal shell, and static deployment checks are present. | Implement real auth endpoints, session rotation, and email flows. |
| Phase 2 | [~] In progress | Store service boundary, token validation, encrypted token helper, audit service, and initial sync queue abstraction are present. | Replace in-memory adapters with persistent storage and worker-backed queues. |
| Phase 3 | [ ] Planned | Data model is documented. | Add PostgreSQL schemas, migrations, repositories, and sync worker contracts. |
| Phase 4 | [~] In progress | Dashboard campaign table and bidder-facing status shell are present. | Add full bidder workspace controls, edit validation, table actions, and error states. |
| Phase 5 | [ ] Planned | Wizard scope is defined. | Build guided campaign creation flow and submit lifecycle. |
| Phase 6 | [ ] Planned | Automation strategy scope is defined. | Implement decision engine, dry-run mode, audit records, and scheduled jobs. |
| Phase 7 | [ ] Planned | Analytics and AI advisor scope is defined. | Add recommendation model, reports, and export flows. |
| Phase 8 | [ ] Planned | Production hardening scope is defined. | Add billing, observability, backup, retention, and security test coverage. |

## Phase 0. Product and architecture foundation

Goal: define the project structure, target architecture, delivery order, and first frontend workspace.

Deliverables:

Execution checklist:

- [x] Document architecture overview for frontend, backend, data, queues, integrations, and security.
- [x] Define entity model and bounded contexts for stores, campaigns, bidder strategies, analytics, recommendations, users, and audit events.
- [x] Create Nuxt 3 frontend workspace under `frontend/`.
- [x] Add initial product surface for the public landing page and operator dashboard shell.
- [x] Configure environment and quality gates for future implementation.

Exit criteria:

- The team can start backend and frontend implementation without reinterpreting the specification.
- All major Wildberries integration and security assumptions are documented.

## Phase 1. Public site and onboarding

Goal: create the public entry point and account registration flow.

Deliverables:

Execution checklist:

- [x] Add SSR/SSG landing page with SEO metadata, OpenGraph, Twitter Cards, and Schema.org markup.
- [~] Add registration and login shell in the application header.
- [ ] Implement email confirmation, password reset, refresh-token sessions, and role-aware account model.
- [x] Add static legal and support pages.
- [x] Add first automated frontend tests for landing and auth flows.

Exit criteria:

- A user can register, authenticate, and enter the private application shell.
- Public pages meet Core Web Vitals targets in production-like builds.

## Phase 2. Store connection and secure token handling

Goal: connect a Wildberries store through OAuth where available or a manual promotion API token.

Deliverables:

Execution checklist:

- [~] Build store creation flow service boundary.
- [x] Add Wildberries token validation with clear category-specific errors.
- [x] Add encrypted token persistence helper using AES-256-GCM with envelope-encryption-ready boundaries.
- [x] Add audit trail boundary for token and store actions.
- [x] Add initial sync job enqueueing after successful connection.
- [ ] Connect service boundary to persistent repositories and production queue adapters.

Exit criteria:

- Invalid tokens are never saved.
- Valid tokens create a store and start the initial sync pipeline.

Current implementation note:

- The backend workspace now contains the first store connection service boundary, AES-256-GCM token encryption helper, audit service, in-memory store repository, and initial sync queue abstraction.
- Persistence and BullMQ adapters remain intentionally deferred to Phase 3, where PostgreSQL schemas and queue workers are introduced.

## Phase 3. Synchronization and data model

Goal: persist advertising account data and keep it current through queues.

Deliverables:

Execution checklist:

- [ ] Add PostgreSQL schema for users, teams, stores, campaigns, products, phrases, metrics, sync runs, and audit events.
- [ ] Add Redis + BullMQ queues for profile, balance, campaign, statistics, bidder, parser, and AI report tasks.
- [ ] Add retry, rate limit, and partial-failure handling for Wildberries APIs.
- [~] Keep sync status visible in the private UI.

Exit criteria:

- Campaign, balance, and statistics data can be synced repeatedly and inspected from the dashboard.

## Phase 4. Operational bidder screen

Goal: deliver the main working screen described in the specification.

Deliverables:

Execution checklist:

- [~] Add store, period, sync, and balance top bar.
- [~] Add campaign filters and strategy status.
- [ ] Add product card, placement-zone controls, inline bid editing, limits, and validation.
- [ ] Add phrase and cluster table with KPI columns and actions.
- [ ] Add loading, empty, expired-token, unsupported-campaign, disabled-bidder, and queued-update states.

Exit criteria:

- Operators can review campaigns, edit bids and limits, and apply manual actions from one screen.

## Phase 5. Campaign creation

Goal: support campaign creation through a guided wizard.

Deliverables:

Execution checklist:

- [ ] Add store, product, type, payment model, phrase, budget, strategy, preview, and submit steps.
- [ ] Add validation for minimum budgets, bid ranges, product eligibility, and duplicate active scenarios.
- [ ] Add post-create synchronization.

Exit criteria:

- A valid campaign can be created and immediately enters the sync lifecycle.

## Phase 6. Bidder automation

Goal: implement automated bid strategy execution.

Deliverables:

Execution checklist:

- [ ] Add strategy configuration for position holding, CPO/DRR control, budget protection, and scale-up scenarios.
- [ ] Add decision engine with bounded bid changes, min/max limits, step changes, daily limits, and dry-run mode.
- [ ] Add scheduled BullMQ jobs and decision audit records.
- [ ] Add manual override and emergency stop controls.

Exit criteria:

- Bidder decisions are explainable, auditable, and can be applied or simulated safely.

## Phase 7. Analytics, AI advisor, and reports

Goal: turn collected metrics into actionable recommendations.

Deliverables:

Execution checklist:

- [ ] Add analytics views for spend, orders, revenue, CPO, DRR, CTR, CPC/CPM, phrase performance, and campaign dynamics.
- [ ] Add AI recommendation model with expected effect, risk, explanation, and apply action.
- [ ] Add daily and on-demand reports.
- [ ] Add export to CSV/XLSX.

Exit criteria:

- Recommendations are tied to campaign, phrase, current metrics, and a concrete action.

## Phase 8. Team, billing, reliability, and production hardening

Goal: prepare the service for multi-tenant production use.

Deliverables:

Execution checklist:

- [ ] Add team roles: owner, manager, analyst, admin.
- [ ] Add billing and tariff limits for stores, campaigns, refresh frequency, and AI quotas.
- [ ] Add observability: logs, metrics, traces, job dashboards, API error dashboards, and alerts.
- [ ] Add backup, retention, privacy, and incident-response procedures.
- [ ] Add load and security testing.

Exit criteria:

- The system can be operated, monitored, and supported as a SaaS product.
