<template>
  <main class="landing-page">
    <!-- Hero -->
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
          WB-Bidder — умный биддер, полностью автоматизирующий управление рекламными
          ставками на Wildberries. Подключите AI-советника, получайте готовые
          рекомендации на основе вашей статистики и наблюдайте, как снижается
          бюджет рекламной кампании, а количество заказов растёт. При вашем
          желании сервис возьмёт управление ставками на себя — полностью
          автоматически и безопасно.
        </p>
        <div class="hero-actions">
          <a class="button button--primary" href="#tariffs">
            Зарегистрироваться бесплатно
          </a>
          <a class="button button--secondary" href="#ai-advisor">
            Попробовать AI-советника
          </a>
        </div>
      </div>

      <aside class="hero-dashboard" aria-label="Дашборд автоматического управления ставками">
        <div class="advisor-orb" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="36" height="36" stroke="#fff" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 2a8 8 0 1 0 0 16A8 8 0 0 0 12 2z" />
            <path d="M9 9h1l2 4 2-4h1" />
          </svg>
        </div>
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
            <dt>Завышенных ставок</dt>
            <dd>12 найдено</dd>
          </div>
        </dl>
        <div class="advisor-message">
          <strong>Рекомендация AI</strong>
          <span>Снизить ставку по запросу «платье летнее» на 20% и удержать топ-3.</span>
        </div>
      </aside>
    </section>

    <!-- How it works -->
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

    <!-- Benefits -->
    <section class="section landing-section" aria-labelledby="benefits-title">
      <p class="eyebrow">Преимущества</p>
      <h2 id="benefits-title">
        Преимущества автоматического управления рекламой на Вайлдберриз
      </h2>
      <div class="benefit-grid">
        <a
          v-for="benefit in benefits"
          :key="benefit.title"
          :href="benefit.href"
          class="benefit-card-link"
          :aria-label="benefit.title"
        >
          <article class="landing-card">
            <span class="icon-badge" aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path
                  v-for="path in benefit.iconPaths"
                  :key="path.d"
                  v-bind="path"
                />
              </svg>
            </span>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.text }}</p>
          </article>
        </a>
      </div>
    </section>

    <!-- AI Advisor -->
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
          сохранив лимиты и целевые позиции. Экономия бюджета рекламной кампании
          достигает 30% уже в первый месяц.
        </p>
        <a class="button button--primary" href="#tariffs">
          Попробовать AI-советника бесплатно
        </a>
      </div>
      <div class="advisor-note">
        <span class="icon-badge" aria-hidden="true">
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M9 9h1l2 4 2-4h1" />
          </svg>
        </span>
        <h3>Анализ статистики и рекомендации</h3>
        <p>
          AI советник ставки Wildberries сравнивает расходы, заказы, CTR, CPC и ДРР,
          находит точки перерасхода и объясняет каждое изменение простым языком.
        </p>
        <h3>Экономия бюджета рекламной кампании</h3>
        <p>
          Персональные рекомендации помогают снизить расходы на рекламу и
          перераспределить бюджет туда, где выше отдача.
        </p>
      </div>
    </section>

    <!-- Tariffs -->
    <section id="tariffs" class="section tariff-section" aria-labelledby="tariffs-title">
      <p class="eyebrow">Тарифы</p>
      <h2 id="tariffs-title">Тарифы для запуска AI-советника и автопилота</h2>
      <div class="tariff-grid">
        <article v-for="tariff in tariffs" :key="tariff.title" class="tariff-card">
          <p>{{ tariff.label }}</p>
          <h3>{{ tariff.title }}</h3>
          <strong>{{ tariff.price }}</strong>
          <span>{{ tariff.text }}</span>
          <a class="button button--primary" href="#contacts">Начать</a>
        </article>
      </div>
    </section>

    <!-- Autopilot -->
    <section class="section autopilot-section" aria-labelledby="autopilot-title">
      <p class="eyebrow">Автопилот</p>
      <h2 id="autopilot-title">
        Полностью автоматическое управление ставками с вашего разрешения
      </h2>
      <div class="compare-grid">
        <article class="compare-card">
          <h3>Ручное управление</h3>
          <p>
            Менеджер ежедневно ищет перерасход, пересчитывает ставки и вручную
            переносит изменения в кабинет Wildberries. Это время и деньги.
          </p>
        </article>
        <article class="compare-card compare-card--active">
          <h3>Автоматическое изменение ставок</h3>
          <p>
            WB-Bidder работает в заданных вами лимитах, меняет ставки только после
            разрешения и позволяет в любой момент изменить настройки или отключить
            автопилот. Вы всегда сохраняете контроль.
          </p>
        </article>
      </div>
    </section>

    <!-- Contacts -->
    <section id="contacts" class="section contacts-section" aria-labelledby="contacts-title">
      <div>
        <p class="eyebrow">Контакты</p>
        <h2 id="contacts-title">Контакты и адрес офиса WB-Bidder</h2>
        <div class="contact-list">
          <span class="contact-item">
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            ул. Примерная, д. 1, Москва, 123456
          </span>

          <a href="tel:+79991234567" class="contact-item">
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 21.73 16z" />
              </svg>
            </span>
            +7 (999) 123-45-67
          </a>

          <a href="mailto:hello@wb-bidder.ru" class="contact-item">
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>
            hello@wb-bidder.ru
          </a>
        </div>
      </div>
      <iframe
        title="Офис WB-Bidder на Яндекс.Картах"
        src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=15&pt=37.617700,55.755800,pm2rdm"
        loading="lazy"
      />
    </section>

    <!-- Footer -->
    <footer id="about" class="landing-footer">
      <nav aria-label="Хлебные крошки">
        <a href="/">Главная</a>
      </nav>
      <strong>WB-Bidder</strong>
      <span>© 2026 WB-Bidder</span>
      <a href="/privacy">Политика конфиденциальности</a>
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
    title: 'Полная автоматизация ставок',
    text: 'Сервис берёт на себя ежедневную рутину управления рекламными ставками Вайлдберриз.',
    href: '#ai-advisor',
    iconPaths: [
      {
        d: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }
    ]
  },
  {
    title: 'AI-советник с рекомендациями',
    text: 'Рекомендации строятся на вашей статистике, а не на усреднённых правилах.',
    href: '#ai-advisor',
    iconPaths: [
      {
        d: 'M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      },
      {
        d: 'M9 9h1l2 4 2-4h1',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }
    ]
  },
  {
    title: 'Экономия бюджета до 30%',
    text: 'WB-Bidder выявляет перерасход и помогает сокращать рекламный бюджет рекламной кампании.',
    href: '#tariffs',
    iconPaths: [
      {
        d: 'M12 1v22',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round'
      },
      {
        d: 'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }
    ]
  },
  {
    title: 'Рост заказов',
    text: 'Ставки распределяются туда, где выше шанс получить заказ и удержать целевой ДРР.',
    href: '#tariffs',
    iconPaths: [
      {
        d: 'M23 6 13.5 15.5 8.5 10.5 1 18',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      },
      {
        d: 'M17 6h6v6',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }
    ]
  },
  {
    title: 'Безопасный автопилот',
    text: 'Автоматизация работает только с разрешения пользователя и сохраняет полный контроль.',
    href: '#contacts',
    iconPaths: [
      {
        d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      },
      {
        d: 'm9 12 2 2 4-4',
        stroke: 'currentColor',
        fill: 'none',
        'stroke-width': '1.8',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
      }
    ]
  }
]

const tariffs = [
  {
    label: 'Старт',
    title: 'AI-советник',
    price: '0 ₽ на тест',
    text: 'Рекомендации по ставкам и поиск перерасхода без автоприменения.'
  },
  {
    label: 'Рост',
    title: 'Автопилот',
    price: 'от 4 900 ₽',
    text: 'Автоматическое изменение ставок в лимитах продавца.'
  },
  {
    label: 'Команда',
    title: 'Контроль агентства',
    price: 'индивидуально',
    text: 'Несколько магазинов, отчёты и расширенные правила управления.'
  }
]
</script>
