const form = document.querySelector(".login-form");
const message = "Всі поля повинні бути заповнені!";

form.addEventListener("submit", functionSubmit);

function functionSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert(message);
  } else {
    const formData = { email: email.value, password: password.value };
    console.log(formData);
    e.currentTarget.reset();
  }
}
