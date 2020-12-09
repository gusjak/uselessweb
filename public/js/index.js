const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const accept = document.querySelector('.accept');
const decline = document.querySelector('.decline');

accept.addEventListener('click', () => {
  h1.innerHTML = 'Awesome!';
  h2.innerHTML = 'You are being redirected...';
  setInterval(function () {
    window.location.replace('game.html');
  }, 1500);
});

decline.addEventListener('click', () => {
  h1.innerHTML = 'Rude!';
  h2.innerHTML = 'Terminating window in 3 seconds.';
  setInterval(function () {
    window.close();
  }, 3000);
});
