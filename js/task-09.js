const color = document.querySelector('.color')
const buttonChangeColor = document.querySelector('.change-color')
const body = document.querySelector("body");


buttonChangeColor.addEventListener('click', () => {
  const backgroundClr = getRandomHexColor()

  color.textContent = backgroundClr;
  body.style.backgroundColor = backgroundClr    
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
