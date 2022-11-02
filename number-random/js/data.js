let concursante = [];

// createDataSorteo();

function createDataSorteo() {
    let name = prompt('¿Cuál es su nombre?');
    let numberSelect = prompt('¿Cuál es su número?');
    concursante.push({name:name,numberSelect:numberSelect});

    console.log(concursante);
}