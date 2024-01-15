import './scss/style.scss';

const body = document.querySelector('body');
const bntOpen = document.querySelector('#btnOpen');
const bntClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileMenu() {
  console.log('open');

  bntOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
}

function closeMobileMenu() {
  console.log('close');

  bntOpen.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
}

function setupNav(e) {
  if (e.matches) {
    //is mobile
    console.log('is mobile');
    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  } else {
    //is desktop
    console.log('is desktop');
    navContent.style.display = '';
  }
}

setupNav(media);

bntOpen.addEventListener('click', openMobileMenu);
bntClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupNav(e);
});
