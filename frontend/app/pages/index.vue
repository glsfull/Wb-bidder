<template>
  <main class="landing-page landing-page--redesign">
    <nav class="breadcrumbs" aria-label="Хлебные крошки">
      <a href="/">Главная</a>
      <span aria-hidden="true">/</span>
      <span>AI-биддер Wildberries</span>
    </nav>

    <section class="landing-hero" aria-labelledby="landing-title">
      <div class="landing-hero__copy">
        <p class="eyebrow">WB-Bidder для рекламы Wildberries</p>
        <h1 id="landing-title">
          Легкий AI-биддер для управления ставками Wildberries
        </h1>
        <p class="landing-hero__lead">
          WB-Bidder помогает продавцам видеть позиции, контролировать расходы и
          принимать точные решения по рекламным ставкам без перегруженных таблиц.
        </p>
        <div class="hero-actions">
          <button class="button button--primary" type="button" @click="openHeaderAuth('register')">
            Попробовать сейчас
          </button>
          <a class="button button--secondary-dark" href="/demo">
            Смотреть демо
          </a>
        </div>
      </div>

      <aside class="hero-dashboard glass-panel" aria-label="Минималистичный дашборд ставок">
        <div class="hero-dashboard__top">
          <span>Сводка кампании</span>
          <strong>Автопилот готов</strong>
        </div>
        <dl class="hero-stats">
          <div>
            <dt>Просмотры</dt>
            <dd>128k</dd>
          </div>
          <div>
            <dt>Средняя позиция</dt>
            <dd>3.4</dd>
          </div>
          <div>
            <dt>Динамика ставок</dt>
            <dd>-14%</dd>
          </div>
        </dl>
        <div class="soft-chart" aria-hidden="true">
          <span style="height: 44%" />
          <span style="height: 58%" />
          <span style="height: 52%" />
          <span style="height: 76%" />
          <span style="height: 66%" />
          <span style="height: 84%" />
        </div>
        <div class="advisor-message">
          <strong>AI-советник</strong>
          <span>Снизить ставку на 14% и удержать показы в топ-5.</span>
        </div>
      </aside>
    </section>

    <section id="features" class="section landing-section" aria-labelledby="features-title">
      <p class="eyebrow">Возможности</p>
      <h2 id="features-title">Три слоя контроля рекламных ставок</h2>
      <div class="benefit-grid">
        <article v-for="feature in features" :key="feature.title" class="landing-card">
          <span class="icon-badge" aria-hidden="true">{{ feature.icon }}</span>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </article>
      </div>
    </section>

    <section id="ai-advisor" class="section landing-section" aria-labelledby="advisor-title">
      <p class="eyebrow">Как работает AI-советник</p>
      <h2 id="advisor-title">От данных Wildberries до безопасного изменения ставки</h2>
      <div class="step-grid">
        <article v-for="step in workflowSteps" :key="step.title" class="landing-card step-card">
          <span class="icon-badge" aria-hidden="true">{{ step.icon }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="section landing-section" aria-labelledby="dashboards-title">
      <p class="eyebrow">Реальные данные</p>
      <h2 id="dashboards-title">Дашборды вместо тяжелых рекламных таблиц</h2>
      <div class="metric-grid">
        <article v-for="metric in metrics" :key="metric.title" class="metric-card glass-panel">
          <span>{{ metric.title }}</span>
          <strong>{{ metric.value }}</strong>
          <p>{{ metric.text }}</p>
        </article>
      </div>
    </section>

    <section class="section landing-section" aria-labelledby="proof-title">
      <p class="eyebrow">Социальное доказательство</p>
      <h2 id="proof-title">Команды видят результат без ручной рутины</h2>
      <div class="proof-grid">
        <article class="case-card">
          <p>«WB-Bidder убрал ежедневную проверку ставок из операционного дня и дал понятную картину по позициям.»</p>
          <strong>Команда категории fashion</strong>
        </article>
        <div class="partner-logos" aria-label="Партнеры">
          <span>Northline</span>
          <span>MarketOps</span>
          <span>Retail AI</span>
          <span>SellerLab</span>
        </div>
      </div>
    </section>

    <section class="section token-section" aria-labelledby="token-title">
      <div>
        <p class="eyebrow">Быстрый старт</p>
        <h2 id="token-title">После входа сервис попросит API-токен Wildberries</h2>
        <p>
          Токен нужен для чтения рекламной статистики и управления ставками в
          заданных лимитах. Используйте стандартный ключ из кабинета Wildberries
          с доступом к маркетингу и продвижению.
        </p>
        <a href="https://seller.wildberries.ru/supplier-settings/access-to-api" rel="noreferrer">
          Настройки доступа к API Wildberries
        </a>
      </div>
      <form class="token-card glass-panel" @submit.prevent>
        <span class="icon-badge" aria-hidden="true">OK</span>
        <label>
          API-токен
          <input type="password" placeholder="Вставьте стандартный ключ Wildberries">
        </label>
        <button class="button button--primary" type="button" @click="openHeaderAuth('login')">
          Войти и подключить токен
        </button>
      </form>
    </section>

    <footer id="about" class="landing-footer">
      <div>
        <strong>WB-Bidder</strong>
        <span>© 2026 WB-Bidder</span>
      </div>
      <nav aria-label="Ссылки футера">
        <a href="/demo">Блог</a>
        <a href="#features">Тарифы</a>
        <a href="mailto:hello@wb-bidder.ru">Поддержка</a>
        <a href="/privacy">Политика</a>
      </nav>
      <div class="social-links" aria-label="Социальные сети">
        <a href="https://t.me/wb_bidder" aria-label="Telegram">TG</a>
        <a href="https://vk.com/wb_bidder" aria-label="VK">VK</a>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'WB-Bidder — AI-биддер для ставок Wildberries',
  description:
    'WB-Bidder помогает продавцам Wildberries управлять рекламными ставками, анализировать SEO-позиции товаров и подключать AI-советник без перегруженных таблиц.',
  ogTitle: 'WB-Bidder — легкий AI-биддер Wildberries',
  ogDescription:
    'Минималистичный сервис для анализа позиций, ставок, просмотров и безопасного автопилота рекламы Wildberries.',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  defineOrganization({
    name: 'WB-Bidder',
    url: 'https://wb-bidder.ru',
    logo: 'https://wb-bidder.ru/logo.png',
    contactPoint: {
      telephone: '+7 (999) 123-45-67',
      contactType: 'customer service',
      availableLanguage: 'Russian'
    },
    address: {
      streetAddress: 'ул. Примерная, д. 1',
      addressLocality: 'Москва',
      postalCode: '123456',
      addressCountry: 'RU'
    }
  }),
  defineBreadcrumb({
    itemListElement: [
      {
        position: 1,
        name: 'Главная',
        item: 'https://wb-bidder.ru'
      },
      {
        position: 2,
        name: 'AI-биддер Wildberries',
        item: 'https://wb-bidder.ru/#features'
      }
    ]
  }),
  defineWebSite({
    name: 'WB-Bidder',
    url: 'https://wb-bidder.ru',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://wb-bidder.ru/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }),
  defineSoftwareApp({
    name: 'WB-Bidder',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Автоматизированный сервис для управления рекламными ставками Wildberries с SEO-аналитикой товаров, визуализацией позиций и AI-советником.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'RUB'
    }
  })
])

