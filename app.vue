<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

useSeoMeta({
  // Default
  charset: 'utf-8',
  xUaCompatible: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',

  // Title and Description
  title: 'Eduardo B. | Links',
  ogTitle: 'Eduardo B. | Links',
  description: 'Links de indicação do Eduardo Brito =D',
  ogDescription: 'Links de indicação do Eduardo Brito =D',
  robots: 'index, follow',
  googlebot: 'max-image-preview',
  author: 'Eduardo Brito',

  // Theme
  themeColor: '#ffffff',
  msapplicationTileColor: '#ffffff',
  appleMobileWebAppStatusBarStyle: 'default',

  // Site URL
  ogType: 'website',
  ogImageType: 'image/jpeg',
  ogImage: '',
  ogUrl: 'https://links.eduardobrito.dev',
  ogSiteName: 'Eduardo B. | Links',
  ogLocale: 'pt_BR',
  applicationName: 'Eduardo B. | Links',
  appleMobileWebAppTitle: 'Eduardo B. | Links'
})

watch(router.afterEach, () => {
  window.scrollTo(0, 0) // Rola o scroll para o topo ao navegar
})
</script>
