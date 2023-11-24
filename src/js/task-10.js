const baseWidtxPx = 30;
const baseHeightPx = baseWidtxPx;
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const container = document.querySelector ("div#boxes");
const input = document.querySelector ("div#controls > input");

function createBoxes(amount){
  for (let i= 0; i < amount; i++){
    const elem = document.createElement("div");
    elem.style.width = `${baseWidtxPx + 10 * i }px`;
    elem.style.height = `${baseHeightPx + 10 * i }px`;
    elem.style.backgroundColor = getRandomHexColor();
    container.insertAdjacentElement ("beforeend", elem);
  }
}

function destroyBoxes(){
container.innerHTML = "";
}
function handleCreateClick(){
  const boxes = input.value;
  createBoxes(boxes);
}
const createButton = document.querySelector ("button[data-create]");
const destroyButton = document.querySelector ("button[data-destroy]");

createButton.addEventListener("click", handleCreateClick);
destroyButton.addEventListener("click",destroyBoxes);