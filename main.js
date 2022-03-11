import * as memory from './modules/memoryGame.js';

const gridComponent = document.querySelector('#grid-memory');

/* Declaración del juego mole :V */
const scoreMole = document.querySelector('#score-mole');
const timeMole = document.querySelector('#time-mole');
const square = document.querySelectorAll('.square');

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
    const squeareRandom = square[Math.floor(Math.random() * 9)];
    console.log(squeareRandom);
});

/* Incio del memory game */
main();