const container = document.querySelector('.container');
const img = document.querySelector('img');
const returnButton = document.querySelector('.return');
const popSound = new Audio();
popSound.src = '/public/sfx/pop.ogg';
popSound.preload = 'auto';

window.addEventListener('load', () => {
  setTimeout(() => {
    console.log('loaded');
    console.log(container);
    container.classList.remove('hidden');
    container.classList.add('revealed');
  }, 3000);
});

img.addEventListener('click', () => {
  if (img.classList.contains('changed')) {
    img.src = '/public/img/closed.png';
    img.className = '';
  } else {
    img.className = 'changed';
    img.src = '/public/img/opened.png';
  }
  popSound.play();
});

const clickCounter = document.querySelector('h2');

let counter = document.querySelector('.imgBtn'),
  count = 0;

counter.addEventListener('click', () => {
  count += 1;
  clickCounter.innerHTML = count;
});

returnButton.addEventListener('click', () => {
  window.location.replace('index.html');
});
