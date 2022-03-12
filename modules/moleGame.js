/* Declaración del juego mole :V */
const scoreMole = document.querySelector('#score-mole');
const timeMole = document.querySelector('#time-mole');
export const square = document.querySelectorAll('.square');

export const btnStart = document.querySelector('.btn-start-mole');
let squeareRandom = null;

const showRandomMole = (() => {
    square.forEach(data => data.classList.remove('moleActive'));
    squeareRandom = square[Math.floor(Math.random() * 9)];
    squeareRandom.classList.add('moleActive');
})
export const showMole = (() => {
    let timeInterval = null;

    square.forEach((elm) => {
        elm.addEventListener('mousedown', ()=> {
            if (elm.id ===  squeareRandom.id) {
                alert("Tengo tanto odio, que me carcome el alma");
            }
        });
    });
    timeInterval = setInterval(showRandomMole, 800);
});
