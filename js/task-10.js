const controls = document.querySelector('#controls');
const boxesArea = document.querySelector('#boxes');
const count = controls.firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

console.log(count);

let countElement = 0

count.addEventListener('input', () => {
  if(count.value > 100){
    countElement = 100;
  }
  return countElement = count.value
})

createBtn.addEventListener('click', () =>
  createBoxes(countElement)
)

function createBoxes(amount) {
  for (let i = 0, width = 30; i < amount; i += 1, width +=10){
    boxesArea.insertAdjacentHTML('beforeend',
    `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height:${width}px"></div>`
    )
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


destroyBtn.addEventListener('click', () => {
  const elements =[...boxesArea.children]
  elements.map(element => element.remove())
});