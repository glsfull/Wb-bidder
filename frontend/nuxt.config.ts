export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  srcDir: 'app/',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-schema-org', '@nuxtjs/google-fonts'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'WB Bidder',
      meta: [
        {
          name: 'description',
          content:
            'WB Bidder автоматизирует управление рекламными ставками Wildberries, KPI, аналитикой кампаний и AI-рекомендациями.'
        },
        { property: 'og:title', content: 'WB Bidder' },
        {
          property: 'og:description',
          content:
            'Операционный автопилот рекламы Wildberries для управления ставками, KPI и рекомендациями.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }
  },
  css: ['~/../assets/css/main.css'],
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'WB Bidder'
    }
  },
  googleFonts: {
    families: {
      Inter: [400, 600, 700, 800]
    },
    display: 'swap'
  },
  typescript: {
    strict: true
  }
})
