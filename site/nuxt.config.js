export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Orange',
    title: 'Documentation', // Backup title if page doesn't have one
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon.ico'
      }
    ]
  },
  /*
   ** Router configuration
   */
  router: {
    linkActiveClass: 'is-active',
    scrollBehavior (to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '@/assets/styles/styles.scss',
      lang: 'scss'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/global.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  }
}
