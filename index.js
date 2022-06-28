let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Zach",
    chips: 150
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`;

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 11 + 1);
    return randomCard;
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = `Cards: `;
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = `Sum: ${sum}`;
    if (sum <= 20) {
    message = 'Hit?';
    } else if (sum === 21) {
    message = 'Blackjack!';
    hasBlackjack = true;
    } else {
    message = 'You\'ve gone bust!';
    isAlive = false;
    }

    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
}
}