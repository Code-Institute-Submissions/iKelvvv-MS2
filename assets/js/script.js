const computerChoiceDisplay = document.getElementById("computer-choice");

var userChoice;
var computerChoice;
var roundWinner;

function selectRock() {
    userChoice = 'Rock';
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
    
}

function selectPaper() {
    userChoice = 'Paper';
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
}

function selectScissors() {
    userChoice = 'Scissors';
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
}

function selectLizard() {
    userChoice = 'Lizard';
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
}

function selectSpock() {
    userChoice = 'Spock';
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
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

}

function resetGame() {

}

function firstToThree() {

}

function scoreBoard() {

}