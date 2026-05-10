<template>
  <div class="app-shell">
    <header class="app-header">
      <NuxtLink class="app-header__brand" to="/">
        WB Bidder
      </NuxtLink>
      <nav class="app-nav" aria-label="Основная навигация">
        <NuxtLink to="/">Регистрация</NuxtLink>
        <NuxtLink to="/dashboard">Кампании</NuxtLink>
        <NuxtLink to="/demo">Сценарии</NuxtLink>
      </nav>
      <div class="theme-switcher" aria-label="Переключение темы">
        <button type="button" aria-pressed="true">
          Светлая
        </button>
        <button type="button" aria-pressed="false">
          Темная
        </button>
      </div>
    </header>

    <NuxtPage />
  </div>
</template>