const features = [
  {
    icon: '◎',
    title: 'SEO-аналитика товаров',
    text: 'Собирайте запросы, позиции и точки роста карточек в одном легком интерфейсе.'
  },
  {
    icon: '⌁',
    title: 'Визуализация позиций и ставок',
    text: 'Смотрите среднюю позицию, ставку и динамику без ручной сборки отчетов.'
  },
  {
    icon: 'AI',
    title: 'Обучаемый AI-биддер',
    text: 'Советник запоминает цели кампаний и предлагает корректировки под вашу экономику.'
  }
]

const workflowSteps = [
  {
    icon: '01',
    title: 'Подключите магазин',
    text: 'Авторизуйтесь в модальном окне и добавьте стандартный API-токен Wildberries.'
  },
  {
    icon: '02',
    title: 'Получите рекомендации',
    text: 'AI сравнит просмотры, позиции, ставки и спрос по товарам.'
  },
  {
    icon: '03',
    title: 'Примените лимиты',
    text: 'Сервис меняет ставки только в заданных вами границах и показывает причину.'
  }
]

const metrics = [
  {
    title: 'Просмотры',
    value: '+22%',
    text: 'Рост видимости карточек после перераспределения ставок.'
  },
  {
    title: 'Средняя позиция',
    value: '3.4',
    text: 'Контроль целевых мест по ключевым товарам.'
  },
  {
    title: 'Динамика ставок',
    value: '-14%',
    text: 'Снижение завышенных ставок без потери показов.'
  }
]

function openHeaderAuth(mode: 'register' | 'login') {
  const label = mode === 'register' ? 'Регистрация' : 'Авторизация'
  const authButton = Array.from(
    document.querySelectorAll<HTMLButtonElement>('button[aria-haspopup="dialog"]')
  ).find((button) => button.textContent?.trim() === label)

  authButton?.click()
}
</script>
