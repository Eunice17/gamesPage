const marco = document.querySelector('.grid-break');
const blockWidth = 100;
const blockHeight = 6;
const startGamer = [40, 1];

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRigth = [xAxis + blockWidth ,yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRigth = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

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

const createBall = (() => {
    const elementBall = document.createElement('div');

    elementBall.classList.add('ballGame');
});

const selectGamer = ((block) => {
    block.addEventListener( 'click', (e) => {
        block.textContent = "← Move →";
        block.style.backgroundColor = 'rgba(0, 0, 0, 0.76)';
        block.style.color = "white";
        let count = startGamer[0];
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