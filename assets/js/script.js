const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result_display")

var userChoice;
var computerChoice;


function selectRock() {
    userChoice = 'Rock';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    calculateWinner();
    
}

function selectPaper() {
    userChoice = 'Paper';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    calculateWinner();
}

function selectScissors() {
    userChoice = 'Scissors';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    calculateWinner();
}

function selectLizard() {
    userChoice = 'Lizard';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    calculateWinner();
}

function selectSpock() {
    userChoice = 'Spock';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    calculateWinner();
}

function computerGenerator() {
    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber === 1) {
        computerChoice = "Rock";
    }
    if (randomNumber === 2) {
        computerChoice = "Paper";
    }
    if (randomNumber === 3) {
        computerChoice = "Scissors";
    }
    if (randomNumber === 4) {
        computerChoice = "Lizard";
    }
    if (randomNumber === 5) {
        computerChoice = "Spock";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    return computerChoice;
}

function calculateWinner() {
    if (computerChoice === userChoice) {
        result = "It's a draw!";
    }
    // Rock
    if (userChoice === "Rock" && computerChoice === "Lizard") {
        result = "Rock crushes Lizard, you win!";
        incrementUserScore();
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        result = "Rock crushes Scissors, you win!!";
        incrementUserScore();
    }
    if (userChoice === "Rock" && computerChoice === "Spock") {
        result = "Spock vaporizes Rock, you lose!";
        incrementComputerScore();
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
        result = "Paper covers Rock, you lose!";
        incrementComputerScore();
    }
    // Lizard
    if (userChoice === "Lizard" && computerChoice === "Paper") {
        result = "Lizard eats Paper, you win!";
        incrementUserScore();
    }
    if (userChoice === "Lizard" && computerChoice === "Spock") {
        result = "Lizard poisons Spock, you win!";
        incrementUserScore();
    }
    if (userChoice === "Lizard" && computerChoice === "Rock") {
        result = "Rock crushes Lizard, you lose!";
        incrementComputerScore();
    }
    if (userChoice === "Lizard" && computerChoice === "Scissors") {
        result = "Scissors decapitates Lizard, you lose!";
        incrementComputerScore();
    }
    // Spock
    if (userChoice === "Spock" && computerChoice === "Scissors") {
        result = "Spock smashes Scissors, you win!";
        incrementUserScore();
    }
    if (userChoice === "Spock" && computerChoice === "Rock") {
        result = "Spock vaporizes Rock, you win!";
        incrementUserScore();
    }
    if (userChoice === "Spock" && computerChoice === "Paper") {
        result = "Paper disproves Spock, you lose!";
        incrementComputerScore();
    }
    if (userChoice === "Spock" && computerChoice === "Lizard") {
        result = "Lizard poisons Spock, you lose!";
        incrementComputerScore();
    }
    // Scissors
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        result = "Scissors cuts Paper, you win!";
        incrementUserScore();
    }
    if (userChoice === "Scissors" && computerChoice === "Lizard") {
        result = "Scissors decapitates Lizard, you win!";
        incrementUserScore();
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        result = "Rock crushes Scissors, you lose!";
        incrementComputerScore();
    }
    if (userChoice === "Scissors" && computerChoice === "Spock") {
        result = "Spock smashes Scissors, you lose!";
        incrementComputerScore();
    }
    // Paper
    if (userChoice === "Paper" && computerChoice === "Rock") {
        result = "Paper covers Rock, you win!";
        incrementUserScore();
    }
    if (userChoice === "Paper" && computerChoice === "Spock") {
        result = "Paper disproves Spock, you win!";
        incrementUserScore();
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        result = "Scissors cuts Paper, you lose!";
        incrementComputerScore();
    }
    if (userChoice === "Paper" && computerChoice === "Lizard") {
        result = " Lizard eats Paper, you lose!";
        incrementComputerScore();
    }
    resultDisplay.innerHTML = result;
}

function resetGame() {

}

function firstToThree() {

}

function incrementComputerScore() {
    // Gets the current computer score from the DOM and increments it by 1
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

function incrementUserScore() {
    // Gets the current player score from the DOM and increments it by 1
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}