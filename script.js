const _ = require("lodash"); 

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]; 
    let randomElement = _.sample(choices); 
    return randomElement; 
}


function playRound(playerSelection, computerSelection) {
    //allows for input to be case-sensitive 
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "You tied with the computer!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors.";
        } else {
            return "You lose! Paper beats rock.";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock.";
        } else {
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper.";
        } else {
            return "You lose! Rock beats scissors.";
        }
    }
}

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
