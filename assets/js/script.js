var wins = 0;
var losses = 0;
var ties = 0;

// TODO: Get rid of alert functions and instead append to appropriate elements

function play() {
  var options = ['r', 'p', 's'];
  var userChoice = prompt('Choose r, p, or s');
  console.log(userChoice);
  alert(`You picked '${userChoice}'`);
  userChoice = userChoice.toLowerCase();
  if (userChoice === '') {
    alert('Please pick something');
    play();
  }

  if (!options.includes(userChoice)) {
    alert('Must pick r, p, or s!');
    play();
  }

  if (!userChoice) {
    return;
  }

  var compChoice = options[index];
  console.log(compChoice);

  if (
    (userChoice === 'r' && compChoice === 's') ||
    (userChoice === 's' && compChoice === 'p') ||
    (userChoice === 'p' && compChoice === 'r')
  ) {
    console.log('Win');
    alert('You won! 😊');

    wins++;
    console.log(wins);
  } else if (
    (userChoice === 's' && compChoice === 'r') ||
    (userChoice === 'p' && compChoice === 's') ||
    (userChoice === 'r' && compChoice === 'p')
  ) {
    console.log('Loss');
    alert('You lost! 😢');
    losses++;
    console.log(losses);
  } else {
    console.log('Tie');
    alert('It was a tie. 😐');
    ties++;
    console.log(ties);
  }
  window.alert(`Wins:${wins} \nLosses:${losses} \nTies${ties}`);

  var playAgainMsg = confirm('Would you like to play again?');

  if (playAgainMsg) {
    play();
  }
}

// play();
