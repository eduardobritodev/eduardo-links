declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_PUBLIC_SITE_URL?: string;
    }
  }
}

export default defineNuxtConfig({
  // ==================== CONFIGURAÇÕES BÁSICAS ====================
  devtools: { enabled: true },
  ssr: true, // ✅ Habilitado para melhor SEO
  components: true,
  css: ['~/assets/css/index.css'],
  compatibilityDate: '2025-06-18',

  // ==================== CONFIGURAÇÕES DA APLICAÇÃO ====================
  app: {
    head: {
      // ==================== HTML LANG ====================
      htmlAttrs: {
        lang: 'pt-BR'
      },
      
      // ==================== FAVICONS COMPLETOS ====================
      link: [
        // Favicon básico
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.webp' },
        
        // Favicons modernos
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.webp' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.webp' },
        
        // Apple Touch Icons
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.webp' },
        
        // Android Chrome
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon.webp' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon.webp' },
      ],
      
      // ==================== META TAGS TÉCNICAS ====================
      meta: [
        // Detecção de formato
        { name: 'format-detection', content: 'telephone=no' },
        
        // Classificação de conteúdo
        { name: 'rating', content: 'general' },
        { name: 'distribution', content: 'global' },
        
        // Frequência de revisita
        { name: 'revisit-after', content: '7 days' },
        
        // Localização
        { name: 'geo.region', content: 'BR-CE' },
        { name: 'geo.placename', content: 'Crato, Ceará' },
        
        // Verificação de proprietário (adicione quando tiver)
        // { name: 'google-site-verification', content: 'SEU_CODIGO_AQUI' },
        
        // Segurança
        { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' },
        { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
        { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }
      ]
    }
  },

  // ==================== MÓDULOS PARA SEO ====================
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image' // Para otimização de imagens
  ],
  
  // ==================== RUNTIME CONFIG ====================
  runtimeConfig: {
    // Variáveis do servidor (privadas)
    private: {
      // Adicione variáveis privadas aqui se necessário
    },
    
    // Variáveis públicas (expostas no cliente)
    public: {
      // Usando variável de ambiente com fallback
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
      
      siteName: 'Eduardo B. | Links',
      siteDescription: 'Links úteis e recursos recomendados por Eduardo Brito.',
      authorName: 'Eduardo Brito',
      themeColor: '#000000',
      
      // Informações de contato
      companyName: 'Eduardo Brito',
      companyAddress: 'Crato, Ceará, Brasil',
      companyEmail: 'contato@eduardobrito.dev' // Ajuste conforme necessário
    }
  },

  // ==================== CONFIGURAÇÕES DE RENDERIZAÇÃO ====================
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        // Adicione suas rotas principais aqui
        // '/servicos',
        // '/sobre',
        // '/contato'
      ]
    },
    
    // Compressão
    compressPublicAssets: true
  },

  // ==================== SITEMAP AVANÇADO ====================
  sitemap: {
    hostname: 'https://links.eduardobrito.dev',
    gzip: true,
    exclude: [
      '/admin/**',
      '/404'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },

  // ==================== ROBOTS.TXT AVANÇADO ====================
  robots: {
    UserAgent: '*',
    Allow: '/',
    Disallow: ['/admin/', '/api/'],
    Sitemap: 'https://links.eduardobrito.dev/sitemap.xml',
    
    // Crawl delay para ser gentil com os crawlers
    CrawlDelay: 1
  },

  // ==================== OTIMIZAÇÕES DE PERFORMANCE ====================
  experimental: {
    payloadExtraction: false // Melhor para SEO
  },
  
  // Otimização de imagens
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // ==================== CONFIGURAÇÕES DE BUILD ====================
  build: {
    transpile: []
  },

  // ==================== VITE CONFIGURAÇÕES ====================
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;'
        }
      }
    }
  }
})