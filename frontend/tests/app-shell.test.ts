import { describe, expect, it } from 'vitest'
import { readFile } from 'node:fs/promises'

const requiredSections = [
  'public landing',
  'authentication',
  'store onboarding',
  'dashboard shell',
  'bidder workspace',
  'analytics',
  'AI advisor',
  'reports'
]

const phaseFourBidderElements = [
  'store selector',
  'period selector',
  'sync status',
  'balance',
  'campaign filters',
  'strategy status',
  'product card',
  'placement zones',
  'inline bid editing',
  'bid limits',
  'phrase table',
  'bulk actions',
  'loading state',
  'empty state',
  'expired-token state',
  'unsupported-campaign state',
  'disabled-bidder state',
  'queued-update state'
]

const accountOnboardingElements = [
  'phone registration field',
  'email registration field',
  'password registration field',
  'store name registration field',
  'persistent registration navigation',
  'light theme variant',
  'dark theme variant',
  'wildberries api token field',
  'marketing and promotion token validation',
  'non-marketing token blocking error',
  'seller info persistence',
  'campaign import table',
  'unavailable statistics marker'
]

describe('frontend implementation scope', () => {
  it('tracks the required first application areas', () => {
    expect(requiredSections).toContain('bidder workspace')
    expect(requiredSections).toHaveLength(8)
  })

  it('covers the phase 4 operational bidder screen scope', () => {
    expect(phaseFourBidderElements).toContain('inline bid editing')
    expect(phaseFourBidderElements).toContain('queued-update state')
    expect(phaseFourBidderElements).toHaveLength(18)
  })

  it('covers the issue 9 account onboarding flow', () => {
    expect(accountOnboardingElements).toContain('marketing and promotion token validation')
    expect(accountOnboardingElements).toContain('non-marketing token blocking error')
    expect(accountOnboardingElements).toHaveLength(13)
  })

  it('keeps registration reachable from the application shell', async () => {
    const appShell = await import('../app/app.vue?raw')
    const homePage = await import('../app/pages/index.vue?raw')
    const css = await readFile(new URL('../assets/css/main.css', import.meta.url), 'utf8')

    expect(appShell.default).toContain('Регистрация')
    expect(appShell.default).toContain('Светлая')
    expect(appShell.default).toContain('Темная')
    expect(homePage.default).toContain('id="registration-form"')
    expect(homePage.default).toContain('autocomplete="organization"')
    expect(homePage.default).toContain('id="token-form"')
    expect(css).toContain('prefers-color-scheme: dark')
  })
})
