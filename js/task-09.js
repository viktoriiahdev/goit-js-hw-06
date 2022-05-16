function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector('.change-color'),
  colorValue: document.querySelector('.color'),
}

refs.changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();
  
  document.body.style.backgroundColor = color;
  refs.colorValue.textContent = color;
})
