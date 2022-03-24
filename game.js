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

alert(computerPlay());