import { keyCookieInLocalStorage } from "./variables";

export const cookie = document.querySelector(".cookie-consent");

const btnCookieAcception = cookie.querySelector(".cookie-consent__button");

btnCookieAcception.addEventListener("click", handleAccept);

function handleAccept() {
  localStorage.setItem(keyCookieInLocalStorage, "accepted".toString());
  cookie.classList.add("hide");
}
