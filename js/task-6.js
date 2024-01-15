const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const div = document.getElementById('boxes');
createButton.addEventListener("click", createHandler);
destroyButton.addEventListener("click", destroyHandler);

function createHandler() {
  if(input.value>=1 && input.value<=100){
    div.innerHTML=createBoxes(input.value);
    input.value = null;
  }
  
  
}

function destroyHandler() {
  destroyBoxes();
}

function createBoxes(amount) {
  let size = 30;
  let collection = "";
  for (let i = 0; i < amount; i++) {
    collection += `<div style="width:${size}px; height:${size}px; background-color: ${getRandomHexColor()};"></div>`;
    size+=10;
  }
  return collection;
}

function destroyBoxes(){
  div.innerHTML='';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
