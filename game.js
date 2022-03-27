// make a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay () {
    // get random number 0,1,2    
    let compChoice = rand123();

    // if 0 > rock; 1 > paper; 2 > scissors
    // return selection
    if (compChoice === 0) {
        return "rock";
    } else if (compChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerSelection() {
    document.querySelectorAll('.selectionBox').forEach(item => {
        item.addEventListener('click', event => {
            game(event.target.id);
        });
    });
}

function rand123 () {
    // make a random selection between 0-2
    return (Math.floor((Math.random() +1 ) * 10000000) % 3);
}

function determineWinner(computer, player) {
    //compare computer/player selections and determine winner
    const compWins = computer + " beats " + player + ", Computer wins.";
    const playerWins = player + " beats " + computer + ", You win!";
    const draw = computer + " equals " + player + ", it's a draw.";
    
    // determine outcome
    if (computer === player) {
        document.getElementById("roundResults").textContent = draw;
        return 'draw';
    } else if (computer === 'rock' && player === 'scissors') {
        document.getElementById("roundResults").textContent = compWins;
        return 'computer';
    } else if (computer === 'paper' && player === 'rock') {
        document.getElementById("roundResults").textContent = compWins;
        return 'computer';
    } else if (computer === 'scissors' && player === 'paper') {
        document.getElementById("roundResults").textContent = compWins;
        return 'computer';
    } else {
        document.getElementById("roundResults").textContent = playerWins;
        return 'player';
    }
}

function playRound (player) {
    // get computer selection
    const computer = computerPlay()
    const result = determineWinner(computer, player);

    if (result === 'computer') {
        compWins++;
    } else if (result === 'player') {
        playerWins++;
    }
}

// play 5 rounds and determine winner
function game (player) {
    playRound(player);

    document.getElementById("score").textContent = `Computer: ${compWins}\nPlayer: ${playerWins}`;

    if (compWins === 5) {
         alert("Computer wins! " + compWins + " winning rounds vs your " + playerWins + " winning rounds.");
         restart();
    } else if (playerWins === 5) {
         alert("You won! " + compWins + " winning rounds vs your " + playerWins + " winning rounds.");
         restart();
    }
}

function restart () {
    compWins = 0;
    playerWins = 0;
    document.getElementById("score").textContent = `Computer: ${compWins}\nPlayer: ${playerWins}`;
    document.getElementById("roundResults").textContent = '';
}

let compWins = 0;
let playerWins = 0;
document.getElementById("score").textContent = `Computer: ${compWins}\nPlayer: ${playerWins}`;
playerSelection();