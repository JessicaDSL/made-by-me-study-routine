const buttonChangeColor = document.querySelector("#changeColor");
const backgroundColorBody = document.querySelector("body");
const colorName = document.querySelector("main span");

function generateRandomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

function changeStyled(color) {
  backgroundColorBody.style.backgroundColor = color;
  colorName.innerHTML = color;
  buttonChangeColor.style.backgroundColor = color;
}

function sortColorBackground() {
  const randomColor = generateRandomColor();
  changeStyled(randomColor);
}

buttonChangeColor.addEventListener("click", sortColorBackground);
