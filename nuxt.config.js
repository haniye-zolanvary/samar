import {
  baseURL
} from './configs'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  router: {
    mode: 'history'
  },
  head: {
    title: 'samar tech',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/global.scss',
    '@/assets/fonts/index.scss',
    'bootstrap/dist/css/bootstrap.css',
  ],

  script: [
    {
      src: 'jquery/dist/jquery.slim.js',
      body: true
    },
    {
      src: 'popper.js/dist/umd/popper.js',
      body: true
    },
    {
      src: 'bootstrap/dist/js/bootstrap.js',
      body: true
    }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {  solid: true }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'
  ],
  axios: {
    baseURL: baseURL
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isClient }) {
      const alias = (config.resolve.alias = config.resolve.alias || {})
      alias['@constants'] = '@/assets/styles/constants'
      alias['@images'] = '@/assets/images'
      alias['@mixins'] = '@/assets/styles/mixins'
    }
  }
}
