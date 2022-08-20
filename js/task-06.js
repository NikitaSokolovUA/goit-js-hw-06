const textInput = document.querySelector('#validation-input')
let lengthInput = 0

textInput.addEventListener('input', event => {
    lengthInput = event.currentTarget.value.length
})

textInput.addEventListener('blur', () => {
    if (lengthInput >= textInput.dataset.length) {
        textInput.classList.contains("invalid") 
            ?   textInput.classList.replace("invalid", "valid")
            :   textInput.classList.add('valid')
    }
    else {
        textInput.classList.contains("valid") 
            ?   textInput.classList.replace("valid", "invalid")
            :   textInput.classList.add('invalid')
    }
})

