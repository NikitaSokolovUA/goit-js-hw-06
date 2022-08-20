const sizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

sizeControl.addEventListener('input', size => 
    text.style.fontSize = `${size.currentTarget.value}px`)

