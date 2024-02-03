export const themeModule = {
  namespaced:true,
  state:{
    theme: 'light', // light drak
  },
  mutations:{
    TOGGLE_THEME(state, value) {
      state.theme = value;
    }
  },
  actions:{},
  getters:{
    getTheme:(state)=>state.theme
  }
}