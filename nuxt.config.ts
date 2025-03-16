// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      auth: {
        redirectUserTo: '/user',
        redirectGuestTo: '/',
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-03-16',
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
