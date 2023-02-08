// close btn
const closeDesktop = document.querySelector('.main__close_desktop');
const close = document.querySelector('.main__close');

closeDesktop.addEventListener('mouseover', () => {
  close.classList.add('active');
});

closeDesktop.addEventListener('mouseout', () => {
  close.classList.remove('active');
});

// loader

const loader = document.querySelector('.page__loader-wrapper');

window.onload = () => {
  loader.style.opacity = '0';
  loader.addEventListener('transitionend', () => loader.remove());
};


// slider

const firstImg = document.querySelector('.main__img_1');
const sideABtn = document.querySelector('.main__side-a');
const sideBBtn = document.querySelector('.main__side-b');

sideABtn.addEventListener('click', () => {
  sideBBtn.classList.remove('active');
  sideABtn.classList.add('active');
  firstImg.style.opacity = '1';
});

sideBBtn.addEventListener('click', () => {
  sideABtn.classList.remove('active');
  sideBBtn.classList.add('active');
  firstImg.style.opacity = '0';
});


const checkSides = () => {
  if (sideBBtn.classList.contains('active')) {
    sideBBtn.classList.remove('active');
    sideABtn.classList.add('active');
    firstImg.style.opacity = '1';
  } else {
    sideABtn.classList.remove('active');
    sideBBtn.classList.add('active');
    firstImg.style.opacity = '0';
  }
};

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      checkSides();
      break;
    case 'ArrowDown':
      checkSides();
      break;
  }
});


