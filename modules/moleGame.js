/* Declaración del juego mole :V */
const scoreMole = document.querySelector('#score-mole');
const timeMole = document.querySelector('#time-mole');
export const square = document.querySelectorAll('.square');

export const btnStart = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');
let squeareRandom = null;
let timeInterval = null;
let score = 20;
let timedown = 60;
let dowm = null;

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
        score --;
        scoreMole.textContent = score;
        //alert("Tengo tanto odio, que me carcome el alma");
    }
});

const downTime = (() => {
    timedown --;
    timeMole.textContent = timedown;
    if ( timedown === 0 ) {
        clearInterval(dowm);
        alert("Time over");
    }

});

export const showMole = (() => {
    score = 20;
    dowm = setInterval(downTime, 520);
    square.forEach((elm) => {
        elm.addEventListener('mousedown', match);
    });
    btnReset.addEventListener('click', () => {
        scoreMole.textContent = 20;
        timeMole.textContent = 60;
        clearInterval(dowm);
        square.forEach((elm) => {
            elm.removeEventListener('mousedown', match);
        });
        removeRandomMole();
        clearInterval(timeInterval);
        btnStart.disabled = false;
    });

    timeInterval = setInterval(showRandomMole, 520);
});