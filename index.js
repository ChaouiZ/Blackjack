let firstCard = 7;
let secondCard = 11;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = `Cards: ${cards[0]}  ${cards[1]}`;
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
    let newCard = 3;
    sum += newCard;
    renderGame();
}
