const gridComponent = document.querySelector('#grid');
const scoreSpam = document.querySelector('#result');
let cardChoose = [];
let contador = 0;
let score = 0;
const cardArray = [
    { name: 'bart', img: 'img/bart.png' },
    { name: 'cute', img: 'img/cute.png' },
    { name: 'bob', img: 'img/bob.png' },
    { name: 'heart', img: 'img/heart.png' },
    { name: 'bob', img: 'img/bob.png' },
    { name: 'homero', img: 'img/homero.png' },
    { name: 'woman', img: 'img/woman.png' },
    { name: 'cute', img: 'img/cute.png' },
    { name: 'bart', img: 'img/bart.png' },
    { name: 'woman', img: 'img/woman.png' },
    { name: 'heart', img: 'img/heart.png' },
    { name: 'homero', img: 'img/homero.png' },
]

const main = (() => {
    cardArray.sort(() => 0.5 - Math.random());
})
main();
const checkMatch = (() => {
    const cards = document.querySelectorAll('.memoryImg');
    if (cardChoose[0].name === cardChoose[1].name) {
        contador += 1;
        cards[cardChoose[0].id].removeEventListener('click', flipCard);
        cards[cardChoose[1].id].removeEventListener('click', flipCard);
        score = parseInt(score + (100 / 6));
        scoreSpam.textContent = score.toString();
        if (contador === 6) {
            contador = 0;
            score = 0;
            setTimeout(() => {
                alert("winnnnnnnn!!");
                main();
                createBoard();
            }, 700);
        }
    } else {
        cards[cardChoose[0].id].setAttribute('src', 'img/rainbow.png')
        cards[cardChoose[1].id].setAttribute('src', 'img/rainbow.png')
    }
    cardChoose = [];
    console.log("check mami", cardChoose);
});

const flipCard = ((card) => {
    card.addEventListener('click', () => {
        // verificamos si la card ya fue solicitada
        if (card.getAttribute('active') !== false) {
            let dataId = card.getAttribute('data-id');
            console.log();
            cardChoose.push({ name: cardArray[dataId].name, id: dataId } );
            card.setAttribute('src', cardArray[dataId].img);
            if (cardChoose.length == 2) {
                setTimeout(checkMatch, 300);
            }
        }
    });
});
const createBoard = (()=> {
    gridComponent.innerHTML = '';
    const content = document.createElement('div');
    content.setAttribute('class', 'content');
    for (let index = 0; index < cardArray.length; index++ ) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/rainbow.png');
        card.setAttribute('alt', 'rainbow');
        card.setAttribute('class', 'memoryImg');
        card.setAttribute('data-id', index);
        card.setAttribute('active', true);
        flipCard(card);
        content.appendChild(card);
    }
    gridComponent.appendChild(content);
});

    
createBoard();

