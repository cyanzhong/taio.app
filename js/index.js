const menuBtn = document.querySelector('.menu_btn');
const menuNav = document.querySelector('.nav_compact ul');
const menuItems = document.querySelectorAll('.nav_compact li a');
const bodyElement = document.querySelector('body');
let isMenuOpened = false;

function closeMenu() {
  menuBtn.classList.remove('open');
  menuNav.classList.remove('open');
  bodyElement.classList.remove('open');
  isMenuOpened = false;
}

function openMenu() {
  menuBtn.classList.add('open');
  menuNav.classList.add('open');
  bodyElement.classList.add('open');
  isMenuOpened = true;
}

menuBtn.addEventListener('click', () => {
  if (isMenuOpened) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
  if (!isMenuOpened) {
    return;
  }

  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (width < 768) {
    return;
  }

  closeMenu();
});