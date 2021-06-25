import { Theme } from '../utils/variables';

let switchEl;
let bodyEl;
let isLightTheme = true;

const getCurrentTheme = () => (isLightTheme ? Theme.LIGHT : Theme.DARK);

export function setThemeSwitcher(checkboxId) {
  switchEl = document.querySelector(checkboxId);
  switchEl.addEventListener('input', switchElChecked);
  bodyEl = document.querySelector('body');

  restoreTheme();
}

function switchElChecked() {
  toggleTheme();
  saveCurrentTheme();
}

function toggleTheme() {
  bodyEl.classList.remove(getCurrentTheme());
  isLightTheme = !isLightTheme;
  bodyEl.classList.add(getCurrentTheme());
}

function saveCurrentTheme() {
  localStorage.setItem(Theme.PARAM_NAME, getCurrentTheme());
}

function restoreTheme() {
  const curTheme = localStorage.getItem(Theme.PARAM_NAME);

  if (curTheme) {
    isLightTheme = curTheme === Theme.DARK;
    toggleTheme();
    switchEl.checked = !isLightTheme;
  }
}
