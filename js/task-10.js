function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  countElementsInput: document.querySelector('#controls input[type="number"]'),
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
}

refs.createBtn.addEventListener('click', () => createBoxes(refs.countElementsInput.value))

refs.destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  refs.boxesContainer.innerHTML = ''; 
}

function createBoxes(amount) {
  destroyBoxes();
  const boxes = [];
  for (let i = 0, size = 30; i < amount; i += 1, size +=10) {
    const boxMarkup = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`
    boxes.push(boxMarkup);
  }
  refs.boxesContainer.insertAdjacentHTML("afterbegin", boxes.join(''));
}
