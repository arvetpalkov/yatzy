const rollButton = document.querySelector('.roll-button');
const dices = document.querySelectorAll('.dice');

rollButton.addEventListener('click', rollDices);

function rollDices() {
  const diceValues = [];

  for (let i = 0; i < 5; i++) {
    diceValues[i] = rollDice();
  }

  displayDiceValues(diceValues);
}

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function displayDiceValues(diceValues) {
  dices.forEach((diceElement, i) => {
    diceElement.innerHTML = diceValues[i];
  });
}