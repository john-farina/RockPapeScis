function computerPlay(){
    let random = (Math.random()*7)+1;
    if (random<=2){
        return('rock');
    } else if (random>3 && random<=4){
        return('paper');
    } else {
        return('scissors');
    }
}

let score = 0;
    function playRound(playerSelection,computerSelection){
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return(`TIE! Rock Doesn't Beat Rock.`);
        } else if (computerSelection == 'paper') {
            return(`YOU LOSE! Paper Beats Rock.`);
        } else if (computerSelection == 'scissors') {
            score++;
            return(`YOU WIN! Rock Beats Scissors.`);

        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            score++;
            return('YOU WIN! Paper Beats Rock.');
        } else if (computerSelection == 'paper') {
            return(`TIE! Paper Doesn't Beat Paper.`)
        } else if (computerSelection == 'scissors') {
            return('YOU LOSE! Scissors Beats Paper.')
        }
    }   else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            return('YOU LOSE! Rock Beats Scissors.')
        } else if (computerSelection == 'paper') {
            score++;
            return('YOU WIN! Scissors Beats Rock.')
        } else if (computerSelection == 'scissors') {
            return('TIE! Scissors Can Not Cut Scissors.')
        }
    }
}

let round = 1;

while(round <= 5){
    let playerPrompt = prompt('Rock, Paper, or Scissors');
    let playerSelection = playerPrompt.toLowerCase();
    let computerSelection = computerPlay();
    console.log(`ROUND ${round}.`,playRound(playerSelection,computerSelection), `Your answer was ${playerSelection}!`);
    round++;
    
    if (round>5) {
        console.log(`You Got ${score/5*100}%!`);
        if (score<3) {
            console.log(`You Lost! Loser!`);
        } else {
            console.log(`Hey You Won! must be hacks`);
        }
    }
}  

