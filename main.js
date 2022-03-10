import * as memory from './modules/memoryGame.js';

const gridComponent = document.querySelector('#grid');

// Creamos tablero para el juego de memoria
const createBoard = (()=> {
    gridComponent.innerHTML = '';
    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    for (let index = 0; index < memory.cardArray.length; index++ ) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/rainbow.png');
        card.setAttribute('alt', 'rainbow');
        card.setAttribute('class', 'memoryImg');
        card.setAttribute('data-id', index);
        memory.flipCard(card);
        content.appendChild(card);
    }
    gridComponent.appendChild(content);
});

export const main = (() => {
    memory.cardArray.sort(() => 0.5 - Math.random());
    createBoard();
});

main();