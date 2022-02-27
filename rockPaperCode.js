function computerPlay(){
    let random = (Math.random()*9)+1;
    if (random<=4){
        return('rock');
    } else if (random>=4 && random<=7){
        return('paper');
    } else {
        return('scissors');
    }
}

//DIV WHERE IT SAYS YOU WON OR NOT
const displayDiv = document.querySelector('#displayDiv');
displayDiv.style.backgroundColor="rgb(188, 253, 251)";
displayDiv.style.textAlign='center';
displayDiv.style.padding='10px 20px';
displayDiv.style.fontFamily='Oswald, sans-serrif';

//ROCK PAPER SCISSORS FUNCTION
let score = 0;
let computerScore = 0;
let wins = 0;
let loss = 0;
const compSelec = document.querySelector('#computer-selection');
const playSelec = document.querySelector('#player-selection');

    function playRound(playerSelection,computerSelection){
        //COUNTS SCORE AND ALERTS FOR FIRST TO GET 5
        //ALSO REMOVES SCORE, and PUTS WINS TO LOSES
        if (score == 5 && computerScore<5){
            wins++;
            alert(`You Won!`);
            score = 0;
            computerScore = 0;
            finalMessage.textContent=`${wins} to ${loss}!`
        } 
        if (computerScore == 5 && score<5){
            loss++;
            alert('You Lost!');
            score = 0;
            computerScore = 0;
            finalMessage.textContent=`${wins} to ${loss}!`
        }
            //STYLES THE WINS AND LOSS SECTION
            if (wins == loss){
                finalMessage.style.color='black';
                finalMessage.style.fontWeight='320';
            } else if (wins>loss){
                finalMessage.style.color='green';
                finalMessage.style.fontWeight='900';
            } else if (wins<loss){
                finalMessage.style.color='red'
                finalMessage.style.fontWeight='500';
            }


    if (playerSelection == 'rock') {
    playSelec.textContent='Rock!'
        if (computerSelection == 'rock') {
            compSelec.textContent='Rock!';
            displayDiv.style.backgroundColor="rgb(188, 253, 251)";
            return(`TIE! Rock Doesn't Beat Rock.`);
        } else if (computerSelection == 'paper') {
            computerScore++;
            compSelec.textContent='Paper!';
            displayDiv.style.backgroundColor='red';
            return(`YOU LOST! Paper Beats Rock.`);
        } else if (computerSelection == 'scissors') {
            score++;
            compSelec.textContent='Scissors!';
            displayDiv.style.backgroundColor='green';
            return(`YOU WON! Rock Beats Scissors.`);
        }
    } else if (playerSelection == 'paper') {
    playSelec.textContent='Paper!'
        if (computerSelection == 'rock') {
            score++;
            compSelec.textContent='Rock!';
            displayDiv.style.backgroundColor='green';
            return('YOU WIN! Paper Beats Rock.');
        } else if (computerSelection == 'paper') {
            compSelec.textContent='Paper!';
            displayDiv.style.backgroundColor="rgb(188, 253, 251)";
            return(`TIE! Paper Doesn't Beat Paper.`)
        } else if (computerSelection == 'scissors') {
            computerScore++;
            compSelec.textContent='Scissors!';
            displayDiv.style.backgroundColor='red';
            return('YOU LOST! Scissors Beats Paper.')
        }
    }   else if (playerSelection == 'scissors') {
    playSelec.textContent='Scissors!'
        if (computerSelection == 'rock') {
            computerScore++;
            compSelec.textContent='Rock!';
            displayDiv.style.backgroundColor='red';
            return('YOU LOST! Rock Beats Scissors.')
        } else if (computerSelection == 'paper') {
            score++;
            compSelec.textContent='Paper!';
            displayDiv.style.backgroundColor='green';
            return('YOU WIN! Scissors Cuts Rock.')
        } else if (computerSelection == 'scissors') {
            compSelec.textContent='Scissors!';
            displayDiv.style.backgroundColor="rgb(188, 253, 251)";
            return('TIE! Scissors Can Not Cut Scissors.')
        }
    }
 }

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

