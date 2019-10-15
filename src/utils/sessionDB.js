export default {
  get: (key, defaultValue) => {
    let value = JSON.parse(sessionStorage.getItem(key));
    return value !== null ? value : defaultValue;
  },
  set: (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
};
