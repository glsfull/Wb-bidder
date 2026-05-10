<template>
  <div class="app-shell">
    <header class="app-header">
      <NuxtLink class="app-header__brand" to="/">WB-Bidder</NuxtLink>

      <nav class="app-nav" aria-label="Основная навигация">
        <a href="/#features">Возможности</a>
        <a href="/#ai-advisor">AI-советник</a>
        <a href="/#tariffs">Тарифы</a>
        <a href="/#contacts">Контакты</a>
      </nav>

      <div class="header-actions" aria-label="Действия пользователя">
        <a
          href="/#registration-form"
          class="header-icon-btn"
          data-tooltip="Регистрация"
          aria-label="Зарегистрироваться"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        </a>

        <NuxtLink
          to="/dashboard"
          class="header-icon-btn"
          data-tooltip="Войти"
          aria-label="Войти в личный кабинет"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </NuxtLink>

        <a
          href="/#contacts"
          class="header-icon-btn"
          data-tooltip="Контакты"
          aria-label="Контакты и поддержка"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 21.73 16z" />
          </svg>
        </a>

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
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false)

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
</script>
