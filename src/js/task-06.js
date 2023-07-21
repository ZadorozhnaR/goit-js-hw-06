const textInp = document.querySelector('#validation-input');
const dataLength = document.querySelector('input[data-length="6"]');
const lengthCheck = Number(dataLength.dataset.length);

textInp.addEventListener("blur", checkCode);

function checkCode({ target }) {
    if (target.value.length === lengthCheck) {
        textInp.classList.replace("invalid", "valid") || textInp.classList.add("valid");
    }
    else{ textInp.classList.replace("valid", "invalid") || textInp.classList.add("invalid") };
}

