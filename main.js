let btns = document.querySelectorAll("button");
let signals = ['rock','paper','scissors'];
let result = document.querySelector('.result');


btns.forEach((btn)=> {
    btn.addEventListener("click",()=> {
        let playerSelection = btn.dataset.signal;
        console.log(playerSelection)

    function computer() {
        let signal = Math.floor(Math.random()* signals.length) 
        return signals[signal]
    }
    let computerSelection = computer();
    console.log(computerSelection)

    function round(playerSelection,computerSelection) {

        if (playerSelection === computerSelection) {
            result.textContent = "Draw"
        }else if (playerSelection === "rock" && computerSelection === "scissors") {
            result.textContent = "You Win! Rock beats Scissors"
        }else if (playerSelection === "paper" && computerSelection === "rock") {
            result.textContent = "You Win! Paper beats Rock"
        }else if (playerSelection === "scissors" && computerSelection === "paper") {
            result.textContent = "You Win! Scissors beats Paper"
        }
        else if (playerSelection === "rock" && computerSelection === "paper") {
            result.textContent = "You Lose! Rock beats Paper"
        }else if (playerSelection === "paper" && computerSelection === "scissors") {
            result.textContent = "You Lose! Paper beats Scissors"
        }else if (playerSelection === "scissors" && computerSelection === "rock") {
            result.textContent = "You Lose! Scissors beats Rock"
        }
    }
    round(playerSelection,computerSelection)
    })
})



    

// console.log(round(playerSelection,computerSelection))




