function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1/3) return 'rock';
  else if (randomNumber < 2/3) return 'paper';
  else return 'scissors';
}

const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else {
      result = 'Tie';
    }
  } 
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else {
      result = 'you lose';
    }
  } 
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else {
      result = 'you win';
    }
  }

  if (result === 'you win') {
    score.wins += 1;
  } else if (result === 'you lose') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  alert(
    `You picked ${playerMove}. Computer picked ${computerMove}.
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
  );
}
