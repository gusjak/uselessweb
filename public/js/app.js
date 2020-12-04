const img = document.querySelector('img');
const popSound = new Audio();
popSound.src = '/public/sfx/pop.ogg';
popSound.preload = 'auto';

img.addEventListener('click', function () {
  if (this.classList.contains('changed')) {
    this.src = '/public/img/closed.png';
    this.className = '';
  } else {
    this.className = 'changed';
    this.src = '/public/img/opened.png';
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
