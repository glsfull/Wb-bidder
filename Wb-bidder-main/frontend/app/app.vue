<template>
  <div class="app-shell">
    <header class="app-header">
      <NuxtLink class="app-header__brand" to="/">
        WB-Bidder
      </NuxtLink>
      <nav class="app-nav" aria-label="Основная навигация">
        <a href="/#features">Возможности</a>
        <a href="/#ai-advisor">AI-советник</a>
        <a href="/#pricing">Тарифы</a>
        <a href="/#about">О сервисе</a>
        <a href="/#contacts">Контакты</a>
      </nav>
      <div class="header-actions" aria-label="Действия">
        <a href="/#registration-form" title="Регистрация">👤+</a>
        <NuxtLink to="/dashboard" title="Вход">👤</NuxtLink>
        <a href="/#contacts" title="Контакты">☎</a>
      </div>
      <nav class="app-nav app-nav--secondary" aria-label="Разделы приложения">
        <a href="/#registration-form">Регистрация</a>
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
