const marco = document.querySelector('.grid-break');
const elementBall = document.createElement('div');
const blockWidth = 100;
const blockHeight = 6;
const startGamer = [35, 1];
const startBall = [50, 8];
const startBallFlag = startBall;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRigth = [xAxis + blockWidth ,yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRigth = [xAxis + blockWidth, yAxis + blockHeight];
    }
}
/** Es necesario el arreglo para posicionar los bloques en orden */
const blocks = [
    new Block(2, 90),
    new Block(26, 90),
    new Block(51, 90),
    new Block(75, 90),
    new Block(2, 80),
    new Block(26, 80),
    new Block(51, 80),
    new Block(75, 80),
    new Block(2, 70),
    new Block(26, 70),
    new Block(51, 70),
    new Block(75, 70),
    new Block(2, 60),
    new Block(26, 60),
    new Block(51, 60),
    new Block(75, 60)
]
/** suma los ejes para mover la pelota */
const moveBall = (() => {
    if (startBallFlag[0] < 87) {
        startBallFlag[0] += 2;
        startBallFlag[1] += 2;
        console.log(startBallFlag[0], startBallFlag[1]);
        axisBall();
    }
});

const axisBall = (() => {
    elementBall.style.left = startBallFlag[0]+"%";
    elementBall.style.bottom = startBallFlag[1]+"%";
});

const createBall = (() => {
    elementBall.classList.add('ballGame');
    axisBall();
    marco.appendChild(elementBall);
});

/**
 * 
 * función necesaria para mover el bloque jugador de izq a derecha.
 */
const selectGamer = ((block) => {
    block.addEventListener( 'click', (e) => {
        block.textContent = "← Move →";
        block.style.backgroundColor = 'rgba(0, 0, 0, 0.76)';
        block.style.color = "white";
        let count = startGamer[0];

        setInterval(moveBall, 100);

        document.addEventListener('keydown', (e) => {
            console.log(e.key);
            switch(e.key) {
                case ('ArrowLeft'):
                    if (count > 0) {
                        count -=2;
                        console.log("left", count);
                        block.style.left = count+"%";
                    }
                    break;
                    case ('ArrowRight'):
                        if (count< 100-30) {
                            count+=2;
                            block.style.left = count+ "%";
                            console.log("r", count);
                        }
                    break;
            }
        });
    });
});
/**
 * Crea y ubica los bloques en el marco.
 */
const createBlock = (() => {
    for (let i = 0; i< blocks.length; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = "var(--verde-cielo)";
        block.style.left = blocks[i].bottomLeft[0]+'%';
        block.style.bottom = blocks[i].bottomLeft[1]+'%';
        marco.appendChild(block);
    }
});
/**
 * Crea el bloque que será movido por el jugador.
 */
const createGamer = (() => {
    const block = document.createElement('div');
        block.classList.add('blockGamer');
        block.textContent = "Click here";
        block.style.backgroundColor = "var(--nav)";
        block.style.left = startGamer[0]+'%';
        block.style.bottom = startGamer[1]+'%';
        marco.appendChild(block);
        selectGamer(block);
});


createGamer();
createBall();
createBlock();