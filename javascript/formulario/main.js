const form = document.querySelector('form');
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const SHOW_ERROR_MESSAGE = 'show-error-message'

form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(this);
  checkName(user);
  checkEmail(email);
  checkPassword(password);
  checkConfirmPassword(password, confirmPassword)
})

function checkName(input) {
  const regexName = /^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{0,}$/;
  const nameUser = regexName.test(input.value)
  if(!nameUser) showMessageErro(input, 'Insira um nome válido')
}

function checkEmail(input) {
  const regexEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  const email = regexEmail.test(input.value);
  if(!email) showMessageErro(input, 'Email inválido')
}

function checkPassword(input) {
  const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const password =  regexPassword.test(input.value);
  if(!password) showMessageErro(input, 'Senha deve conter uma letra maiuscula, uma minuscula, um numero e um caractere especial')
}

function checkConfirmPassword(password1, password2) {
  console.log(password2.value);
  if(password1.value !== password2.value) showMessageErro(password2, 'As senhas não conferem')
}

function showMessageErro(input, message) {
  const inputFields = input.parentElement;
  console.log(inputFields);
  const errorMessage = inputFields.querySelector('.error-message');
  errorMessage.innerText = message
  inputFields.classList.add(SHOW_ERROR_MESSAGE)
}


