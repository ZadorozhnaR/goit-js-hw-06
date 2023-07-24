const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const IngredientsUl = document.getElementById("ingredients");
const ingredientsList = [];

ingredients.forEach((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  liEl.classList.add("item");
  ingredientsList.push(liEl);
});
IngredientsUl.append(...ingredientsList);
