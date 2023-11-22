const input= document.querySelector("#validation-input")
const length = 6;

input.addEventListener ("input", event => {
    const inputValue = event.currentTarget.value;
    const isValidLength = inputValue.length === length;
    input.classList.toggle ("valid", isValidLength);
    input.classList.toggle ("invalid", !isValidLength);
})