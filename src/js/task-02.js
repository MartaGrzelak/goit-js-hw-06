const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const element = document.querySelector('#ingredients');
const markup = ingredients.map((ingredient)=>{
const newElement = document.createElement("li");
newElement.textContent = ingredient;
newElement.classList.add("item");
return newElement;
}


); 
element.append(...markup);