// Diseño html
let container = document.querySelector('.container');
let description = document.querySelector('.description');
let listNumberRandom = document.querySelector('.listNumberRandom');

description.textContent = "Genera números aleatorios de 1 hasta 5.";

// Botón para generar número aleatorio
let numberRandomButton = document.createElement('button');
numberRandomButton.textContent = 'Generar número aleatorio';
numberRandomButton.classList.add('btn');
container.append(numberRandomButton);

let resetGameButton;
let messageFinal;

// Números aleatorios de 1 hasta 5
function numberRandom() {
    let numberRandom = Math.floor(Math.random() * 5) + 1;
    let numberText = document.createElement('span');
    numberText.textContent = numberRandom;
    listNumberRandom.appendChild(numberText);
    maxNumberRandom();
}

// Cantidad máxima de numeros aleatorios generados
function maxNumberRandom() {
    let countNumberRandom = document.querySelectorAll('.listNumberRandom span');
    
    if (countNumberRandom.length > 4) {
        numberRandomButton.style.display = 'none';

        resetGameButton = document.createElement('button');
        resetGameButton.classList.add('btn');
        resetGameButton.textContent = 'Volver iniciar el Juego'

        messageFinal = document.createElement('p');
        messageFinal.classList.add('messageFinal');
        messageFinal.textContent = '¡LLegamos al final del juego!';

        container.append(messageFinal, resetGameButton);
    }
}

numberRandomButton.addEventListener('click', numberRandom);
