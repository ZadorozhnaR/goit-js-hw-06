
const body = document.body;
const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

btn.addEventListener("click", changeColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  colorName.textContent = body.style.backgroundColor = getRandomHexColor();
}

