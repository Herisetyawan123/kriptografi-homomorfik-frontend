class SessionApp {
  static get(key: string) {
    return localStorage.getItem(key);
  }

  static set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  static clear() {
    localStorage.clear();
  }
}

export default SessionApp;