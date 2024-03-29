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
