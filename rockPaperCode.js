function computerPlay(){
    let random = (Math.random()*9)+1;
    if (random<=3){
        return('rock');
    } else if (random>=4 && random<=7){
        return('paper');
    } else {
        return('scissors');
    }
}

//ROCK PAPER SCISSORS FUNCTION
let score = 0;
let computerScore = 0;
    function playRound(playerSelection,computerSelection){
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return(`TIE! Rock Doesn't Beat Rock.`);
        } else if (computerSelection == 'paper') {
            computerScore++;
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
            computerScore++;
            return('YOU LOSE! Scissors Beats Paper.')
        }
    }   else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            return('YOU LOSE! Rock Beats Scissors.')
        } else if (computerSelection == 'paper') {
            score++;
            return('YOU WIN! Scissors Beats Rock.')
        } else if (computerSelection == 'scissors') {
            return('TIE! Scissors Can Not Cut Scissors.')
        }
    }
}

//DIV WHERE IT SAYS YOU WON OR NOT
const displayDiv = document.querySelector('#displayDiv');
displayDiv.style.backgroundColor="cyan";
displayDiv.style.textAlign='center';

//COMPUTER SCORE BOX
const compScore = document.querySelector('#comp-score');
compScore.style.color='red';

//PLAYER SCORE BOX
const playScore = document.querySelector('#player-score');
playScore.style.color='red';

const finalMessage = document.querySelector('#final-message');
let round = 1;
finalMessage.textContent=`${round}`;

//ROCK BUTTON
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
let playerSelection= 'rock';
let computerSelection = computerPlay();
displayDiv.textContent=(playRound(playerSelection,computerSelection));
compScore.textContent=`${computerScore}`;
playScore.textContent=`${score}`;
});

//PAPER BUTTON
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
let playerSelection= 'paper';
let computerSelection = computerPlay();
displayDiv.textContent=(playRound(playerSelection,computerSelection));
compScore.textContent=`${computerScore}`;
playScore.textContent=`${score}`;
});

//SCISSORS BUTTON
const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
let playerSelection = 'scissors';
let computerSelection = computerPlay();
displayDiv.textContent=(playRound(playerSelection,computerSelection));
compScore.textContent=`${computerScore}`;
playScore.textContent=`${score}`;
});


if (compScore<playScore){
    finalMessage.textContent='nice ur winning';
}

// let round = 1;

// while(round <= 5){
//     let playerPrompt = prompt('Rock, Paper, or Scissors');
//     let playerSelection = playerPrompt.toLowerCase();
//     let computerSelection = computerPlay();
//     console.log(`ROUND ${round}.`,playRound(playerSelection,computerSelection), `Your answer was ${playerSelection}!`);
//     round++;
    
//     if (round>5) {
//         console.log(`You Got ${score/5*100}%!`);
//         if (score<3) {
//             console.log(`You Lost! Loser!`);
//         } else {
//             console.log(`Hey You Won! must be hacks`);
//         }
//     }
// }  

