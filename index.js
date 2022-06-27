let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 11 + 1);
    return randomCard;
}

function startGame() {
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
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
}
