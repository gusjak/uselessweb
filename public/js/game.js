// Page loader, will add a more nice effect to it later.
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const gameContainer = document.querySelector('.game-container');

window.addEventListener('load', () => {
  setTimeout(() => {
    gameContainer.classList.toggle('hidden');
    h1.classList.toggle('hidden');
    h2.classList.toggle('hidden');
  }, 3500);
});

// Toggles between two images when the image is clicked.
// Also makes a cool mouth-pop sound.
const img = document.querySelector('img');
const popSound = new Audio('/public/sfx/pop.mp3');

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

// Click counter.
const clickCounter = document.querySelector('.amountOfClicks');

let counter = document.querySelector('.imgBtn'),
  count = 0;

counter.addEventListener('click', () => {
  count += 1;
  clickCounter.innerHTML = count;
  console.log(count);
});

// Button to return to "Title Screen".
const returnButton = document.querySelector('.return');

returnButton.addEventListener('click', () => {
  window.location.replace('index.html');
});

setTimeout(() => {
  setInterval(() => {
    const encouragements = [
      'You can do it!',
      'Hang in there!',
      'Follow your dreams!',
      'Reach for the stars!',
      'Never give up!',
      'Come on!',
      'There you go!',
      'You pop, I pop!',
      'Sweet!',
      'But.. why?',
      'This is not tiresom!',
      "You've got all day, right?",
      'Woooohooo!',
      'Existential crisis much?',
    ];

    const randomEncouragement = encouragements[(Math.random() * encouragements.length) | 0];

    h2.classList.remove('hidden');
    h2.innerHTML = randomEncouragement;
  }, 3000);
}, 4000);
