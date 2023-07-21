const inputRange = document.getElementById('font-size-control');
const textChange = document.getElementById('text');




inputRange.addEventListener("input", changeInput);

function changeInput({ target }) {
    if (target.type === "range") {
        textChange.style.fontSize = `${Number(target.value)}px`;
        console.log(target.value);
    }
}