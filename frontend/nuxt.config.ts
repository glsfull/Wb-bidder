export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  srcDir: 'app/',
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-schema-org', '@nuxtjs/google-fonts'],
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'WB Bidder',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href:
            'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22%3E%3Crect width=%2264%22 height=%2264%22 rx=%2214%22 fill=%22%232e8b57%22/%3E%3Ctext x=%2232%22 y=%2238%22 text-anchor=%22middle%22 font-family=%22Arial,sans-serif%22 font-size=%2218%22 font-weight=%22700%22 fill=%22white%22%3EWB%3C/text%3E%3C/svg%3E'
        }
      ],
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
