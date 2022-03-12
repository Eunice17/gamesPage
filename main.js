import * as memory from './modules/memoryGame.js';
import { square, btnStart, showMole } from './modules/moleGame.js';
/* Declaración nav selección */
const navigate = document.querySelectorAll('.nav-games a');

const gridComponent = document.querySelector('#grid-memory');

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

const funcionalidadNav = (() => {
    navigate.forEach((elm) => {
        elm.addEventListener('click', () => {
            navigate.forEach(element => element.classList.remove("active"));
            elm.classList.add("active");
        });
    });
});

export const main = (() => {
    funcionalidadNav();
    memory.cardArray.sort(() => 0.5 - Math.random());
    createBoard();
});

export const mainMole = (() => {
    btnStart.addEventListener('click', () => {
        showMole();
    });
});

/* Incio de memory game */
main();
/* Inicio de whac a mole */
mainMole();