import './scss/style.scss';

const body = document.querySelector('body');
const main = document.querySelector('main');
const bntOpen = document.querySelector('#btnOpen');
const bntClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileMenu() {
  bntOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
  navContent.removeAttribute('inert');
  main.setAttribute('inert', '');
  bntClose.focus();
}

function closeMobileMenu() {
  bntOpen.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
  navContent.setAttribute('inert', '');
  main.removeAttribute('inert');
  bntOpen.focus();
}

function setupNav(e) {
  if (e.matches) {
    //is mobile

    navContent.setAttribute('inert', '');

    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  } else {
    //is desktop

    navContent.removeAttribute('inert');
    main.removeAttribute('inert');

    navContent.style.display = '';
  }
}

setupNav(media);

bntOpen.addEventListener('click', openMobileMenu);
bntClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupNav(e);
});
