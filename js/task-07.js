const refs = {
    fontSizeControlInput: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.fontSizeControlInput.addEventListener('input', (event) => {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;

    console.log(event.currentTarget.value);
})