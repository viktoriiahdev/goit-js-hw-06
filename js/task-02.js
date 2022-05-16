const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = ingredients.map(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  return listItem;
})

const listRef = document.querySelector('#ingredients');
listRef.append(...ingredientsListEl);