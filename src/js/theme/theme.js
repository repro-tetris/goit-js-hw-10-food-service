const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  PARAM_NAME: 'theme',
};

let switchEl;
let bodyEl;
let isLightTheme = true;

const getCurrentTheme = () => (isLightTheme ? Theme.LIGHT : Theme.DARK);

const setCurrentTheme = theme => (isLightTheme = theme === Theme.LIGHT);

export function registerThemeSwitcher(checkboxId) {
  switchEl = document.querySelector(checkboxId);
  switchEl.addEventListener('input', switchElChecked);
  bodyEl = document.querySelector('body');

  restoreTheme();
}

function switchElChecked(e) {
  isLightTheme = !isLightTheme;
  changeTheme(getCurrentTheme());
  saveCurrentTheme();
}

function changeTheme(newTheme) {
  const classForRemove = newTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  console.log(classForRemove);
  bodyEl.classList.remove(classForRemove);
  bodyEl.classList.add(newTheme);
}

function saveCurrentTheme() {
  localStorage.setItem(Theme.PARAM_NAME, getCurrentTheme());
}

function restoreTheme() {
  const curTheme = localStorage.getItem(Theme.PARAM_NAME);

  if (curTheme) {
    changeTheme(curTheme);
    setCurrentTheme(curTheme);

    switchEl.checked = !isLightTheme;
  }
}
