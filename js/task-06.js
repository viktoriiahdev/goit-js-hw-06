const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', (event) => {
    const countOfSymbols = Number(inputRef.dataset["length"]);
    if (inputRef.value.length === countOfSymbols) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    }
    else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
})