import { clearAllCookie, clearAllLocalStorage } from "./storage";

export const handleLogout = (): void => {
  clearAllLocalStorage();
  clearAllCookie();

  window.location.reload();
};
