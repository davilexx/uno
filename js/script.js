// loader

const loader = document.querySelector('.page__loader-wrapper');
const video = document.querySelector('.header__video');

window.addEventListener('DOMContentLoaded', () => {
  loader.style.opacity = '0';
  loader.addEventListener('transitionend', () => loader.remove());
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  video.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
});


// fade out video

window.addEventListener('scroll', function(e) {
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  video.style.opacity = Math.max(0, Math.min(1, -scroll / 400 + 2));
});


// scroll

const goTopButton = document.querySelector('.about__go-top');

goTopButton.addEventListener('click', () => {
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
});


// remove hash

window.addEventListener('scroll', () => {
  const removeHash = () => { 
    history.pushState("", document.title, window.location.pathname + window.location.search);
  }
  removeHash();
});


// menu

const links = document.querySelectorAll('.menu__link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


// hide menu
const menuWrapper = document.querySelector('.page__menu-wrapper');

if (window.screen.width > 520) {
  menuWrapper.classList.add('unactive');
}

window.addEventListener('scroll', () => {
  if (window.screen.width > 520) {
    if (window.pageYOffset < 1000) {
      menuWrapper.classList.add('unactive');
    } else {
      menuWrapper.classList.remove('unactive');
    }
  }
});


// burger
const burger = document.querySelector('.burger');
const menuLink = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuWrapper.classList.toggle('active');
});

menuLink.forEach(el => {
  el.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuWrapper.classList.toggle('active');
  });
});