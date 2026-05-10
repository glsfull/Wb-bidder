<template>
  <main class="page page--compact">
    <section class="section">
      <p class="eyebrow">Демо</p>
      <h1>Сценарии WB Bidder</h1>
      <div class="feature-grid">
        <article v-for="scenario in scenarios" :key="scenario.title" class="feature">
          <h2>{{ scenario.title }}</h2>
          <p>{{ scenario.text }}</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const scenarios = [
  {
    title: 'Удержание позиции',
    text: 'Стратегия контролирует среднюю позицию и меняет ставку в заданных границах.'
  },
  {
    title: 'Снижение ДРР',
    text: 'Система выявляет убыточные фразы и предлагает снижение ставки или остановку.'
  },
  {
    title: 'Масштабирование',
    text: 'При прибыльной динамике советник предлагает повысить лимит или усилить ставку.'
  }
]
</script>

