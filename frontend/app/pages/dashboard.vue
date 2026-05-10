<template>
  <main class="dashboard">
    <header class="dashboard__header">
      <div>
        <p class="eyebrow">Личный кабинет</p>
        <h1>Панель WB Bidder</h1>
      </div>
      <button class="button button--primary" type="button">
        Ручное обновление
      </button>
    </header>

    <section class="metrics" aria-label="Ключевые показатели">
      <article v-for="metric in metrics" :key="metric.label" class="metric">
        <span>{{ metric.label }}</span>
        <strong>{{ metric.value }}</strong>
      </article>
    </section>

    <section class="workspace">
      <aside class="campaigns" aria-label="Фильтр кампаний">
        <h2>Кампании</h2>
        <button
          v-for="campaign in campaigns"
          :key="campaign"
          class="campaign"
          type="button"
        >
          {{ campaign }}
        </button>
      </aside>

      <section class="bidder-panel" aria-label="Рабочий экран биддера">
        <div class="bidder-panel__header">
          <div>
            <p class="eyebrow">Товар 18273645</p>
            <h2>Рекламная кампания поиска</h2>
          </div>
          <span class="status">Биддер выключен</span>
        </div>

        <div class="bid-controls">
          <label>
            Ставка поиска
            <input type="number" value="320" min="0">
          </label>
          <label>
            Ставка рекомендаций
            <input type="number" value="240" min="0">
          </label>
          <label>
            Дневной лимит
            <input type="number" value="5000" min="0">
          </label>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Фраза</th>
                <th>Позиция</th>
                <th>CTR</th>
                <th>Расход</th>
                <th>CPO</th>
                <th>Текущая ставка</th>
                <th>Рекомендация</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row.phrase">
                <td>{{ row.phrase }}</td>
                <td>{{ row.position }}</td>
                <td>{{ row.ctr }}</td>
                <td>{{ row.spend }}</td>
                <td>{{ row.cpo }}</td>
                <td>{{ row.bid }}</td>
                <td>{{ row.recommendation }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
const metrics = [
  { label: 'Расход', value: '128 400 ₽' },
  { label: 'Заказы', value: '342' },
  { label: 'CPO', value: '376 ₽' },
  { label: 'ДРР', value: '9.8%' }
]

const campaigns = ['Поиск: кроссовки', 'АРК: футболки', 'Рекомендации: аксессуары']

const rows = [
  {
    phrase: 'женские кроссовки',
    position: '4.2',
    ctr: '3.8%',
    spend: '18 420 ₽',
    cpo: '412 ₽',
    bid: '320 ₽',
    recommendation: '+8%'
  },
  {
    phrase: 'кроссовки для бега',
    position: '7.1',
    ctr: '2.1%',
    spend: '9 760 ₽',
    cpo: '530 ₽',
    bid: '260 ₽',
    recommendation: '-5%'
  }
]
</script>
