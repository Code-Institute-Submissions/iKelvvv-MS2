const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");

var userChoice;
var computerChoice;
var roundWinner;

function selectRock() {
    userChoice = 'Rock';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
    
}

function selectPaper() {
    userChoice = 'Paper';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
}

function selectScissors() {
    userChoice = 'Scissors';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
}

function selectLizard() {
    userChoice = 'Lizard';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerGenerator();
    roundWinner = calculateWinner(userChoice, computerChoice);
}

function selectSpock() {
    userChoice = 'Spock';
    userChoiceDisplay.innerHTML = userChoice;
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