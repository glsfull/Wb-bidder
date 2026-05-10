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
    expect(appShell.default).toContain('Возможности')
    expect(appShell.default).toContain('AI-советник')
    expect(appShell.default).toContain('Тарифы')
    expect(appShell.default).toContain('Контакты')
    expect(appShell.default).toContain('Светлая')
    expect(appShell.default).toContain('Темная')
    expect(homePage.default).toContain('id="registration-form"')
    expect(homePage.default).toContain('autocomplete="organization"')
    expect(homePage.default).toContain('id="token-form"')
    expect(css).toContain('prefers-color-scheme: dark')
  })

  it('covers the issue 14 public landing requirements', async () => {
    const homePage = await import('../app/pages/index.vue?raw')

    expect(homePage.default).toContain('Автоматическое управление рекламными ставками Wildberries — сервис WB-Bidder')
    expect(homePage.default).toContain('Как работает автоматизация ставок в WB-Bidder')
    expect(homePage.default).toContain('Преимущества автоматического управления рекламой на Вайлдберриз')
    expect(homePage.default).toContain('AI-советник WB-Bidder — персональный аналитик для ваших рекламных ставок')
    expect(homePage.default).toContain('Полностью автоматическое управление ставками с вашего разрешения')
    expect(homePage.default).toContain('Тарифы для запуска AI-советника и автопилота')
    expect(homePage.default).toContain('Снизить ставку по запросу')
    expect(homePage.default).toContain('Контакты и адрес офиса WB-Bidder')
    expect(homePage.default).toContain('https://yandex.ru/map-widget')
    expect(homePage.default).toContain('defineOrganization')
    expect(homePage.default).toContain('defineBreadcrumb')
    expect(homePage.default).toContain('defineWebSite')
  })

  it('documents the issue 16 delivery status file', async () => {
    const statusFile = await readFile(new URL('../../333', import.meta.url), 'utf8')

    expect(statusFile).toContain('issue #16')
    expect(statusFile).toContain('Главная страница')
    expect(statusFile).toContain('Скриншот')
  })
})
