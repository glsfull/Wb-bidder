<template>
  <main class="dashboard">
    <header class="dashboard__header">
      <div>
        <p class="eyebrow">Личный кабинет</p>
        <h1>ИП Иванов Е.Е.</h1>
      </div>
      <button class="button button--primary" type="button">
        Обновить кампании
      </button>
    </header>

    <section class="ops-topbar" aria-label="Параметры магазина и синхронизации">
      <div class="ops-topbar__status">
        <span>Категория токена</span>
        <strong>Маркетинг и продвижение</strong>
      </div>
      <div class="ops-topbar__status">
        <span>Проверка</span>
        <strong>Токен валиден</strong>
      </div>
      <div class="ops-topbar__status">
        <span>Синхронизация</span>
        <strong>Кампании загружены</strong>
      </div>
      <div class="ops-topbar__status">
        <span>Н/Д</span>
        <strong>Статистика не отдается</strong>
      </div>
    </section>

    <section class="workspace workspace--wide">
      <section class="bidder-panel" aria-label="Выгруженные рекламные кампании">
        <div class="bidder-panel__header">
          <div>
            <p class="eyebrow">Рекламные кампании Wildberries</p>
            <h2>Список кампаний</h2>
          </div>
          <span class="status status--ok">Готово к карточке кампании</span>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Кампания</th>
                <th>ID</th>
                <th>Тип</th>
                <th>Статус</th>
                <th>Бюджет</th>
                <th>Расход</th>
                <th>Показы</th>
                <th>Клики</th>
                <th>CTR</th>
                <th>CPC</th>
                <th>Заказы</th>
                <th>ДРР</th>
                <th>Ставка</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="campaign in campaigns" :key="campaign.id">
                <td>{{ campaign.name }}</td>
                <td>{{ campaign.id }}</td>
                <td>{{ campaign.type }}</td>
                <td>{{ campaign.status }}</td>
                <td>{{ campaign.budget }}</td>
                <td>{{ campaign.spend }}</td>
                <td>{{ campaign.impressions }}</td>
                <td>{{ campaign.clicks }}</td>
                <td>{{ campaign.ctr }}</td>
                <td>{{ campaign.cpc }}</td>
                <td>{{ campaign.orders }}</td>
                <td>{{ campaign.drr }}</td>
                <td>{{ campaign.bid }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
const campaigns = [
  {
    name: 'Поиск: кроссовки',
    id: '18492037',
    type: 'Поиск',
    status: 'Активна',
    budget: '86 000 ₽',
    spend: '18 420 ₽',
    impressions: '48 120',
    clicks: '1 828',
    ctr: '3.8%',
    cpc: '10.1 ₽',
    orders: '44',
    drr: '9.1%',
    bid: '320 ₽'
  },
  {
    name: 'АРК: футболки',
    id: '18492088',
    type: 'Автоматическая',
    status: 'Пауза',
    budget: '42 000 ₽',
    spend: 'Н/Д',
    impressions: 'Н/Д',
    clicks: 'Н/Д',
    ctr: 'Н/Д',
    cpc: 'Н/Д',
    orders: 'Н/Д',
    drr: 'Н/Д',
    bid: '240 ₽'
  },
  {
    name: 'Рекомендации: аксессуары',
    id: '18492112',
    type: 'Рекомендации',
    status: 'Активна',
    budget: '27 500 ₽',
    spend: '5 420 ₽',
    impressions: '14 820',
    clicks: '193',
    ctr: '1.3%',
    cpc: '28.0 ₽',
    orders: '3',
    drr: '32.4%',
    bid: '210 ₽'
  }
]
</script>
