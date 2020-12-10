const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.className === 'accept') {
      h1.innerHTML = 'Awesome!';
      h2.innerHTML = 'You are being redirected...';
      setInterval(() => {
        window.location.replace('game.html');
      }, 1500);
    }
    if (button.className === 'decline') {
      h1.style.color = 'white';
      h2.style.color = 'white';
      h1.innerHTML = 'Rude!';
      h2.innerHTML = 'Terminating window in 3 seconds.';

      document.body.style.backgroundColor = 'black';
      setInterval(() => {
        window.close();
      }, 3000);
    }
    if (button.className === 'party') {
      h1.innerHTML = 'Party Mode Initiated!';
      h2.innerHTML = 'Scroll up and down to party.';

      if (window.innerWidth > 414) {
        window.addEventListener('wheel', (event) => {
          if (event.deltaY < 0) {
            console.log('scrolling up');
            document.body.style.backgroundColor = 'red';
          } else if (event.deltaY > 0) {
            console.log('scrolling down');
            document.body.style.backgroundColor = 'blue';
          }
        });
      } else {
        h1.innerHTML = 'Party Mode Initiated!';
        h2.innerHTML = 'Tap screen to party.';
        window.addEventListener('touchstart', (event) => {
          console.log('finger down');
          document.body.style.backgroundColor = 'red';
        });
        window.addEventListener('touchend', (event) => {
          console.log('finger up');
          document.body.style.backgroundColor = 'blue';
        });
      }
    }
  });
});
