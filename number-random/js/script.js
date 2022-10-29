// Diseño html
let sectionContainer = document.querySelector('.container');
let numberRandomContainer = document.querySelector('.number_random');
let numberRandomButton = document.querySelector('button');

let numberRandomText = document.createElement('label');

numberRandomButton.textContent = 'Nuevo número aleatorio';

// Lógica de programación del juego
// Números aleatorios de 1 hasta 10
function numberRandom() {
    let numberRandom = Math.floor(Math.random() * 10) + 1;
    numberRandomText.textContent = numberRandom;
    numberRandomContainer.append(numberRandomText);
}

numberRandomButton.addEventListener('click', numberRandom);