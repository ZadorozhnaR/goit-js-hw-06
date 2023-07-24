const counterValue = document.getElementById("value");
const buttonDec = document.querySelector('div button[data-action="decrement"]');
const buttonDInc = document.querySelector(
  'div button[data-action="increment"]'
);
buttonDec.addEventListener("click", actionMin);
buttonDInc.addEventListener("click", actionPlus);
let valueStart = 0;

function actionMin(event) {
  valueStart -= 1;
  counterValue.textContent = valueStart;
}

function actionPlus(event) {
  valueStart += 1;
  counterValue.textContent = valueStart;
}
