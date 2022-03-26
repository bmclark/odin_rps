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

function rand123 () {
    // make a random selection between 0-2
    return (Math.floor((Math.random() +1 ) * 10000000) % 3);
}

function playRound (player) {
    // get computer selection
    const computer = computerPlay()

    //compare computer/player selections and determine winner
    // let results = document.getElementById("results").textContent;
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

// play 5 rounds and determine winner
function game () {
    let compWins = 0;
    let playerWins = 0;

    // call playRound function 5 times
    for (let i = 0; i < 5; i++) {
        let result = playRound();

        if (result === 'computer') {
            compWins++;
        } else if (result === 'player') {
            playerWins++;
        }
        console.log(compWins, playerWins);
    }

    if (compWins > playerWins) {
        alert("Computer wins! " + compWins + " winning rounds vs your " + playerWins + " winning rounds.");
    } else if (playerWins > compWins) {
        alert("You won! " + compWins + " winning rounds vs your " + playerWins + " winning rounds.");
    } else {
        alert("It's a draw.")
    }
}


// add click event to each selection box and then send selection to playRound()
document.querySelectorAll('.selectionBox').forEach(item => {
    item.addEventListener('click', event => {
        playRound(event.target.id);
    });
});