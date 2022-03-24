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

function playRound (computer, player) {
    //compare computer/player selections and determine winner
    let compWins = computer + " beats " + player + ", Computer wins.";
    let playerWins = player + " beats " + computer + ", You win!";
    // if equal call it a draw
    if (computer === player) {
        return computer + " equals " + player + ", it's a draw.";;
    } else if (computer === 'rock' && player === 'scissors') {
        return compWins;
    } else if (computer === 'paper' && player === 'rock') {
        return compWins;
    } else if (computer === 'scissors' && player === 'paper') {
        return compWins;
    } else {
        return playerWins;
    }
    // if comp = paper and player = rock comp wins
    // if comp = scissors and player = paper comp wins
    // else player wins
}


// get computer selection
let computerSelection = computerPlay();

// get player selection
let playerSelection = prompt("Please choose rock, paper, or scissors: ");

// play a round
console.log(computerSelection, playerSelection)
alert(playRound(computerSelection, playerSelection.toLowerCase()));
