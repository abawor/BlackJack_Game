let player = {
    name: "Your Name",
    chips: 10
};
let cards = [];
let sum = 0;
let initialStart = 0;
let messageEl = document.getElementById("message-el");
let startGameBtn = document.getElementById("start-game-btn");
let currentCardsEl = document.getElementById("current-cards-el");
let currentStateEl = document.getElementById("current-state-el");
let drawBtn = document.getElementById("draw-btn");
let passBtn = document.getElementById("pass-btn");
let playerEl = document.getElementById("player-el");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
};

function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    messageEl.textContent = ""
    startGameBtn.style.display = "none"
    playerEl.style.display = "inline"
    if (initialStart === 0) {
        player.name = prompt("Your name: ")
        initialStart++
    }
    updatePlayerEl()
    renderGame()
};


function updatePlayerEl () {
    playerEl.textContent = player.name + ": $" + player.chips;
};

function renderGame() {
    currentCardsEl.textContent = "Current Cards: " + cards[0] + ", " + cards[1]
    for (let i = 2; i < cards.length; i++) {
        currentCardsEl.textContent += ", " + cards[i] 
    }
    if (sum < 21) {
        currentStateEl.textContent = (`Your current score is ${sum}. Would you like to draw another card?`)
        drawBtn.style.display = "inline"
        passBtn.style.display = "inline"
    } else if (sum === 21) {
        player.chips++
        updatePlayerEl()
        currentStateEl.textContent = (`${sum}! You got Blackjack!`)
        gameFinished()
    } else {
        player.chips--
        updatePlayerEl()
        currentStateEl.textContent = (`${sum}! You are out of the game!`)
        gameFinished()
    }
};

function newCard() {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
};

function gameFinished() {
    drawBtn.style.display = "none"
    passBtn.style.display = "none"
    startGameBtn.style.display = "inline"
    startGameBtn.textContent = "PLAY AGAIN"
};

function passTurn() {
    currentStateEl.textContent = (`Your final score is ${sum}.`)
    gameFinished()
};

