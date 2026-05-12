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

    expect(homePage.default).toContain('Легкий AI-биддер для управления ставками Wildberries')
    expect(homePage.default).toContain('Попробовать сейчас')
    expect(homePage.default).toContain('Смотреть демо')
    expect(homePage.default).toContain('SEO-аналитика товаров')
    expect(homePage.default).toContain('Визуализация позиций и ставок')
    expect(homePage.default).toContain('Обучаемый AI-биддер')
    expect(homePage.default).toContain('Как работает AI-советник')
    expect(homePage.default).toContain('Дашборды вместо тяжелых рекламных таблиц')
    expect(homePage.default).toContain('Социальное доказательство')
    expect(homePage.default).toContain('После входа сервис попросит API-токен Wildberries')
    expect(homePage.default).toContain('Настройки доступа к API Wildberries')
    expect(homePage.default).toContain('defineOrganization')
    expect(homePage.default).toContain('defineBreadcrumb')
    expect(homePage.default).toContain('defineWebSite')
    expect(homePage.default).toContain('defineSoftwareApp')
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
    expect(generatedHomePage).toContain('Легкий AI-биддер для управления ставками Wildberries')
    expect(generatedHomePage).toContain('WB-Bidder')
    expect(generatedHomePage).toContain('AI-советник')
  })

  it('does not keep legacy issue delivery artifacts at the repository root', async () => {
    await expect(access(new URL('../../333', import.meta.url))).rejects.toThrow()
    await expect(access(new URL('../../этап4.md', import.meta.url))).rejects.toThrow()
  })

  it('keeps the implementation roadmap actionable and trackable by phase', async () => {
    const roadmap = await readFile(
      new URL('../../docs/roadmap/implementation-roadmap.md', import.meta.url),
      'utf8'
    )

    expect(roadmap).toContain('# Дорожная карта WB Bidder')
    expect(roadmap).toContain('## Как отмечать выполнение')
    expect(roadmap).toContain('## Сводка прогресса')
    expect(roadmap).toContain('| Фаза | Статус | Выполнение | Контрольный результат |')
    expect(roadmap).toContain('## Журнал выполненных работ')
    expect(roadmap).toContain('- [x] Подготовить архитектурный обзор')
    expect(roadmap).toContain('- [ ] Заполнить дату завершения после приемки')

    const phaseHeadings = roadmap.match(/^## Фаза \d+\./gm) ?? []
    expect(phaseHeadings).toHaveLength(9)

    for (const requiredMarker of ['- [x]', '- [ ]', '**Статус:**', '**Контрольный результат:**']) {
      expect(roadmap).toContain(requiredMarker)
    }
  })
})
