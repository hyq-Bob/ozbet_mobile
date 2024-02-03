export const headerModule = {
  namespaced:true,
  state:{
    isToggleMenu: false
  },
  mutations:{
    TOGGLE_MENU(state, value) {
      state.isToggleMenu = value
    }
  },
  actions:{},
  getters:{
    getToggleMenu:(state)=>state.isToggleMenu
  }
}