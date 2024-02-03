// plugins/set-root-class.js

export default ({ app, store }) => {
  if (process.client) {
    document.body.classList = 'light';
    store.subscribe((mutation, state) => {
      const theme = state.themeModule.theme;
      // 设置类名
      document.body.classList = theme;
    })

  }
};
