const buttonsContainer = document.querySelector("#player-buttons");
const resultText = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

buttonsContainer.addEventListener('click', (event) => {
    const target = event.target.id;
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

console.log(`Score:
    Human: ${humanScore} wins
    Computer: ${computerScore} wins`);
