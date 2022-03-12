/* Declaración del juego mole :V */
const scoreMole = document.querySelector('#score-mole');
const timeMole = document.querySelector('#time-mole');
export const square = document.querySelectorAll('.square');

export const btnStart = document.querySelector('.btn-start-mole');


export const showMole = (() => {
    const squeareRandom = square[Math.floor(Math.random() * 9)];
    setInterval((squeareRandom.classList.add('moleActive')), 5000);
});