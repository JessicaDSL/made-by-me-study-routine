const counter = document.querySelector(".counter");
const btnDecrease = document.querySelector(".decrease");
const btnReset = document.querySelector(".reset");
const btnIncrease = document.querySelector(".increase");
let count = Number(counter.innerHTML)

function decreaseCounter() {
  if( count < 0 ) counter.style.color = 'red'
  counter.innerHTML = count - 1
  return count--
}

function resetCounter() {
  if( count = 0 ) counter.style.color = 'green'
  counter.innerHTML = 0
  
  return count = 0;
}

function increaseCounter() {
  if( count > 0 ) counter.style.color = 'blue'
  counter.innerHTML = count + 1
  return count++
}

btnDecrease.addEventListener('click', decreaseCounter);
btnReset.addEventListener('click', resetCounter);
btnIncrease.addEventListener('click', increaseCounter);


