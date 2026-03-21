const buttonsContainer = document.querySelector("#player-buttons");
const resultText = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;
let lastHumanChoice = '';
let lastComputerChoice = '';

buttonsContainer.addEventListener('click', (event) => {
    const target = event.target.id;
    const validOptions = ['rock', 'paper', 'scissors'];
    if (!validOptions.includes(target)) {
        return;
    }
    playRound(target, getComputerChoice());
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
    displayChoiceImage(humanChoice, computerChoice);

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

function displayChoiceImage(humanChoice, computerChoice) {
    // Hide the last turn.
    if (lastHumanChoice !== '' && lastComputerChoice !== '') {
        const lastHumanChoiceImage = document.querySelector(`#${lastHumanChoice}-human`)
        const lastComputerChoiceImage = document.querySelector(`#${lastComputerChoice}-computer`)

        lastHumanChoiceImage.style.display = 'none';
        lastComputerChoiceImage.style.display = 'none';
    }

    // Display current turn.
    const humanChoiceImage = document.querySelector(`#${humanChoice}-human`)
    const computerChoiceImage = document.querySelector(`#${computerChoice}-computer`)

    humanChoiceImage.style.display = 'block';
    computerChoiceImage.style.display = 'block';

    lastHumanChoice = humanChoice;
    lastComputerChoice = computerChoice;
}