export default ({ app, store }) => {
  // 获取持久化的语言设置
  const persistedLocale = app.$cookies.get('i18n_redirected');
  // 设置语言
  if (persistedLocale) {
    store.commit('i18nModule/SET_LOCALE', persistedLocale);
  }
  // 监听语言变化，更新 Cookie
  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith('i18nModule/')) {
      console.log("监听语言改变》》》》 ", state.i18nModule.locale);
      let lang = state.i18nModule.locale
      app.i18n.locale = lang
      app.i18n.fallbackLocale = lang
      app.i18n.defaultLocale = lang
      app.$cookies.set('i18n_redirected', lang);
    }
  });
};
