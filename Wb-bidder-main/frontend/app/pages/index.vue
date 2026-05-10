<template>
  <main class="landing-page">
    <section class="landing-hero" aria-labelledby="landing-title">
      <div class="landing-hero__copy">
        <p class="eyebrow">AI-автопилот рекламы Wildberries</p>
        <h1 id="landing-title">
          Автоматическое управление рекламными ставками Wildberries — сервис WB-Bidder
        </h1>
        <p class="landing-hero__lead">
          Ваш AI-советник для экономии бюджета и увеличения заказов.
        </p>
        <p>
          WB-Bidder — умный биддер, который автоматически управляет рекламными
          ставками на Wildberries. Подключите AI-советника, получайте готовые
          рекомендации на основе вашей статистики и наблюдайте, как снижается
          бюджет рекламной кампании, а количество заказов растёт. При вашем
          желании сервис возьмёт управление ставками на себя — полностью
          автоматически и безопасно.
        </p>
        <div class="hero-actions">
          <a class="button button--primary" href="#registration-form">
            Зарегистрироваться
          </a>
          <a class="button button--secondary-dark" href="#ai-advisor">
            Попробовать AI-советника бесплатно
          </a>
        </div>
      </div>

      <aside class="hero-dashboard" aria-label="Дашборд автоматического управления ставками">
        <div class="advisor-orb" aria-hidden="true">AI</div>
        <div class="hero-dashboard__header">
          <span>Автопилот активен</span>
          <strong>24/7 анализ данных</strong>
        </div>
        <div class="chart-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <dl class="hero-stats">
          <div>
            <dt>Экономия бюджета</dt>
            <dd>до 30%</dd>
          </div>
          <div>
            <dt>Заказы</dt>
            <dd>+18%</dd>
          </div>
          <div>
            <dt>Завышенные ставки</dt>
            <dd>12 найдено</dd>
          </div>
        </dl>
      </aside>
    </section>

    <section id="features" class="section landing-section" aria-labelledby="workflow-title">
      <p class="eyebrow">Процесс</p>
      <h2 id="workflow-title">Как работает автоматизация ставок в WB-Bidder</h2>
      <div class="step-grid">
        <article v-for="step in workflowSteps" :key="step.title" class="landing-card">
          <span class="icon-badge" aria-hidden="true">{{ step.icon }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="section landing-section" aria-labelledby="benefits-title">
      <p class="eyebrow">Преимущества</p>
      <h2 id="benefits-title">
        Преимущества автоматического управления рекламой на Вайлдберриз
      </h2>
      <div class="benefit-grid">
        <article v-for="benefit in benefits" :key="benefit.title" class="landing-card">
          <span class="icon-badge" aria-hidden="true">{{ benefit.icon }}</span>
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.text }}</p>
        </article>
      </div>
    </section>

    <section id="ai-advisor" class="section advisor-section" aria-labelledby="advisor-title">
      <div>
        <p class="eyebrow">AI-советник</p>
        <h2 id="advisor-title">
          AI-советник WB-Bidder — персональный аналитик для ваших рекламных ставок
        </h2>
        <p>
          Искусственный интеллект непрерывно анализирует эффективность каждого
          объявления, выявляет перерасход и даёт точные корректировки. Например:
          ставка по ключевому запросу завышена на 20% — предлагаем снизить,
          сохранив лимиты и целевые позиции.
        </p>
        <a class="button button--primary" href="#registration-form">
          Попробовать AI-советника бесплатно
        </a>
      </div>
      <div class="advisor-note">
        <span class="icon-badge" aria-hidden="true">AI</span>
        <h3>Анализ статистики и рекомендации</h3>
        <p>
          AI советник ставки Wildberries сравнивает расходы, заказы, CTR, CPC и ДРР,
          находит точки перерасхода и объясняет каждое изменение простым языком.
        </p>
      </div>
    </section>

    <section id="pricing" class="section autopilot-section" aria-labelledby="autopilot-title">
      <p class="eyebrow">Автопилот</p>
      <h2 id="autopilot-title">
        Полностью автоматическое управление ставками с вашего разрешения
      </h2>
      <div class="compare-grid">
        <article class="compare-card">
          <h3>Ручное управление</h3>
          <p>
            Менеджер ежедневно ищет перерасход, пересчитывает ставки и вручную
            переносит изменения в кабинет Wildberries.
          </p>
        </article>
        <article class="compare-card compare-card--active">
          <h3>Автоматическое изменение ставок</h3>
          <p>
            WB-Bidder работает в заданных вами лимитах, меняет ставки только после
            разрешения и позволяет в любой момент изменить настройки или отключить
            автопилот.
          </p>
        </article>
      </div>
    </section>

    <section id="registration" class="section account-hero" aria-labelledby="account-title">
      <div class="account-hero__copy">
        <p class="eyebrow">Личный кабинет WB-Bidder</p>
        <h2 id="account-title">Регистрация продавца</h2>
        <p>
          Пользователь создает кабинет, подключает API-токен Wildberries категории
          «Маркетинг и продвижение», затем сервис загружает продавца и рекламные
          кампании в рабочий экран.
        </p>
      </div>

      <form id="registration-form" class="signup-panel" aria-label="Регистрация в личном кабинете">
        <div class="signup-panel__header">
          <p class="eyebrow">Шаг 1 из 4</p>
          <h2>Создать кабинет</h2>
        </div>
        <div class="form-grid">
          <label>
            Телефон
            <input type="tel" placeholder="+7 900 120-45-67" autocomplete="tel">
          </label>
          <label>
            Email
            <input type="email" placeholder="owner@wb-bidder.ru" autocomplete="email">
          </label>
          <label>
            Пароль
            <input type="password" placeholder="Минимум 8 символов" autocomplete="new-password">
          </label>
          <label>
            Название магазина
            <input type="text" placeholder="ИП Иванов Е.Е." autocomplete="organization">
          </label>
        </div>
        <button class="button button--primary" type="button">
          Зарегистрироваться
        </button>
      </form>
    </section>

    <section class="section token-layout" aria-label="Проверка API токена">
      <form id="token-form" class="token-panel">
        <div>
          <p class="eyebrow">Шаг 2 из 4 · Wildberries API</p>
          <h2>Проверка токена</h2>
        </div>
        <label>
          API-токен
          <textarea :value="tokenPreview" aria-describedby="token-validation" />
        </label>
        <div id="token-validation" class="token-result token-result--success">
          <strong>Токен принят</strong>
          <span>Категория: Маркетинг и продвижение. Доступ к кампаниям разрешен.</span>
        </div>
      </form>

      <aside class="seller-panel" aria-label="Полученные данные продавца">
        <p class="eyebrow">Данные кабинета</p>
        <h2>ИП Иванов Е.Е.</h2>
        <dl>
          <div>
            <dt>Seller ID</dt>
            <dd>seller-783014</dd>
          </div>
          <div>
            <dt>Статус</dt>
            <dd>Кампании выгружены</dd>
          </div>
        </dl>
        <NuxtLink class="button button--secondary-dark" to="/dashboard">
          Открыть кампании
        </NuxtLink>
      </aside>
    </section>

    <section id="contacts" class="section contacts-section" aria-labelledby="contacts-title">
      <div>
        <p class="eyebrow">Контакты</p>
        <h2 id="contacts-title">Контакты и адрес офиса WB-Bidder</h2>
        <div class="contact-list">
          <span>📍 ул. Примерная, д. 1, Москва, 123456</span>
          <a href="tel:+79991234567">☎ +7 (999) 123-45-67</a>
          <a href="mailto:hello@wb-bidder.ru">✉ hello@wb-bidder.ru</a>
        </div>
      </div>
      <iframe
        title="Офис WB-Bidder на Яндекс.Картах"
        src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=15&pt=37.617700,55.755800,pm2rdm"
        loading="lazy"
      />
    </section>

    <footer id="about" class="landing-footer">
      <nav aria-label="Хлебные крошки">
        <a href="/">Главная</a>
      </nav>
      <strong>WB-Bidder</strong>
      <span>© 2026 WB-Bidder</span>
      <a href="/privacy">Политика конфиденциальности</a>
      <span aria-label="Социальные сети">VK · Telegram · YouTube</span>
    </footer>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'WB-Bidder — автоматическое управление ставками Wildberries',
  description:
    'WB-Bidder автоматизирует управление рекламными ставками Вайлдберриз, снижает бюджет рекламной кампании и помогает увеличивать заказы с AI-советником.',
  ogTitle: 'WB-Bidder — AI-автопилот ставок Wildberries',
  ogDescription:
    'AI-советник анализирует статистику, предлагает корректировки и может управлять ставками в заданных лимитах.',
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
  })
])

