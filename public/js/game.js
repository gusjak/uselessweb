const img = document.querySelector('img');
const returnButton = document.querySelector('.return');
const popSound = new Audio();
popSound.src = '/public/sfx/pop.ogg';
popSound.preload = 'auto';

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

counter.addEventListener('click', function () {
  count += 1;
  clickCounter.innerHTML = 'You have clicked me' + '  ' + count + '  ' + 'times!';
});

returnButton.addEventListener('click', () => {
  window.location.replace('index.html');
});
