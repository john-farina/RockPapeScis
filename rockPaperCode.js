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
const winLoss = document.querySelector('#win-loss');
const compChoice = document.querySelector('#comp-choice');

let score = 0;
let computerScore = 0;
let wins = 0;
let loss = 0;
    function playRound(playerSelection,computerSelection){

        if (score == 5 && computerScore<5){
            wins++;
            alert(`You Won! damn hacks`);
            score = 0;
            computerScore = 0;
            finalMessage.textContent=`${wins} to ${loss}!`
        } 
        if (computerScore == 5 && score<5){
            loss++;
            alert('You Lost! haha loser');
            score = 0;
            computerScore = 0;
            finalMessage.textContent=`${wins} to ${loss}!`
        }

    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return(`Rock Doesn't Beat Rock.`);
        } else if (computerSelection == 'paper') {
            computerScore++;
            return(`Paper Beats Rock.`);
        } else if (computerSelection == 'scissors') {
            score++;
            return(`Rock Beats Scissors.`);
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            score++;
            return('Paper Beats Rock.');
        } else if (computerSelection == 'paper') {
            return(`Paper Doesn't Beat Paper.`)
        } else if (computerSelection == 'scissors') {
            computerScore++;
            return('Scissors Beats Paper.')
        }
    }   else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++;
            return('Rock Beats Scissors.')
        } else if (computerSelection == 'paper') {
            score++;
            return('Scissors Beats Rock.')
        } else if (computerSelection == 'scissors') {
            return('Scissors Can Not Cut Scissors.')
        }
    }
 }

//DIV WHERE IT SAYS YOU WON OR NOT
const displayDiv = document.querySelector('#displayDiv');
displayDiv.style.backgroundColor="rgb(188, 253, 251)";
displayDiv.style.textAlign='center';
displayDiv.style.padding='10px 20px';

//COMPUTER SCORE BOX
const compScore = document.querySelector('#comp-score');
compScore.style.color='red';

//PLAYER SCORE BOX
const playScore = document.querySelector('#player-score');
playScore.style.color='green';

const finalMessage = document.querySelector('#final-message');


//ROCK BUTTON
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
let playerSelection= 'rock';
let computerSelection = computerPlay();
displayDiv.textContent=(playRound(playerSelection,computerSelection));
compScore.textContent=`${computerScore}`;
playScore.textContent=`${score}`;
finalMessage.textContent=`${round}`;
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

