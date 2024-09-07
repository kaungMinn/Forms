export function setCookie(key: string, value: string, path = "/"): void {
  document.cookie = `${key}=${value};path=${path}`;
  return;
}

export function getCookie(key: string): string | null {
  const cookieData = document.cookie.split(";");

  for (let i = 0; i < cookieData.length; i++) {
    const cookiePair = cookieData[i].split("=");

    if (key === cookiePair[0].trim()) return cookiePair[1];
  }
  /** if not found, return null */
  return null;
}

export function clearAllCookie(path = "/") {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path};`);
  });
  return;
}

export function setLocalStorage(key: string, value: string | boolean) {
  window.localStorage.setItem(key, JSON.stringify(value));
  return;
}

export function getLocalStorage(key: string) {
  const storage = window.localStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  }

  return null;
}

export function removeLocalStorage(key: string) {
  window.localStorage.removeItem(key);
  return;
}

export function clearAllLocalStorage() {
  window.localStorage.clear();
  return;
}
