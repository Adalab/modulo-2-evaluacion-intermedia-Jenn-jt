'use strict';

/*function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}*/

//constantes
const playBtn = document.querySelector('.js_playBtn');

const randomNum = Math.ceil(Math.random() * 6);

// agregar evento al botón
document.querySelector('.js_playBtn').addEventListener('click', function () {
  const userInput = document.getElementById('userInput').value;
  if (userInput == randomNum) {
    alert('Has ganado el doble de lo apostado');
  } else {
    alert('Has perdido lo apostado');
  }
});

// Obtener el número
const selectedNum = parseInt(document.querySelector('.js_input-field').value);

// Comparar el número
if (selectedNum === randomNum) {
  document.getElementById('result').innerHTML =
    'Has ganado el doble de lo apostado' + randomNum;
} else if (selectedNum < randomNum) {
  document.getElementById('result').innerHTML = 'Has perdido lo apostado';
} else {
  document.getElementById('result').innerHTML = 'Has perdido lo apostado';
}
