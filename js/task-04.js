const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    valueLabel: document.querySelector('#value'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
}

let counterValue = Number.parseInt(refs.valueLabel.textContent) || 0;

function updateValueLabel(newValue) {
    refs.valueLabel.textContent = newValue;
}

refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValueLabel(counterValue);
})

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValueLabel(counterValue);
})