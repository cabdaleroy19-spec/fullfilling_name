function pickComputerMove() {
  const randomNumber = Math.random(); // gives a number between 0 and 1
  if (randomNumber < 1/3) return 'rock';
  else if (randomNumber < 2/3) return 'paper';
  else return 'scissors';
}
function playGame(playerMove ){
         const computerMove = pickComputerMove();
   let result = '';
    

 
    if (playerMove==='scissors')
{
    if (computerMove === 'rock') {
      result = 'yoi lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if(computerMove==='Scissors') {
      result = 'Tie';
    }
  }
    else if(playerMove==='paper' ){


    if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if(computerMove==='scissors'){
      result = 'You lose';
    }
    }
else if(playerMove==='rock'){
  

    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else {
      result = 'you win';
    }
}

    alert(
     `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`

    )

    
};