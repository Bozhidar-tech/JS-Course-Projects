'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number! 🚫';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'Too High! 📈' : 'Too Low! 📉';

    let score = Number(document.querySelector('.score').textContent);
    if (score > 1) {
      document.querySelector('.score').textContent = score - 1;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 😢';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
