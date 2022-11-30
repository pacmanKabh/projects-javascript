let container = document.querySelector('.container');
let title;
let description;

newSecretFriend();

function newSecretFriend() {
    title = document.createElement('h1');
    title.textContent = "Amigo Secreto";

    description = document.createElement('p');
    description.textContent = "Díme cuantos participarán del 'Amigo Secreto'.";

    let inputNember = document.createElement('input');
    inputNember.setAttribute('type', 'number');

    container.append(title, description, inputNember);
}

function calcMember() {
    
}