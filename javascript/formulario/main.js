const form = document.querySelector("form");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const SHOW_ERROR_MESSAGE = "show-error-message";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkName(user);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPassword(password, confirmPassword);
  checkEmptyFields(user, email, password, confirmPassword);
  
  if(checkErrorMessage(this)) console.log('Enviou o formulário');
});

function clearInputfieldsError(inputs) {
  inputs
    .querySelectorAll("." + SHOW_ERROR_MESSAGE)
    .forEach((input) => (input.children[1].value = ""));

}

function checkEmptyFields(...input) {
  input.map((item) => {
    if (!item.value) showMessageErro(item, "Este campo não pode ficar vazio");
  });
}

function clearInputfields(status, inputs) {
  if (status) inputs.forEach((input) => (input.children[1].value = ""));
}

function checkErrorMessage(inputs) {
    let send = true
    inputs.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => send = false)
    console.log(send);
    clearInputfields(send, inputs)
  /*inputs
    .querySelectorAll("." + SHOW_ERROR_MESSAGE)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));*/
}

function checkName(input) {
  const regexName = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
  const nameUser = regexName.test(input.value);
  if (!nameUser) showMessageErro(input, "Insira um nome válido");
}

function checkEmail(input) {
  const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const email = regexEmail.test(input.value);
  if (!email) showMessageErro(input, "Email inválido");
}

function checkPassword(input) {
  const regexPassword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const password = regexPassword.test(input.value);
  if (!password)
    showMessageErro(
      input,
      "Senha deve conter uma letra maiuscula, uma minuscula, um numero e um caractere especial"
    );
}

function checkConfirmPassword(password1, password2) {
  if (password1.value !== password2.value)
    showMessageErro(password2, "As senhas não conferem");
}

function showMessageErro(input, message) {
  const inputFields = input.parentElement;
  const errorMessage = inputFields.querySelector(".error-message");
  errorMessage.innerText = message;
  inputFields.classList.add(SHOW_ERROR_MESSAGE);
}

const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  form.classList.toggle("dark");
});
