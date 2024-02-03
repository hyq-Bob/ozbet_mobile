// store/i18n.js
export const i18nModule = {
  namespaced:true,
  state:{
    locale: process.env.API_DEFAULT_LANG
  },
  mutations:{
    SET_LOCALE(state, value) {
      state.locale = value;
    }
  },
  actions:{},
}