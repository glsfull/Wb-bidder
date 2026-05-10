<template>
  <main class="page page--compact">
    <section class="section privacy-section" aria-labelledby="privacy-title">
      <p class="eyebrow">Документы</p>
      <h1 id="privacy-title">Политика конфиденциальности WB-Bidder</h1>
      <p>
        WB-Bidder обрабатывает контактные данные, сведения о магазинах и рекламных
        кампаниях только для регистрации, проверки доступа к Wildberries API,
        синхронизации кампаний и подготовки рекомендаций по ставкам.
      </p>
      <div class="privacy-grid">
        <article>
          <h2>Какие данные используются</h2>
          <p>
            Телефон, email, название магазина, технические идентификаторы продавца,
            статусы кампаний и рекламные показатели, доступные через официальный API.
          </p>
        </article>
        <article>
          <h2>Безопасность токенов</h2>
          <p>
            Невалидные токены не сохраняются. Валидные API-токены хранятся в
            зашифрованном виде и применяются только для разрешенных пользователем
            операций.
          </p>
        </article>
        <article>
          <h2>Управление доступом</h2>
          <p>
            Пользователь может отключить магазин, заменить токен или остановить
            автоматическое управление ставками в настройках кабинета.
          </p>
        </article>
      </div>
      <NuxtLink class="button button--primary" to="/">
        Вернуться на главную
      </NuxtLink>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Политика конфиденциальности WB-Bidder',
  description:
    'Правила обработки данных продавцов, API-токенов Wildberries и рекламной статистики в WB-Bidder.'
})
</script>
