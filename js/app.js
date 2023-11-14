const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', (e) => {
  if (e.currentTarget.classList.contains('menu-btn')) {
    menu.classList.toggle('menu--active');
  }
})