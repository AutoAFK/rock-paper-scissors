let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper'
    }
    return 'scissors';
}

function getHumanChoice() {
    return prompt("Enter you\'r choice:\nrock,paper,scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It\'s a draw!");
        return;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors')
        || (humanChoice === 'paper' && computerChoice === 'rock')
        || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("Human wins!");
        humanScore++;
        return;
    }
    console.log("Computer wins!");
    computerScore++;
    return;
}

for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice,computerChoice);
}

console.log(`Score:
    Human: ${humanScore} wins
    Computer: ${computerScore} wins`);
