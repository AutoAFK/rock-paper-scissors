const buttonsContainer = document.querySelector("#player-buttons");
const resultText = document.querySelector("#result");
const humanChoiceText = document.querySelector("#human");
const computerChoiceText = document.querySelector("#computer");

let humanScore = 0;
let computerScore = 0;

buttonsContainer.addEventListener('click', (event) => {
    const target = event.target.id;
    const validOptions = ['rock','paper','scissors'];
    if(!validOptions.includes(target)) {
        return;
    }
    playRound(target,getComputerChoice());
})

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper'
    }
    return 'scissors';
}

function playRound(humanChoice, computerChoice) {
    computerChoiceText.textContent = `Computer: ${computerChoice}`;
    humanChoiceText.textContent = `Human: ${humanChoice}`;

    if (humanChoice === computerChoice) {
        resultText.textContent = "Its a draw!";
        return;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors')
        || (humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        resultText.textContent = "Human wins!";
        humanScore++;
        return;
    }
    resultText.textContent = "Computer wins!";
    computerScore++;
    return;
}
