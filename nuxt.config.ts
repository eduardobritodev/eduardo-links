export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  components: true,
  css: ['~/assets/css/index.css'],
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-06-17'
})