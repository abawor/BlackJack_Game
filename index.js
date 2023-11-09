let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = document.getElementById("message-el");
let startGameBtn = document.getElementById("start-game-btn");
let currentCards = document.getElementById("current-cards-el");
let currentState = document.getElementById("current-state-el");
let draw = document.getElementById("draw-btn");
let pass = document.getElementById("pass-btn");


function startGame() {
    message.textContent = ""
    startGameBtn.style.display = "none"
    renderGame()
};

function renderGame() {
    currentCards.textContent = "Current Cards: " + cards[0] + ", " + cards[1]
    if (sum < 21) {
        currentState.textContent = (`Your current score is ${sum}. Would you like to draw another card?`)
        draw.style.display = "inline"
        pass.style.display = "inline"
    } else if (sum === 21) {
        currentState.textContent = (`${sum}! You got Blackjack!`)
        hasBlackJack = true
    } else {
        currentState.textContent = (`${sum}! You are out of the game!`)
        isAlive = false
    }
};

function newCard() {
    let newCard = Math.floor(Math.random() * 10) + 2
    sum += newCard
    currentCards.textContent += ", " + newCard
    renderGame()
};




//function pass() {

//};

