<template>
  <main class="dashboard">
    <header class="dashboard__header">
      <div>
        <p class="eyebrow">Личный кабинет</p>
        <h1>Рабочий экран биддера</h1>
      </div>
      <button class="button button--primary" type="button">
        Ручное обновление
      </button>
    </header>

    <section class="ops-topbar" aria-label="Параметры магазина и синхронизации">
      <label>
        Магазин
        <select>
          <option>WB Store Alpha</option>
        </select>
      </label>
      <label>
        Период
        <select>
          <option>Последние 7 дней</option>
          <option>Сегодня</option>
          <option>30 дней</option>
        </select>
      </label>
      <div class="ops-topbar__status">
        <span>Синхронизация</span>
        <strong>Очередь обновления запущена</strong>
      </div>
      <div class="ops-topbar__status">
        <span>Баланс</span>
        <strong>47 820 ₽</strong>
      </div>
    </section>

    <section class="workspace">
      <aside class="campaigns" aria-label="Фильтр кампаний">
        <h2>Кампании</h2>
        <div class="filter-stack">
          <label>
            Статус
            <select>
              <option>Все активные</option>
              <option>На паузе</option>
              <option>С ошибками</option>
            </select>
          </label>
          <label>
            Тип
            <select>
              <option>Все типы</option>
              <option>Поиск</option>
              <option>Автоматическая</option>
              <option>Рекомендации</option>
            </select>
          </label>
        </div>
        <button
          v-for="campaign in campaigns"
          :key="campaign.name"
          class="campaign"
          type="button"
        >
          <strong>{{ campaign.name }}</strong>
          <span>{{ campaign.type }} · {{ campaign.strategy }}</span>
        </button>
      </aside>

      <section class="bidder-panel" aria-label="Рабочий экран биддера">
        <div class="bidder-panel__header">
          <div>
            <p class="eyebrow">Товар 18273645</p>
            <h2>Рекламная кампания поиска</h2>
          </div>
          <span class="status">Стратегия: удержание позиции</span>
        </div>

        <section class="product-strip" aria-label="Карточка товара">
          <div class="product-strip__image" aria-hidden="true">WB</div>
          <div>
            <h3>Кроссовки Urban Run</h3>
            <p>Бренд: NorthStep · Vendor code: NS-UR-428 · Бюджет: 86 000 ₽</p>
          </div>
          <dl>
            <div>
              <dt>Расход</dt>
              <dd>18 420 ₽</dd>
            </div>
            <div>
              <dt>Заказы</dt>
              <dd>52</dd>
            </div>
          </dl>
        </section>

        <section class="placement-grid" aria-label="Зоны показа и ставки">
          <article v-for="zone in placementZones" :key="zone.title" class="placement-card">
            <div>
              <h3>{{ zone.title }}</h3>
              <p>{{ zone.hint }}</p>
            </div>
            <label>
              Текущая ставка
              <input type="number" :value="zone.bid" min="0">
            </label>
          </article>
        </section>

        <div class="bid-controls">
          <label>
            Минимальная ставка
            <input type="number" value="180" min="0">
          </label>
          <label>
            Максимальная ставка
            <input type="number" value="520" min="0">
          </label>
          <label>
            Шаг изменения
            <input type="number" value="20" min="0">
          </label>
          <label>
            Дневной лимит
            <input type="number" value="5000" min="0">
          </label>
        </div>

        <div class="bulk-actions" aria-label="Массовые действия">
          <button class="button button--ghost" type="button">+10% к ставкам</button>
          <button class="button button--ghost" type="button">Установить лимиты</button>
          <button class="button button--ghost" type="button">Остановить убыточные</button>
          <button class="button button--primary" type="button">Применить рекомендации</button>
          <button class="button button--ghost" type="button">Экспорт CSV</button>
        </div>

        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Фраза / кластер</th>
                <th>Статус</th>
                <th>Позиция</th>
                <th>Частота</th>
                <th>Показы</th>
                <th>Клики</th>
                <th>CTR</th>
                <th>Расход</th>
                <th>CPC</th>
                <th>Заказы</th>
                <th>CPO</th>
                <th>ДРР</th>
                <th>Текущая ставка</th>
                <th>Рек. ставка</th>
                <th>Действие</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in rows" :key="row.phrase">
                <td>{{ row.phrase }}</td>
                <td>{{ row.status }}</td>
                <td>{{ row.position }}</td>
                <td>{{ row.frequency }}</td>
                <td>{{ row.impressions }}</td>
                <td>{{ row.clicks }}</td>
                <td>{{ row.ctr }}</td>
                <td>{{ row.spend }}</td>
                <td>{{ row.cpc }}</td>
                <td>{{ row.orders }}</td>
                <td>{{ row.cpo }}</td>
                <td>{{ row.drr }}</td>
                <td>{{ row.bid }}</td>
                <td>{{ row.recommendation }}</td>
                <td>
                  <button class="table-action" type="button">{{ row.action }}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <section class="state-grid" aria-label="Состояния интерфейса">
          <article v-for="state in interfaceStates" :key="state.title" class="state-note">
            <strong>{{ state.title }}</strong>
            <span>{{ state.text }}</span>
          </article>
        </section>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
