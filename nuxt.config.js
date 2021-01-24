import colors from 'vuetify/es5/util/colors'

export default {
  // router: {
  //   middleware: ['auth'],
  // },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - client',
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
    '@nuxtjs/auth-next',
    // [
    //   '@nuxtjs/proxy',
    //   {
    //     '/': {
    //       target: 'http://127.0.0.1:8000',
    //       changeOrigin: true,
    //       pathRewrite: { '^/': '' },
    //     },
    //   },
    // ],
    // ['@nuxtjs/proxy', { '/api': { target: 'http://localhost:8000' } }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // proxy: {
  //   '/api': {
  // target: 'http://localhost:9000',
  // changeOrigin: true,
  // pathRewrite: { '^/api': '/' },
  // },
  // },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://localhost:9000/api/v1/users/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: {
            url: 'http://localhost:9000/api/v1/users/logout',
            method: 'get',
          },
          user: {
            url: 'http://localhost:9000/api/v1/users/me',
            method: 'get',
            propertyName: 'user',
          },
        },
        // tokenRequired: true,
        // tokenType: 'bearer',
        // globalToken: true,
        // autoFetchUser: true
      },
    },
  },
}
