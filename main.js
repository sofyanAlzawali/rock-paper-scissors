let btns = document.querySelectorAll("button");
let signals = ['rock','paper','scissors'];
let result = document.querySelector('.result');
let playerPoints = document.querySelector('.player-points');
let computerPoints = document.querySelector('.computer-points');

function increasePlayerPoints(){
    playerPoints.textContent++;
}

function increaseComputerPoints() {
    computerPoints.textContent++;
}

btns.forEach((btn)=> {
    btn.addEventListener("click",()=> {
        let playerSelection = btn.dataset.signal;

    function computer() {
        let signal = Math.floor(Math.random()* signals.length) 
        return signals[signal]
    }
    let computerSelection = computer();

    function round(playerSelection,computerSelection) {

        if (playerSelection === computerSelection) {
            result.textContent = "Draw"
        }else if (playerSelection === "rock" && computerSelection === "scissors") {
            increasePlayerPoints()
            result.textContent = "You Win! Rock beats Scissors"
        }else if (playerSelection === "paper" && computerSelection === "rock") {
            increasePlayerPoints()
            result.textContent = "You Win! Paper beats Rock"
        }else if (playerSelection === "scissors" && computerSelection === "paper") {
            increasePlayerPoints()
            result.textContent = "You Win! Scissors beats Paper"
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            increaseComputerPoints()
            result.textContent = "You Lose! Paper beats Rock"
        }else if (playerSelection === "paper" && computerSelection === "scissors") {
            increaseComputerPoints()
            result.textContent = "You Lose! Scissors beats Paper"
        }else if (playerSelection === "scissors" && computerSelection === "rock") {
            increaseComputerPoints()
            result.textContent = "You Lose! Rock beats Scissors"
        }
    }
    
    round(playerSelection,computerSelection)
    
    })
})







