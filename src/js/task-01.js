const categoriesList = document.querySelectorAll (".item" );
const numberOfCategories = categoriesList.length;
console.log(`Number of categories : ${numberOfCategories}`);


categoriesList.forEach ( (item) => {
 const titleItem =item.firstElementChild.textContent;
 const totalPositionOfItem = item.lastElementChild.children;

    console.log("Category:",titleItem);
    console.log("elements:", totalPositionOfItem)
    
})