const frame = document.querySelector('.grid-space');
let squares;
const squaresCover = document.createElement('div');

squaresCover.classList.add('squareCover');

const drawSquares = (() => {
    for (let i = 0; i < 400; i ++) {
        squares = document.createElement('div');
        squares.classList.add('squares');
        squaresCover.appendChild(squares);
    }
    frame.appendChild(squaresCover);

});

drawSquares();
