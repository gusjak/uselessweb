const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const buttons = document.querySelectorAll('button');
const acceptButton = document.getElementById('first');
const declineButton = document.getElementById('second');
const partyButton = document.getElementById('third');
const partyHorn = new Audio('/public/sfx/partyhorn.mp3');

// Huge loop that will determine what happens depending on what button you click.
buttons.forEach((button) => {
  //  Reveals buttons
  setTimeout(() => {
    button.classList.toggle('hidden');
  }, 3500);
  // Removes button animation class
  setTimeout(() => {
    button.classList.toggle('animation');
  }, 5000);
  button.addEventListener('click', () => {
    if (button.className === 'accept') {
      h1.style.color = 'green';
      h1.innerHTML = 'Awesome!';
      h2.innerHTML = 'You are being redirected...';
      // acceptButton.classList.add('hidden');
      // declineButton.classList.add('hidden');
      // partyButton.classList.add('hidden');
      setInterval(() => {
        window.location.replace('game.html');
      }, 3000);
    }
    if (button.className === 'decline') {
      h1.style.color = 'red';
      h2.style.color = 'white';
      h1.innerHTML = 'Rude!';
      h2.innerHTML = `Terminating window in 3 seconds.`;
      // acceptButton.classList.add('hidden');
      // declineButton.classList.add('hidden');
      // partyButton.classList.add('hidden');

      document.body.style.backgroundColor = 'black';
      setInterval(() => {
        window.open('', '_self').close();
      }, 3000);
    }
    if (button.className === 'party') {
      setTimeout(() => {
        partyHorn.play();
      }, 800);
      h1.style.color = 'hotpink';
      h1.innerHTML = 'Party Mode Initiated!';
      h2.innerHTML = 'Scroll up and down to party.';
      // acceptButton.classList.add('hidden');
      // declineButton.classList.add('hidden');
      // partyButton.innerHTML = 'Partypooper Button';

      // button.addEventListener('click', () => {
      //   window.location.replace('/index.html');
      // });

      if (window.innerWidth > 414) {
        window.addEventListener('wheel', (event) => {
          if (event.deltaY < 0) {
            document.body.style.backgroundColor = 'FireBrick';
          } else if (event.deltaY > 0) {
            document.body.style.backgroundColor = 'RoyalBlue';
          }
        });
      } else {
        h1.innerHTML = 'Party Mode Initiated!';
        h2.innerHTML = 'Tap screen to party.';
        window.addEventListener('touchstart', (event) => {
          document.body.style.backgroundColor = 'FireBrick';
        });
        window.addEventListener('touchend', (event) => {
          document.body.style.backgroundColor = 'RoyalBlue';
        });
      }
    }
  });
});
