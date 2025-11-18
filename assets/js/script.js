var userWins = 0;
var cpuWins = 0;
var plays = 0;

var rockBtnEl = document.querySelector('#rock-button');
var paperBtnEl = document.querySelector('#paper-button');
var scissorsBtnEl = document.querySelector('#scissors-button');
var userSelectionEl = document.querySelector('.user-selection');
var cpuSelectionEl = document.querySelector('.comp-selection');
var userImgEl = document.querySelector('#user-selection-image');
var cpuImgEl = document.querySelector('#comp-selection-image');
var userScoreEl = document.querySelector('#user-score');
var cpuScoreEl = document.querySelector('#computer-score');
var playsEl = document.querySelector('#plays');
var userChoice;
var cpuChoice;
var cpuImg;
var userImg;

function generateCpuChoice() {
  var cpuOptions = ['rock', 'paper', 'scissors'];
  var index = Math.floor(Math.random() * cpuOptions.length);
  return cpuOptions[index];
}

// TODO: When clicked - add rock image to cpuImgEl ✅
function recordCpuChoice() {
  if (cpuChoice === 'rock') {
    cpuImg = document.createElement('img');
    // ? Images don't load in quickly each time, need to find solution - preload each image and change visibility?
    cpuImg.src = 'assets/images/rock-cpu.png';
    cpuImg.alt = 'CPU chose rock';
  } else if (cpuChoice === 'paper') {
    cpuImg = document.createElement('img');
    cpuImg.src = 'assets/images/paper-cpu.png';
    cpuImg.alt = 'CPU chose paper';
  } else if (cpuChoice === 'scissors') {
    cpuImg = document.createElement('img');
    cpuImg.src = 'assets/images/scissors-cpu.png';
    cpuImg.alt = 'CPU chose scissors';
  }
  cpuImg.style.width = '80%';
  cpuImg.style.height = '80%';
  cpuImgEl.append(cpuImg);
}

// ? Still not calculating wins correctly
function determineResults() {
  if (
    (userChoice === 'rock' && cpuChoice === 'paper') ||
    (userChoice === 'paper' && cpuChoice === 'scissors') ||
    (userChoice === 'scissors' && cpuChoice === 'rock')
  ) {
    cpuWins++;
    userSelectionEl.setAttribute('class', 'selection-lose');
    cpuSelectionEl.setAttribute('class', 'selection-win');
  } else if (
    (userChoice === 'paper' && cpuChoice === 'rock') ||
    (userChoice === 'rock' && cpuChoice === 'scissors') ||
    (userChoice === 'scissors' && cpuChoice === 'paper')
  ) {
    userWins++;
    userSelectionEl.setAttribute('class', 'selection-win');
    cpuSelectionEl.setAttribute('class', 'selection-lose');
  } else {
    userSelectionEl.setAttribute('class', 'selection-lose');
    cpuSelectionEl.setAttribute('class', 'selection-lose');
    userSelectionEl.setAttribute('style', 'border: 5px solid grey');
    cpuSelectionEl.setAttribute('style', 'border: 5px solid grey');
    //  TODO: Change border to grey ✅
  }
}

// TODO: When clicked - append wins, losses and plays to score board ✅
function appendScore() {
  userWins.toString;
  userScoreEl.textContent = userWins;

  cpuWins.toString;
  cpuScoreEl.textContent = cpuWins;
}

// Create el, add content/style, append
function appendUserChoice() {
  userImg = document.createElement('img');
  userImg.src = `assets/images/${userChoice}-user.png`;
  userImg.alt = `User chose ${userChoice}`;
  userImg.style.width = '80%';
  userImg.style.height = '80%';
  userImgEl.append(userImg);
}

// TODO: When clicked - change style of selection containers ✅
// TODO: When clicked - 1 sec visual of both selection containers cycling through the 3 options (FINAL TOUCHES)

rockBtnEl.addEventListener('click', function () {
  // Increasing plays per click
  plays++;
  plays.toString;
  playsEl.textContent = plays;
  // EDGE CASE: User clicks other buttons rapidly
  rockBtnEl.disabled = true;
  paperBtnEl.disabled = true;
  scissorsBtnEl.disabled = true;

  userChoice = 'rock';
  cpuChoice = generateCpuChoice();
  determineResults();
  recordCpuChoice();
  appendUserChoice();
  appendScore();

  // Remove img enable buttons after so many seconds
  var timeout = setTimeout(function () {
    userImgEl.removeChild(userImg);
    cpuImgEl.removeChild(cpuImg);
    rockBtnEl.disabled = false;
    paperBtnEl.disabled = false;
    scissorsBtnEl.disabled = false;
    userSelectionEl.setAttribute('class', 'selection-static');
    cpuSelectionEl.setAttribute('class', 'selection-static');
    // Specifically removes the grey border from the recordcpuchoice function
    userSelectionEl.removeAttribute('style');
    cpuSelectionEl.removeAttribute('style');
  }, 2000);
});

// TODO: Copy logic to these event listeners below ✅

paperBtnEl.addEventListener('click', function () {
  plays++;
  plays.toString;
  playsEl.textContent = plays;

  rockBtnEl.disabled = true;
  paperBtnEl.disabled = true;
  scissorsBtnEl.disabled = true;

  userChoice = 'paper';
  cpuChoice = generateCpuChoice();
  determineResults();
  recordCpuChoice();
  appendUserChoice();
  appendScore();

  console.log(userChoice);
  console.log(cpuChoice);

  var timeout = setTimeout(function () {
    userImgEl.removeChild(userImg);
    cpuImgEl.removeChild(cpuImg);
    rockBtnEl.disabled = false;
    paperBtnEl.disabled = false;
    scissorsBtnEl.disabled = false;
    userSelectionEl.setAttribute('class', 'selection-static');
    cpuSelectionEl.setAttribute('class', 'selection-static');
    userSelectionEl.removeAttribute('style');
    cpuSelectionEl.removeAttribute('style');
  }, 2000);
});

scissorsBtnEl.addEventListener('click', function () {
  plays++;
  plays.toString;
  playsEl.textContent = plays;

  rockBtnEl.disabled = true;
  paperBtnEl.disabled = true;
  scissorsBtnEl.disabled = true;

  userChoice = 'scissors';
  cpuChoice = generateCpuChoice();
  determineResults();
  recordCpuChoice();
  appendUserChoice();
  appendScore();

  var timeout = setTimeout(function () {
    userImgEl.removeChild(userImg);
    cpuImgEl.removeChild(cpuImg);
    rockBtnEl.disabled = false;
    paperBtnEl.disabled = false;
    scissorsBtnEl.disabled = false;
    userSelectionEl.setAttribute('class', 'selection-static');
    cpuSelectionEl.setAttribute('class', 'selection-static');
    userSelectionEl.removeAttribute('style');
    cpuSelectionEl.removeAttribute('style');
  }, 2000);
});
