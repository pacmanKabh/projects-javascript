// Diseño html
let container = document.querySelector('.container');
let description;
let inputPrediction;
let listNumberPrediction;
let listNumberRandom;
let button;
let message;

//Iniciando el juego
newGame();

// Nuevo juego
function newGame() {
    description = document.createElement('p');
    description.classList.add('.description');
    description.textContent = "Genera números aleatorios de 1 al 5, para iniciar el juego debes hacer una predicción de los 5 números y escribirlo juntos.";

    inputPrediction = document.createElement('input');
    inputPrediction.setAttribute('type', 'text');
    inputPrediction.setAttribute('placeholder', 'Ejem: 34251');
    inputPrediction.setAttribute('id', 'numberPrediction');

    listNumberPrediction = document.createElement('div');
    listNumberPrediction.setAttribute('id', 'listNumberPrediction');
    listNumberPrediction.classList.add('containerNumber');

    button = document.createElement('button');
    button.textContent = 'Enviar Predicción';
    button.classList.add('btn');

    container.append(description, inputPrediction, listNumberPrediction, button);

    button.addEventListener('click',predictionNumberRandom);
}

// Predicciones de los números aleatorios 
function predictionNumberRandom() {
    clearMessage();
    let numberText = document.createElement('span');
    
    let numberPrediction = document.querySelector('#numberPrediction');

    if (numberPrediction.value != '') {
        if (numberPrediction.value.length < 5) {
            container.insertBefore(newMessage({
                msj: 'Error insertar 5 números',
                clr: 'red'
            }), button);

        } else if (numberPrediction.value.length > 5) {
            container.insertBefore(newMessage({
                msj: 'Error superaste el máximo de números',
                clr: 'red'
            }), button);

        } else {
            numberText.textContent = numberPrediction.value;
            listNumberPrediction.appendChild(numberText);

            let countPrediction = document.querySelectorAll('#listNumberPrediction span');
            if (countPrediction.length == 3) {
                container.removeChild(inputPrediction);
                button.remove();
                startGame();
            }
        }
    } else {
        container.insertBefore(newMessage({
            msj: 'Ingresar un valor',
            clr: 'red'
        }), button);
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
    listNumberRandom = document.createElement('div');
    listNumberRandom.setAttribute('id', 'listNumberRandom');
    listNumberRandom.classList.add('containerNumber');

    button = document.createElement('button');
    button.textContent = 'Generar número aleatorio';
    button.classList.add('btn');
    container.append(listNumberRandom, button);

    button.addEventListener('click', numberRandom);
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
    let countNumberRandom = document.querySelectorAll('#listNumberRandom span');
    
    if (countNumberRandom.length > 4) {
        button.remove();

        button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = 'Volver iniciar el Juego';

        container.append(newMessage({
            msj: '¡LLegamos al final del juego!',
            clr: 'yellow'
        }), button);

        button.addEventListener('click', resetGame);
    }
}

// Reiniciar juego
function resetGame() {
    container.removeChild(description);
    container.removeChild(listNumberPrediction);
    container.removeChild(listNumberRandom);
    container.removeChild(message);
    container.removeChild(button);
    newGame();
}
