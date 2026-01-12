const rollInfo = document.querySelector('.roll-info');
const diceBoxes = document.querySelectorAll('.dice-box');
const statusIndicators = document.querySelectorAll('.status-indicator');
const dices = document.querySelectorAll('.dice');
const selectButtons = document.querySelectorAll('.select-button');
const rollButton = document.querySelector('.roll-button');

let rollNumber = 1;
let canHold = false;

const diceValues = ['', '', '', '', ''];
const diceToHold = ['', '', '', '', ''];

for (let i = 0; i < 5; i++) {
  diceBoxes[i].addEventListener('click', () => {
    toggleHold(i);
  });
}

rollButton.addEventListener('click', rollDices);

function toggleHold(i) {
  if (!canHold) return;
  if (diceToHold[i]) {
    diceToHold[i] = '';
  } else {
    diceToHold[i] = 'hold';
  }
  updateHoldView(diceToHold);
}

function removeAllHolds() {
  diceToHold.forEach((val, i, arr) => {
    arr[i] = '';
  })
  updateHoldView(diceToHold);
}

function rollControl() {
  if (rollNumber === 1) {
    rollInfo.innerHTML = '1st ROLL';
    canHold = false;
    removeAllHolds();
    hideSelectButtons();
    rollNumber++;
  } else if (rollNumber === 2) {
    rollInfo.innerHTML = '2nd ROLL';
    canHold = true;
    showSelectButtons();
    rollNumber++;
  } else {
    rollInfo.innerHTML = 'LAST ROLL';
    rollNumber = 1;
  }
}

function rollDices() {
  rollControl();
  for (let i = 0; i < 5; i++) {
    if (!diceToHold[i]) {
      diceValues[i] = rollDice();
    }
  }
  displayDiceValues(diceValues);
}

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function updateHoldView(diceToHold) {
  diceToHold.forEach((hold, i) => {
    if (hold) {
      diceBoxes[i].classList.add('hold');
      statusIndicators[i].classList.add('hold');
      statusIndicators[i].innerHTML = 'HOLD';
      selectButtons[i].classList.add('hold');
      selectButtons[i].innerHTML = 'ROLL';
    } else {
      diceBoxes[i].classList.remove('hold');
      statusIndicators[i].classList.remove('hold');
      statusIndicators[i].innerHTML = 'ROLL';
      selectButtons[i].classList.remove('hold');
      selectButtons[i].innerHTML = 'HOLD';
    }
  });
}

function displayDiceValues(diceValues) {
  dices.forEach((diceElement, i) => {
    diceElement.innerHTML = diceValues[i];
  });
}

function hideSelectButtons() {
  selectButtons.forEach((button) => {
    button.classList.add('hide');
  })
}

function showSelectButtons() {
  selectButtons.forEach((button) => {
    button.classList.remove('hide');
  })
}