const tokenPreview = 'eyJhbGciOi...marketing-promotion-token'

const workflowSteps = [
  {
    icon: '01',
    title: 'Подключение кабинета Wildberries',
    text: 'Продавец регистрируется, добавляет магазин и передаёт API-токен категории «Маркетинг и продвижение».'
  },
  {
    icon: '02',
    title: 'Анализ статистики и рекомендации',
    text: 'AI непрерывно оценивает расходы, ставки, клики и заказы, чтобы показать понятные действия.'
  },
  {
    icon: '03',
    title: 'Автоматическое изменение ставок',
    text: 'После согласия пользователя автопилот применяет корректировки в заданных лимитах.'
  }
]

const benefits = [
  {
    icon: '⚙',
    title: 'Полная автоматизация ставок',
    text: 'Сервис берёт на себя ежедневную рутину управления рекламными ставками Вайлдберриз.'
  },
  {
    icon: 'AI',
    title: 'AI-советник с персональными рекомендациями',
    text: 'Рекомендации строятся на вашей статистике, а не на усреднённых правилах.'
  },
  {
    icon: '−30%',
    title: 'Экономия бюджета рекламной кампании',
    text: 'WB-Bidder выявляет перерасход и помогает сокращать рекламный бюджет до 30%.'
  },
  {
    icon: '↗',
    title: 'Рост заказов при меньших затратах',
    text: 'Ставки распределяются туда, где выше шанс получить заказ и удержать целевой ДРР.'
  },
  {
    icon: '✓',
    title: 'Безопасный автопилот',
    text: 'Автоматизация работает только с разрешения пользователя и сохраняет полный контроль.'
  }
]
</script>
