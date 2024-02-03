export default {
  locales: [
    {
      code: 'en',
      name: 'English',
      file: 'en.json'
    },
    {
      code: 'zh',
      name: '简体中文',
      file: "zh.json"
    },
  ],
  defaultLocale: process.env.API_DEFAULT_LANG,
  strategy:"no_prefix",
  vueI18n: {
    fallbackLocale: process.env.API_DEFAULT_LANG,
    useCookie: true,
    cookieKey: process.env.API_COOKIE_LANG_KEY,
    messages: {
      en: require('./locales/en.json'),
      zh: require('./locales/zh.json'),
    },
  },
}
