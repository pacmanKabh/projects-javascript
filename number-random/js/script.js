// Diseño html
let listNumberRandom = document.querySelector('.listNumberRandom');
let button = document.querySelector('button');

button.textContent = 'Nuevo número aleatorio';

// Lógica de programación del juego
// Números aleatorios de 1 hasta 5
function numberRandom() {
    let numberRandom = Math.floor(Math.random() * 5) + 1;
    let numberText = document.createElement('span');
    numberText.textContent = numberRandom;
    listNumberRandom.appendChild(numberText);
}

button.addEventListener('click', numberRandom);
