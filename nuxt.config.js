/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2024-01-31 18:21:19
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2024-01-31 22:21:32
 * @FilePath: /ozbet_mobile/nuxt.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from "./i18n.config.js";
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ozbet_mobile',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: '/css/reset.css' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css',
    '@/static/css/font.css',
    '@/static/css/drak.css',
    '@/static/css/light.css',
    "@/static/fonts/iconfont.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/flexible.js', ssr: false },
    { src: '@/plugins/persistLanguage.js', ssr: false },
    '@/plugins/vant',
    '@/plugins/sessionStorage.js',
    '@/plugins/setRootClass.js',
  ],
  router: {
    middleware: ['routerMiddleware'] // 应用全局中间件
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
    'nuxt-windicss',
  ],
  cookies: {
    i18n: {
      parseLocaleFromCookie: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/i18n',
  ],
  i18n,
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    distDir: "dist", // 打包输出目录
    extractCSS: true, // css提取
  },
  postcss: require('./postcss.config.js'),
}
