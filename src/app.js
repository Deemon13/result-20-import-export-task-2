import { cookie } from "./utils/htmlElements";
import { keyCookieInLocalStorage } from "./utils/variables";

let isInLocalStorage = false;

export function initialCookies() {
  isInLocalStorage = !localStorage.getItem(keyCookieInLocalStorage)
    ? false
    : true;
  if (isInLocalStorage) {
    cookie.classList.add("hide");
  }
}
