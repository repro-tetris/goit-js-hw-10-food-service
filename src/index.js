import { setThemeSwitcher } from './js/theme/theme';
import menuData from './menu.json';
import menuItemsTpl from './templates/menu-items.hbs';
import './sass/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  setThemeSwitcher('#theme-switch-toggle');
  document.querySelector('.js-menu').innerHTML = menuItemsTpl(menuData);
});
