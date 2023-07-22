const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const IngredientsUl = document.getElementById('ingredients');
ingredients.forEach(ingredient => {
const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
IngredientsUl.appendChild(liEl);
});
document.body.appendChild(IngredientsUl);


