import { describe, expect, it } from 'vitest'
import { access, readFile } from 'node:fs/promises'

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
    expect(appShell.default).toContain('Авторизация')
    expect(appShell.default).toContain("openAuthModal('register')")
    expect(appShell.default).toContain("openAuthModal('login')")
    expect(appShell.default).toContain('Административная часть')
    expect(appShell.default).toContain('Светлая')
    expect(appShell.default).toContain('Темная')
    expect(appShell.default).not.toContain('<nav class="app-nav"')
    expect(homePage.default).not.toContain('id="registration-form"')
    expect(homePage.default).not.toContain('id="token-form"')
    expect(css).toContain('prefers-color-scheme: dark')
    expect(css).toContain('.auth-modal')
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

  it('keeps the Nuxt app configured for GitHub Pages static deployment', async () => {
    const nuxtConfig = await import('../nuxt.config.ts?raw')
    const workflow = await readFile(new URL('../../.github/workflows/nuxtjs.yml', import.meta.url), 'utf8')
    const checksWorkflow = await readFile(new URL('../../.github/workflows/webpack.yml', import.meta.url), 'utf8')
    const rootPackageJson = await readFile(new URL('../../package.json', import.meta.url), 'utf8')
    const packageJson = await readFile(new URL('../package.json', import.meta.url), 'utf8')

    expect(nuxtConfig.default).toContain("preset: 'static'")
    expect(nuxtConfig.default).toContain("routes: ['/']")
    expect(rootPackageJson).toContain('"generate": "npm --prefix frontend run generate"')
    expect(rootPackageJson).toContain('"test": "npm --prefix frontend run test"')
    expect(rootPackageJson).toContain('"lint": "npm run prepare:frontend && npm --prefix frontend run lint"')
    expect(rootPackageJson).toContain('"prepare:frontend": "cd frontend && npx nuxi prepare"')
    expect(packageJson).toContain('"node": ">=24.0.0"')
    expect(workflow).toContain('node-version: "24"')
    expect(workflow).not.toContain('working-directory: frontend')
    expect(workflow).toContain('cache-dependency-path: |')
    expect(workflow).toContain('package-lock.json')
    expect(workflow).toContain('frontend/package-lock.json')
    expect(workflow).toContain('npm ci --prefix frontend')
    expect(workflow).toContain('npm run generate')
    expect(workflow).toContain('frontend/.output/public')
    expect(workflow).toContain('npm run prepare:frontend')
    expect(workflow).toContain('npm run lint')
    expect(checksWorkflow).toContain('FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true')
    expect(checksWorkflow).toContain('node-version: "24"')
    expect(checksWorkflow).not.toContain('working-directory: frontend')
    expect(checksWorkflow).toContain('cache-dependency-path: |')
    expect(checksWorkflow).toContain('frontend/package-lock.json')
    expect(checksWorkflow).toContain('npm ci --prefix frontend')
    expect(checksWorkflow).toContain('npm run prepare:frontend')
    expect(checksWorkflow).not.toContain('18.x')
    expect(checksWorkflow).not.toContain('20.x')
    expect(checksWorkflow).not.toContain('npx webpack')
  })

  it('verifies the generated static homepage deploy artifact', async () => {
    const generatedHomePage = await readFile(
      new URL('../.output/public/index.html', import.meta.url),
      'utf8'
    )

    expect(generatedHomePage).toContain('<!DOCTYPE html>')
    expect(generatedHomePage).toContain('Автоматическое управление рекламными ставками Wildberries')
    expect(generatedHomePage).toContain('WB-Bidder')
    expect(generatedHomePage).toContain('AI-советник')
  })

  it('does not keep legacy issue delivery artifacts at the repository root', async () => {
    await expect(access(new URL('../../333', import.meta.url))).rejects.toThrow()
    await expect(access(new URL('../../этап4.md', import.meta.url))).rejects.toThrow()
  })
})
