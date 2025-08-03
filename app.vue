<template>
  <NuxtLayout>
    <Whatsapp />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Whatsapp from '@/components/global/whatsapp/Whatsapp.vue'

const router = useRouter()
const { public: publicConfig } = useRuntimeConfig()

// SEO Meta Tags Globais
useSeoMeta({
  // Configurações básicas
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  
  // Título e Descrição
  title: publicConfig.siteName,
  ogTitle: publicConfig.siteName,
  description: publicConfig.siteDescription,
  ogDescription: publicConfig.siteDescription,
  
  // SEO Keywords e Robots
  keywords: 'soluções digitais, certificado digital, desenvolvimento web, viampex, agência digital, SEO, tráfego pago, design gráfico, branding',
  robots: 'index, follow',
  googlebot: 'index, follow, max-image-preview:large, max-snippet:-1',
  author: publicConfig.authorName,
  
  // Theme e Mobile
  themeColor: publicConfig.themeColor,
  msapplicationTileColor: publicConfig.themeColor,
  appleMobileWebAppStatusBarStyle: 'default',
  appleMobileWebAppCapable: 'yes',
  
  // Open Graph
  ogType: 'website',
  ogImage: '/images/og-image.webp',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/webp',
  ogUrl: publicConfig.siteUrl,
  ogSiteName: publicConfig.siteName,
  ogLocale: 'pt_BR',

  // Application
  applicationName: publicConfig.siteName,
  appleMobileWebAppTitle: publicConfig.siteName,
})

// Link Tags Estruturados
useHead({
  link: [
    // Canonical
    { rel: 'canonical', href: publicConfig.siteUrl },
    
    // DNS Prefetch para performance
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//cdnjs.cloudflare.com' },
    
    // Preconnect para recursos críticos
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
  ],
  
  // Schema.org JSON-LD
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Viampex',
        url: publicConfig.siteUrl,
        logo: `${publicConfig.siteUrl}/images/logo.webp`,
        description: publicConfig.siteDescription,
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR',
          addressLocality: 'Crato',
          addressRegion: 'CE'
        },
        sameAs: [
          // Adicione suas redes sociais aqui
          // 'https://www.facebook.com/viampex',
          // 'https://www.instagram.com/viampex'
        ]
      })
    }
  ]
})

watch(router.afterEach, () => {
  window.scrollTo(0, 0) // Rola o scroll para o topo ao navegar
})
</script>