function game() {
    let player = prompt('Enter Rock, Paper, Scissors').toLowerCase();

let signals = ['rock','paper','scissors'];
function computer() {
    let signal = Math.floor(Math.random()* signals.length) 
    return signals[signal]
}

function round(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw"
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "player win ,computer lose"
    }else if (playerSelection === "paper" && computerSelection === "rock") {
        return "player win ,computer lose"
    }else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "player win ,computer lose"
    }else if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer win ,player lose"
    }else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "computer win ,player lose"
    }else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "computer win ,player lose"
    }
}

console.log(player);
let computerSelection = computer();
console.log(computerSelection)
console.log(round(player,computerSelection))
}

for(let i = 1;i<=5;i++) {
    console.log(`### Round ${i} ###`)
    game()
    
}
