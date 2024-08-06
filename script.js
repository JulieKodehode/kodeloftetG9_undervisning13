// RECAP
// variabler

const name = 'Julie';

let age = 27;

const isPresent = true;

// variabelen 'var' er gått ut på dato

// primære datatyper
// "" '' = string
// 27 = tall (number)
// sant eller usant (true or false) = boolean

// ikke-primære datatyper
// function
// array

// FUNCTIONS

// function eller regular function
// function nøkkelord, function navn, function brackets, function curly brackets, function call
function personal() {
  const userName = 'Julie';
  const userAge = 27;
  const userPresent = true;

  // String combination / Varable combination
  const userInfo =
    'Mitt navn er' +
    ' ' +
    userName +
    '. ' +
    'Jeg er' +
    ' ' +
    userAge +
    '. ' +
    'Er på Fontenehuset' +
    ' ' +
    userPresent +
    '.';
  console.log(userInfo);

  // Template litteral
  const userCredentials = `Mitt navn er ${userName}. Jeg er ${userAge}. Er på Fontenehuset ${userPresent}`;
}

personal();

// arrow function
const simpleCalculator = () => {
  let number1 = 10;
  let number2 = 6;
  let sum = number1 + number2;

  console.log(number1);
  console.log(number2);
  console.log(sum);
};

simpleCalculator();

// DOM MANIPULATION

/*
const betyr konstakt varabel
fillInText betyr et variabel navn
= betyr å erklære noe
document betyr HTML dokumentet
.getElementById betyr at vi henter et element med en ID
('fillInText') betyr id-navnet vi har hentet
*/

// laget en variabel som lagrer at vi henter et elment med ID-navnet fillInText fra HTML
const fillInText = document.getElementById('fillInText');
console.log(fillInText);

fillInText.textContent = 'Jeg er innhold fra JavaScript!';

const changeColor = document.getElementById('changeColor');
console.log(changeColor);

function changeColorFunction() {
  changeColor.classList.toggle('blue');
}

changeColor.addEventListener('click', changeColorFunction);
