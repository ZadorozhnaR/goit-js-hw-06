const nameInp = document.getElementById("name-input");
const nameOut = document.getElementById("name-output");

nameInp.addEventListener("input", newName);

function newName({ target }) {
  if (target.value.trim() !== "") {
    nameOut.textContent = target.value;
  } else {
    nameOut.textContent = "Anonymous";
  }
}
