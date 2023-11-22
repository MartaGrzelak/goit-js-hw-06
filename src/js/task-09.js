const spanColor =  document.querySelector(".color");
const changeColor = document.querySelector(".change-color");
const body = document.body;
let colorBgc = body.style.backgroundColor;
colorBgc = "#fffff"
spanColor.textContent = colorBgc;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function newBgc (){
  const newColor =getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
};
changeColor.addEventListener("click", newBgc);