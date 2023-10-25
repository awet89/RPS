function playRound(playerSelection, computerSelection) {
    if(playerSelection=='rock'){
        if(computerSelection=='scissor'){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        
        if(computerSelection=='rock'){
            return 'tie';
        }
        if(computerSelection=='paper'){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        };
        
    }
    if(playerSelection=='paper'){
        if(computerSelection=='scissor'){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        
        if(computerSelection=='rock'){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
        if(computerSelection=='paper'){
            return 'tie';
        }
    }
    if(playerSelection=='scissor'){
        if(computerSelection=='scissor'){
            return 'tie';
        }
        if(computerSelection=='rock'){
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
        if(computerSelection=='paper'){
            return `You Win! ${playerSelection} beats ${computerSelection}`;
        }
    }
  }
function getComputerChoice(){
    let choice = ['rock', 'paper', 'scissor'];
    const randomValue = Math.floor(Math.random() * 3);
    return choice[randomValue];
}

function game(){
let count = 0;
  while(count<5){
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log('Players Choice: ' + playerSelection);
  console.log('Computer Choice: ' + computerSelection);
  console.log(playRound(playerSelection, computerSelection));
  count++;
  }
}

game();