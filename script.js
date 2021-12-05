let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, target){
  const computerG = Math.abs(target - computerGuess);
  const userG = Math.abs(target - humanGuess);
  return userG <= computerG;
}

let updateScore = (win) => {
  if(win === 'human'){
    humanScore += 1;
  } else{
    computerScore += 1;
  }
}

let advanceRound = () =>{
  currentRoundNumber += 1;
}
