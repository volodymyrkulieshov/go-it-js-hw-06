const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elements = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${ingredient}`;
  listItem.classList.add("item");
  return listItem;
});
const addListItem = document.querySelector("#ingredients");
addListItem.append(...elements);
console.dir(addListItem);
