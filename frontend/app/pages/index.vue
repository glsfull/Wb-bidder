<template>
  <main class="account-page">
    <section class="account-hero" aria-labelledby="account-title">
      <div class="account-hero__copy">
        <p class="eyebrow">Личный кабинет WB Bidder</p>
        <h1 id="account-title">Регистрация продавца</h1>
        <p>
          Пользователь создает кабинет, подключает API-токен Wildberries категории
          «Маркетинг и продвижение», затем сервис загружает продавца и рекламные
          кампании в рабочий экран.
        </p>
      </div>

      <form class="signup-panel" aria-label="Регистрация в личном кабинете">
        <h2>Создать кабинет</h2>
        <div class="form-grid">
          <label>
            Телефон
            <input type="tel" value="+7 900 120-45-67" autocomplete="tel">
          </label>
          <label>
            Email
            <input type="email" value="owner@wb-bidder.ru" autocomplete="email">
          </label>
          <label>
            Пароль
            <input type="password" value="secure-password" autocomplete="new-password">
          </label>
        </div>
        <button class="button button--primary" type="button">
          Зарегистрироваться
        </button>
      </form>
    </section>

    <section class="section onboarding-flow" aria-label="Подключение магазина">
      <article
        v-for="step in onboardingSteps"
        :key="step.title"
        class="onboarding-step"
        :class="{ 'onboarding-step--blocked': step.blocked }"
      >
        <span>{{ step.number }}</span>
        <div>
          <h2>{{ step.title }}</h2>
          <p>{{ step.text }}</p>
        </div>
      </article>
    </section>

    <section class="section token-layout" aria-label="Проверка API токена">
      <form class="token-panel">
        <div>
          <p class="eyebrow">Wildberries API</p>
          <h2>Проверка токена</h2>
        </div>
        <label>
          API-токен
          <textarea>{{ tokenPreview }}</textarea>
        </label>
        <div class="token-result token-result--success">
          <strong>Токен принят</strong>
          <span>Категория: Маркетинг и продвижение. Доступ к кампаниям разрешен.</span>
        </div>
        <div class="token-result token-result--error">
          <strong>Работа остановлена</strong>
          <span>Токены других категорий не сохраняются и блокируют следующий этап.</span>
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
          <div>
            <dt>Последняя синхронизация</dt>
            <dd>10.05.2026 12:42</dd>
          </div>
        </dl>
        <NuxtLink class="button button--secondary-dark" to="/dashboard">
          Открыть кампании
        </NuxtLink>
      </aside>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Личный кабинет WB Bidder',
  description:
    'Регистрация продавца, проверка API-токена Wildberries категории Маркетинг и продвижение и загрузка рекламных кампаний.',
  ogTitle: 'Личный кабинет WB Bidder',
  ogDescription:
    'Подключение продавца Wildberries к рабочему кабинету управления рекламой.',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  defineSoftwareApp({
    name: 'WB Bidder',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web'
  })
])

const tokenPreview = 'eyJhbGciOi...marketing-promotion-token'

const onboardingSteps = [
  {
    number: '01',
    title: 'Регистрация',
    text: 'Телефон, email и пароль создают личный кабинет продавца.',
    blocked: false
  },
  {
    number: '02',
    title: 'API-токен Wildberries',
    text: 'Сервис принимает только категорию «Маркетинг и продвижение».',
    blocked: false
  },
  {
    number: '03',
    title: 'Данные продавца',
    text: 'После проверки сохраняется название кабинета, например ИП Иванов Е.Е.',
    blocked: false
  },
  {
    number: '04',
    title: 'Рекламные кампании',
    text: 'Кампании и метрики загружаются в таблицу; Н/Д означает, что статистика не отдается API.',
    blocked: false
  }
]
</script>
