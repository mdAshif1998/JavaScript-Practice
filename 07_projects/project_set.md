# Projects related to DOM

## Projet Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  // parseInt convert 1 if value is 111a
  // parseInt convert NaN if value is a111
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    const resultSpan = document.createElement('span');
    resultSpan.appendChild(document.createTextNode(`BMI: ${bmi}`));
    results.appendChild(resultSpan);

    function getFinding(finding) {
      const newLineSpan = document.createElement('br');
      results.appendChild(newLineSpan);

      const findingSpan = document.createElement('span');
      findingSpan.appendChild(document.createTextNode(`${finding}`));
      results.appendChild(findingSpan);
    }

    if (bmi < 18.6) {
      const finding = 'Under Weight';
      getFinding(finding);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      const finding = 'Normal Range';
      getFinding(finding);
    } else {
      const finding = 'Overweight';
      getFinding(finding);
    }
  }
});

```

## Project 3

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  clock.style.color = 'green';
}, 1000);

```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const newGameButton = document.createElement('input');
let prevGuess = [];
let numGuess = 1;
let totalNumberOfGuess = 3;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess >= totalNumberOfGuess) {
      displayGuess(guess);
      displayMessage(`Game Over. Ramdom number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  // Clean the existing value
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  remaining.innerHTML = `${totalNumberOfGuess - numGuess}`;
  numGuess++;
}

function displayMessage(message) {
  // DOM Manipulation
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  // newGameButton.classList.add('button');
  // newGameButton.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  newGameButton.setAttribute('type', 'submit');
  newGameButton.setAttribute('id', `${submit.getAttribute('id')}`);
  newGameButton.setAttribute('value', 'Start New Game');
  newGameButton.setAttribute('class', 'newGame');

  startOver.appendChild(newGameButton);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButtonAccess = document.querySelector('.newGame');
  newGameButtonAccess.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${totalNumberOfGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(newGameButton);
    playGame = true;
  });
}

```
