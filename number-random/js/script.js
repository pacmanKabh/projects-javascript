// Diseño html
let container = document.querySelector('.container');
let description = document.querySelector('.description');
let listNumberRandom = document.querySelector('.listNumberRandom');

let numberRandomButton;
let resetGameButton;
let predictionButton;
let listPrediction;
let message;

//Iniciando el juego
newGame();

// Nuevo juego
function newGame() {
    description.textContent = "Genera números aleatorios de 1 al 5, para iniciar el juego debes hacer una predicción de los 5 números y escribirlo juntos.";

    let inputPrediction = document.createElement('input');
    inputPrediction.setAttribute('type', 'text');
    inputPrediction.setAttribute('placeholder', 'Ejem: 34251');
    inputPrediction.classList.add('numberPrediction');
    description.append(document.createElement('br'));
    description.append(inputPrediction);

    predictionButton = document.createElement('button');
    predictionButton.textContent = 'Enviar Predicción';
    predictionButton.classList.add('btn');
    container.append(predictionButton);

    description.append(document.createElement('br'));
    predictionButton.addEventListener('click',predictionNumberRandom);
}

// Predicciones de los números aleatorios 
function predictionNumberRandom() {
    clearMessage();
    listPrediction = document.createElement('span');
    
    let numberPrediction = document.querySelector('.numberPrediction');

    if (numberPrediction.value != '') {
        if (numberPrediction.value.length < 5) {
            description.append(newMessage({
                msj: 'Error insertar 5 números',
                clr: 'danger'
            }));
        } else if (numberPrediction.value.length > 5) {
            description.append(newMessage({
                msj: 'Error superaste el máximo de números',
                clr: 'danger'
            }));
        } else {
            listPrediction.textContent = numberPrediction.value;
            description.append(listPrediction);
        }
    } else {
        description.append(newMessage({
            msj: 'Ingresar un valor',
            clr: 'danger'
        }));
    }
}

// Mensajes
function newMessage(obj) {
    message = document.createElement('p');
    message.classList.add('message', obj.clr);
    message.textContent = obj.msj;

    return  message;
}

// Borrar Mensajes
function clearMessage() {
    let x = document.querySelector('.message');
    if (x != null) {
        x.remove()
    }
}

// Iniciando juego
function startGame() {
    document.querySelector('button').remove();

    numberRandomButton = document.createElement('button');
    numberRandomButton.textContent = 'Generar número aleatorio';
    numberRandomButton.classList.add('btn');
    container.append(numberRandomButton);

    numberRandomButton.addEventListener('click', numberRandom);
}

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
        numberRandomButton.remove();

        resetGameButton = document.createElement('button');
        resetGameButton.classList.add('btn');
        resetGameButton.textContent = 'Volver iniciar el Juego'

        message = document.createElement('p');
        message.classList.add('message');
        message.classList.add('warning');
        message.textContent = '¡LLegamos al final del juego!';

        container.append(message, resetGameButton);

        resetGameButton.addEventListener('click', resetGame);
    }
}

// Reiniciar juego
function resetGame() {
    let countNumberRandom = document.querySelectorAll('.listNumberRandom span');
    for (let i = 0; i < countNumberRandom.length; i++) {
        document.querySelector('span').remove();
    }
    document.querySelector('.message').remove();
    document.querySelector('button').remove();
    newGame();
}
