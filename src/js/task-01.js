const categories = document.querySelectorAll (".item" );
console.log(`Number of categories : ${categories.length}`);
console.log("");

categories.forEach ( (item) => {
 const category = item.querySelector("h2");
 console.log(`Category: ${category.textContent}`);
 const categoryElements = item.querySelectorAll("li");
 console.log(`Elements:${categoryElements.length}`);
 console.log("");
    
});