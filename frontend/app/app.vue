<template>
  <div class="app-shell">
    <header class="app-header">
      <NuxtLink class="app-header__brand" to="/">WB-Bidder</NuxtLink>

      <div class="header-actions" aria-label="Действия пользователя">
        <button
          type="button"
          class="button button--secondary-dark"
          aria-haspopup="dialog"
          @click="openAuthModal('register')"
        >
          Регистрация
        </button>

        <button
          type="button"
          class="button button--primary"
          aria-haspopup="dialog"
          @click="openAuthModal('login')"
        >
          Авторизация
        </button>

        <button
          type="button"
          class="theme-toggle"
          :data-tooltip="isDark ? 'Светлая тема' : 'Темная тема'"
          :aria-label="isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
          @click="toggleTheme"
        >
          <!-- Sun icon for dark mode (click to go light) -->
          <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <!-- Moon icon for light mode (click to go dark) -->
          <svg v-else viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
          </svg>
        </button>
      </div>
    </header>

    <NuxtPage />

    <Teleport to="body">
      <div
        v-if="authModal"
        class="auth-modal"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="authModal === 'register' ? 'register-modal-title' : 'login-modal-title'"
        @click.self="closeAuthModal"
      >
        <form class="auth-modal__panel" @submit.prevent>
          <div class="auth-modal__header">
            <div>
              <p class="eyebrow">Административная часть</p>
              <h2 :id="authModal === 'register' ? 'register-modal-title' : 'login-modal-title'">
                {{ authModal === 'register' ? 'Регистрация администратора' : 'Авторизация администратора' }}
              </h2>
            </div>
            <button
              type="button"
              class="auth-modal__close"
              aria-label="Закрыть окно"
              @click="closeAuthModal"
            >
              ×
            </button>
          </div>

          <div v-if="authModal === 'register'" class="auth-modal__grid">
            <label>
              Телефон
              <input type="tel" placeholder="+7 900 120-45-67" autocomplete="tel">
            </label>
            <label>
              Email
              <input type="email" placeholder="admin@wb-bidder.ru" autocomplete="email">
            </label>
            <label>
              Пароль
              <input type="password" placeholder="Минимум 8 символов" autocomplete="new-password">
            </label>
            <label>
              Название магазина
              <input type="text" placeholder="ИП Иванов Е.Е." autocomplete="organization">
            </label>
            <label class="auth-modal__wide">
              API-токен Wildberries
              <textarea placeholder="Токен категории Маркетинг и продвижение" />
            </label>
          </div>

          <div v-else class="auth-modal__grid">
            <label class="auth-modal__wide">
              Email
              <input type="email" placeholder="admin@wb-bidder.ru" autocomplete="email">
            </label>
            <label class="auth-modal__wide">
              Пароль
              <input type="password" placeholder="Ваш пароль" autocomplete="current-password">
            </label>
          </div>

          <div class="auth-modal__footer">
            <NuxtLink class="button button--secondary-dark" to="/dashboard" @click="closeAuthModal">
              Открыть кабинет
            </NuxtLink>
            <button class="button button--primary" type="submit">
              {{ authModal === 'register' ? 'Создать администратора' : 'Войти' }}
            </button>
          </div>
        </form>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false)
const authModal = ref<'register' | 'login' | null>(null)

onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

function toggleTheme() {
  isDark.value = !isDark.value
  const theme = isDark.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

function openAuthModal(mode: 'register' | 'login') {
  authModal.value = mode
}

function closeAuthModal() {
  authModal.value = null
}
</script>
