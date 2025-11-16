var wins = 0;
var losses = 0;
var plays = 0;

function play() {
  var rockBtnEl = document.querySelector('#rock-button');
  var paperBtnEl = document.querySelector('#paper-button');
  var scissorsBtnEl = document.querySelector('#scissors-button');
  var userImgEl = document.querySelector('#user-selection-image');
  var cpuImgEl = document.querySelector('#comp-selection-image');
  var userChoice;
  function generateCpuChoice() {
    var cpuOptions = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * cpuOptions.length);
    return cpuOptions[index];
  }

  // TODO: When clicked - add rock image to cpuImgEl
  // TODO: When clicked - determine outcome and save to wins and losses

  rockBtnEl.addEventListener('click', function () {
    plays++;

    // EDGE CASE: User clicks other buttons rapidly
    paperBtnEl.disabled = true;
    scissorsBtnEl.disabled = true;
    userChoice = 'rock';

    var cpuChoice = generateCpuChoice();
    // Create el, add content/style, append
    var userRockImg = document.createElement('img');
    userRockImg.src = 'assets/images/rock-user.png';
    userRockImg.alt = 'User chose rock';
    userRockImg.style.width = '80%';
    userRockImg.style.height = '80%';
    userImgEl.append(userRockImg);
    // Remove img after so many seconds
    setTimeout(function () {
      userImgEl.removeChild(userRockImg);
    }, 4000);
  });

  // TODO: Copy logic to these event listeners below

  paperBtnEl.addEventListener('click', function () {
    userChoice = 'paper';
    var userPaperImg = document.createElement('img');
    userPaperImg.src = 'assets/images/paper-user.png';
    userPaperImg.alt = 'User chose paper';
    userPaperImg.style.width = '80%';
    userPaperImg.style.height = '80%';
    userImgEl.append(userPaperImg);
  });

  scissorsBtnEl.addEventListener('click', function () {
    userChoice = 'scissors';
    var userScissorsImg = document.createElement('img');
    userScissorsImg.src = 'assets/images/scissors-user.png';
    userScissorsImg.alt = 'User chose scissors';
    userScissorsImg.style.width = '80%';
    userScissorsImg.style.height = '80%';
    userImgEl.append(userScissorsImg);
  });
}

play();
