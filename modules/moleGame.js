/* Declaración del juego mole :V */
const scoreMole = document.querySelector('#score-mole');
const timeMole = document.querySelector('#time-mole');
export const square = document.querySelectorAll('.square');

export const btnStart = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');
let squeareRandom = null;
let timeInterval = null;

const removeRandomMole = (() => {
    square.forEach(data => data.classList.remove('moleActive'));
});

const showRandomMole = (() => {
    removeRandomMole();
    squeareRandom = square[Math.floor(Math.random() * 9)];
    squeareRandom.classList.add('moleActive');
});
/* Comprobamos si acerto en lo seleccionado, necesario también para eliminar eliminar eventos */
const match = ((e) => {
    if (e.target.id ===  squeareRandom.id) {
        alert("Tengo tanto odio, que me carcome el alma");
    }
});

export const showMole = (() => {
    square.forEach((elm) => {
        elm.addEventListener('mousedown', match);
    });
    btnReset.addEventListener('click', () => {
        square.forEach((elm) => {
            elm.removeEventListener('mousedown', match);
        });
        removeRandomMole();
        clearInterval(timeInterval);
        btnStart.disabled = false;
    });

    timeInterval = setInterval(showRandomMole, 800);
});
