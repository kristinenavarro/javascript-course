'use strict';

// CONSTANTS
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cache selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const hscoreEl = document.querySelector('.highscore'); 
const guessEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helpers
function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  hscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessEl.value = '';
}

// Game state
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// Main game logic
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessEl.value); 

  if (!guess) {
    return setMessage('⛔ No number!');
  }

  if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(`Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}! 🤯`);
  }

  if (guess === secretNumber) {
    
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    disablePlay(true);
    clearInput();

    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
  } else {
  
    if (score > 1) {
      setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      setScore(score);
    } else {
      setMessage('💀 Game Over! You lost.');
      setNumber(secretNumber);
      setBackground('maroon');
      disablePlay(true);
      clearInput();
    }
  }
});

// Reset game
againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
  console.log('Game Reset! New Secret Number:', secretNumber);
});
