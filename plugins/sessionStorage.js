// plugins/sessionStoragePlugin.js

export default ({ app }, inject) => {
  inject('sessionStorage', {
    setItem(key, value) {
      if (process.client) {
        sessionStorage.setItem(key, JSON.stringify(value));
      }
    },
    getItem(key) {
      if (process.client) {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
      }
      return null;
    },
  });
};