const campaigns = [
  { name: 'Поиск: кроссовки', type: 'Поиск', strategy: 'Удержание позиции' },
  { name: 'АРК: футболки', type: 'Автоматическая', strategy: 'Контроль ДРР' },
  { name: 'Рекомендации: аксессуары', type: 'Рекомендации', strategy: 'Масштабирование' }
]

const placementZones = [
  {
    title: 'Поиск',
    hint: 'Раздельная ставка доступна для поисковой кампании.',
    bid: 320
  },
  {
    title: 'Рекомендации',
    hint: 'Для автоматических кампаний используется единая ставка API.',
    bid: 240
  }
]

const rows = [
  {
    phrase: 'женские кроссовки',
    status: 'Активна',
    position: '4.2',
    frequency: '18 200',
    impressions: '48 120',
    clicks: '1 828',
    ctr: '3.8%',
    spend: '18 420 ₽',
    cpc: '10.1 ₽',
    orders: '44',
    cpo: '412 ₽',
    drr: '9.1%',
    bid: '320 ₽',
    recommendation: '346 ₽',
    action: 'Применить'
  },
  {
    phrase: 'кроссовки для бега',
    status: 'Снижение',
    position: '7.1',
    frequency: '9 600',
    impressions: '21 400',
    clicks: '449',
    ctr: '2.1%',
    spend: '9 760 ₽',
    cpc: '21.7 ₽',
    orders: '18',
    cpo: '530 ₽',
    drr: '14.8%',
    bid: '260 ₽',
    recommendation: '247 ₽',
    action: 'Снизить'
  },
  {
    phrase: 'кластер: летняя обувь',
    status: 'Пауза',
    position: '12.4',
    frequency: '6 300',
    impressions: '14 820',
    clicks: '193',
    ctr: '1.3%',
    spend: '5 420 ₽',
    cpc: '28.0 ₽',
    orders: '3',
    cpo: '1 806 ₽',
    drr: '32.4%',
    bid: '210 ₽',
    recommendation: 'Минусовать',
    action: 'Остановить'
  }
]

const interfaceStates = [
  {
    title: 'Загрузка данных',
    text: 'Показывается при первичной синхронизации кампаний.'
  },
  {
    title: 'Нет кампаний',
    text: 'Открывает путь к созданию или повторной синхронизации.'
  },
  {
    title: 'Токен истек',
    text: 'Блокирует применение ставок до обновления токена.'
  },
  {
    title: 'API частично недоступен',
    text: 'Сохраняет доступные метрики и отмечает проблемные зоны.'
  },
  {
    title: 'Кампания не поддерживает раздельные ставки',
    text: 'Показывает ограничение типа кампании и единую ставку.'
  },
  {
    title: 'Биддер выключен',
    text: 'Ручные действия доступны, автоматизация не выполняется.'
  },
  {
    title: 'Очередь обновления запущена',
    text: 'Фиксирует ручной запуск обновления в статусе синхронизации.'
  }
]
</script>
