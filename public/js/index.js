// Store all the variables
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const buttons = document.querySelectorAll('button');
const acceptButton = document.getElementById('first');
const declineButton = document.getElementById('second');
const partyButton = document.getElementById('third');
const partyHorn = new Audio('/public/sfx/partyhorn.mp3');
const relaxMusic = new Audio('/public/sfx/relax.mp3');

// Huge loop that will determine what happens depending on what button you click.
buttons.forEach((button) => {
  //  Reveals buttons
  setTimeout(() => {
    button.classList.toggle('hidden');
  }, 3500);
  // Removes button animation
  setTimeout(() => {
    button.classList.toggle('animation');
  }, 5000);
  // Event if user clicks 'Heck yes!'
  button.addEventListener('click', () => {
    if (button.className === 'accept') {
      h1.style.color = 'limegreen';
      h1.textContent = 'Awesome!';
      h2.textContent = 'You are being redirected...';
      acceptButton.classList.add('hidden');
      declineButton.classList.add('hidden');
      partyButton.classList.add('hidden');
      setInterval(() => {
        window.location.replace('game.html');
      }, 3000);
    }
    // Event if user clicks 'Nope'
    if (button.className === 'decline') {
      h1.style.color = 'firebrick';
      h2.style.color = 'gainsboro';

      h1.textContent = 'Rude!';
      h2.textContent = 'Take a deep breath and reconsider.';
      acceptButton.textContent = "Fine, I'll play.";
      partyButton.textContent = 'I would still rather party';
      declineButton.classList.add('hidden');

      setTimeout(() => {
        relaxMusic.play();
      }, 1500);

      acceptButton.addEventListener('click', () => {
        relaxMusic.pause();
      });
      partyButton.addEventListener('click', () => {
        relaxMusic.pause();
      });
    }
    // Event if user clicks 'I'd rather party...'
    if (button.className === 'party') {
      setTimeout(() => {
        partyHorn.play();
      }, 800);
      h1.style.color = 'hotpink';
      h1.textContent = 'Party Mode Activated!';
      h2.textContent = 'Scroll up and down to party.';
      acceptButton.classList.add('hidden');
      declineButton.classList.add('hidden');
      partyButton.textContent = 'Partypooper Button';

      button.addEventListener('click', () => {
        window.location.replace('/index.html');
      });
      // Desktop 'Party Event-listener'
      if (window.innerWidth > 414) {
        window.addEventListener('wheel', (event) => {
          if (event.deltaY < 0) {
            document.body.style.backgroundColor = 'firebrick';
          } else if (event.deltaY > 0) {
            document.body.style.backgroundColor = 'royalblue';
          }
        });
      }
      // Mobile 'Party Event-listener
      else {
        h1.textContent = 'Party Mode Activated!';
        h2.textContent = 'Tap screen to party.';
        window.addEventListener('touchstart', (event) => {
          document.body.style.backgroundColor = 'firebrick';
        });
        window.addEventListener('touchend', (event) => {
          document.body.style.backgroundColor = 'royalblue';
        });
      }
    }
  });
});
