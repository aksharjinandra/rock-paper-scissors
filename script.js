
//fade-out loading screen and fade-in game screen
const startGame = () => {
    const startGameButton = document.querySelector(".loading-screen button"); 
    const loadingScreen = document.querySelector(".loading-screen"); 
    const match = document.querySelector(".match"); 

    startGameButton.addEventListener("click", () => {
        loadingScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
};


//generating random computer selection
function computerPlay() {
    const computerOptions = ["Rock", "Paper", "Scissors"];
    let randomElement = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    return randomElement;
};

//function for determining whether the player chose rock, paper, or scissors
const playerButtons = document.querySelectorAll('.player-button');

function detectPlayerButtonClick() {    
    function handleButtonClick(event) {
        return event.target.innerText;
    }
    for (const button of playerButtons){ 
        button.onclick = handleButtonClick;
    }
}


function determineWinner (playerChoice, computerChoice) {
    const displayWinner = document.querySelector(".display-winner");
    console.log(computerChoice)
    console.log(playerChoice)
    if (playerChoice === computerChoice) {
        displayWinner.textContent = "It's a tie!"; 
        return;
    } else if (playerChoice === "Rock") {
        if (computerChoice === "Scissors") {
            displayWinner.textContent = "You Win! Rock beats Scissors";
            return;
        } else {
            displayWinner.textContent = "You Lose! Rock loses to Paper.";
            return;
        }
    } else if (playerChoice === "Paper") {
        if (computerChoice === "Rock") {
            displayWinner.textContent = "You Win! Paper beats Rock";
            return;
        } else {
            displayWinner.textContent = "You Lose! Paper loses to Scissors.";
            return;
        }
    } else if (playerChoice === "Scissors") {
        if (computerChoice === "Paper") {
            displayWinner.textContent = "You Win! Scissors beats Paper";
            return;
        } else {
            displayWinner.textContent = "You Lose! Scissors loses to Rock.";
            return;
        }
    }
}

//main game function
function playGame() {

    playerButtons.forEach(button => {
        button.addEventListener("click", function() {
            computerChoice = computerPlay();
            //determine winner
            determineWinner(this.innerText, computerChoice)
            //update button colors 
        })
    })
    
} 

function start() {
    startGame();
    playGame();
}

start();
