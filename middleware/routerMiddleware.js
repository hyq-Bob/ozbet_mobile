export default function ({ route, redirect, store, app }) {
  let envCookieLangKey = process.env.API_COOKIE_LANG_KEY;
  let lang = app.$cookies.get(envCookieLangKey) || store.state.i18nModule.locale;
  app.i18n.locale = lang;
  // route.name = route.path + "___" + lang
  if (route.path == '/') {
    return redirect("/login")
  }
}
