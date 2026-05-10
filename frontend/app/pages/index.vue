<template>
  <main class="page">
    <section class="hero">
      <div class="hero__content">
        <p class="eyebrow">Операционный автопилот рекламы Wildberries</p>
        <h1>WB Bidder</h1>
        <p class="hero__text">
          Управление ставками, контроль KPI, аналитика кампаний и AI-рекомендации
          в одном рабочем интерфейсе для продавцов и маркетинговых команд.
        </p>
        <div class="hero__actions" aria-label="Основные действия">
          <NuxtLink class="button button--primary" to="/dashboard">
            Подключить магазин
          </NuxtLink>
          <NuxtLink class="button button--secondary" to="/demo">
            Посмотреть демо
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>Первый этап реализации</h2>
      <div class="feature-grid">
        <article v-for="item in foundationItems" :key="item.title" class="feature">
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'WB Bidder',
  description:
    'SaaS-сервис для автоматизации рекламы Wildberries: ставки, KPI, аналитика кампаний и AI-рекомендации.',
  ogTitle: 'WB Bidder',
  ogDescription:
    'Операционный автопилот рекламы Wildberries для управления ставками, KPI и рекомендациями.',
  twitterCard: 'summary_large_image'
})

useSchemaOrg([
  defineSoftwareApp({
    name: 'WB Bidder',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web'
  })
])

const foundationItems = [
  {
    title: 'Архитектура',
    text: 'Nuxt 3, NestJS, PostgreSQL, Redis и BullMQ разделены по понятным зонам ответственности.'
  },
  {
    title: 'Дорожная карта',
    text: 'Проект разбит на этапы от публичного сайта и подключения магазина до AI-советника и биллинга.'
  },
  {
    title: 'Рабочий фокус',
    text: 'Главный экран проектируется как операционный инструмент для кампаний, ставок, KPI и рекомендаций.'
  }
]
</script>

