// assign variables to keep track of player and CPU score
let playerScore = 0;
let cpuScore = 0;
const playerGuiScore = document.querySelector('#player');
const cpuGuiScore = document.querySelector('#computer');

// assign variables to keep track of player/computer selections
let playerSel = '';
let cpuSel = '';

//create reset button
const reset = document.createElement('button');
reset.textContent = 'Reset';

// get results html element
const finalResults = document.querySelector('.final-results');
const results = document.querySelector('.results');
const main = document.querySelector('main');

//hide the final-results
const h1 = document.querySelector('h1');
h1.classList.toggle('final-results');

// assign an event listener 'click' for each button
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', selectChoice);
});

function selectChoice(e) {
  let result = '';
  if (e.target.id == 'rock') {
    result = playRound('rock', computerPlay());
  } else if (e.target.id == 'paper') {
    result = playRound('paper', computerPlay());
  } else {
    result = playRound('scissors', computerPlay());
  }

  //update score counters and results for each round in GUI
  if (result == 'lose') {
    cpuScore += 1;
    results.textContent = `You Lose! ${cpuSel} beats ${playerSel}`;
    cpuGuiScore.textContent = `CPU: ${cpuScore}`;
  } else if (result == 'win') {
    playerScore += 1;
    results.textContent = `You Win! ${playerSel} beats ${cpuSel}`;
    playerGuiScore.textContent = `Player: ${playerScore}`;
  } else {
    results.textContent = `It's a Tie!`;
  }

  //play a game of 5 rounds and state the winner or loser
  if ((cpuScore + playerScore) == 5) {
    if (cpuScore > playerScore) {
      finalResults.style.color = 'red';
      finalResults.textContent = 'Computer Wins!';
    } else {
      finalResults.style.color = 'blue';
      finalResults.textContent = 'Player Wins!';
    }
    h1.classList.toggle('final-results');
    //remove play buttons and add a reset button
    const btns = document.querySelectorAll('button');
    btns.forEach((button) => {
    main.removeChild(button);
    });
    main.appendChild(reset);
    reset.addEventListener('click', resetAll);
  }
}

//this function resets all variables and text to original state
function resetAll() {
  cpuScore = 0;
  playerScore = 0;
  cpuGuiScore.textContent = `CPU: ${cpuScore}`;
  playerGuiScore.textContent = `Player: ${playerScore}`;
  results.textContent = '';
  h1.classList.toggle('final-results');
  finalResults.textContent = '';

  //remove reset button and add back the three buttons
  main.removeChild(reset);

  const buttonRock = document.createElement('button');
  buttonRock.textContent = 'Rock';
  buttonRock.setAttribute('id', 'rock');
  const buttonPaper = document.createElement('button');
  buttonPaper.textContent = 'Paper';
  buttonPaper.setAttribute('id', 'paper');
  const buttonScissors = document.createElement('button');
  buttonScissors.textContent = 'Scissors';
  buttonScissors.setAttribute('id', 'scissors');
  main.appendChild(buttonRock);
  main.appendChild(buttonPaper);
  main.appendChild(buttonScissors);
  buttonRock.addEventListener('click', selectChoice);
  buttonPaper.addEventListener('click', selectChoice);
  buttonScissors.addEventListener('click', selectChoice);
}

/*for (let i = 0; i < 5; i ++) {
  score.textContent = `${totalPoints}`;
  totalPoints += 1;
}*/

function computerPlay() {
  let rock = 1;
  let paper = 2;
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  
  if (randomNumber === rock) {
    return 'rock';
  } else if (randomNumber === paper) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSel = playerSelection;
  cpuSel = computerSelection;
  //compare the choice the user entered against the computer's 
  if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') 
    || (playerSelection === 'scissors' && computerSelection === 'rock')) {
      return `lose`;
    }
  else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')) {
      return `win`;
    }
  else {
    return `tie`;
  } 
}

//play 5 rounds of the game and outputs the results to the console
/* function game() {
  let playerSelection;
  let blankSpace;
  for (let i = 0; i < 5; i++) {
    playerSelection = window.prompt("Enter Rock, Paper or Scissors:");
    if ((playerSelection.trim().length === 0)) {
      blankSpace = true;
      console.log(playRound(playerSelection,computerPlay(), blankSpace));
    } else {
      blankSpace = false;
      console.log(playRound(playerSelection,computerPlay(), blankSpace));
    }
  }
}
*/