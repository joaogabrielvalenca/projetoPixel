
const divAppend = document.getElementById("main-square");
const divSquare = document.createElement("div");

function squaresOfN(n)
for (i = 1; i <= n; i++) {
  divAppend.appendChild(divSquare);
  divSquare.setAttribute("id", "pixel-board");
  for (j = 1; j <= n; j++) {
    const squares = document.createElement("div");
    squares.setAttribute("class", "pixel");
    divSquare.appendChild(squares);
    squares.setAttribute("id", `pixelId${j}row${i}`);
  }
}

squaresOfN(5)

const colorSelectedClass = document.querySelector("#color-selected");
let currentProp = getComputedStyle(colorSelectedClass);

// Requisito 4: GERANDO COR ALEATÒRIA: FALTA SALVAR

function randomColor() {
  let button1 = document.querySelector("#color-2");
  let r1 = Math.floor(Math.random() * 255);
  let g1 = Math.floor(Math.random() * 255);
  let b1 = Math.floor(Math.random() * 255);

  let generatedColor1 = `rgb(${r1},${g1},${b1})`;
  button1.style.backgroundColor = generatedColor1;

  let button2 = document.querySelector("#color-3");
  let r2 = Math.floor(Math.random() * 255);
  let g2 = Math.floor(Math.random() * 255);
  let b2 = Math.floor(Math.random() * 255);

  let generatedColor2 = `rgb(${r2},${g2},${b2})`;
  button2.style.backgroundColor = generatedColor2;

  let button3 = document.querySelector("#color-4");
  let r3 = Math.floor(Math.random() * 255);
  let g3 = Math.floor(Math.random() * 255);
  let b3 = Math.floor(Math.random() * 255);

  let generatedColor3 = `rgb(${r3},${g3},${b3})`;
  button3.style.backgroundColor = generatedColor3;
}

const button = document.querySelector("#button-random-color");

button.addEventListener("click", randomColor);

// REQUISITO 9 E 10: PEGANDO A COR E COLOCANDO EM UMA TABUA DE PIXEL

function classSelected(event) {
  let currentElementSelected = document.querySelector(".selected");
  currentElementSelected.classList.remove("selected");
  let clickedId = event.target.id;
  let selectedElement = document.querySelector(`#${clickedId}`);
  selectedElement.classList.add("selected");
  console.log("clicked", selectedElement);
  colorSelectedClass.id = clickedId;
}

let selectColor = document.querySelector("#color-palette");
const pixel = selectColor.addEventListener("click", classSelected);

function pixelPaint(event) {
  let clickedPixel = event.target.id;

  const element = document.querySelector(`#${clickedPixel}`);
  element.style.backgroundColor = currentProp.backgroundColor;
}

let selectPixel = document.querySelector("#pixel-board");
selectPixel.addEventListener("click", pixelPaint);


//REQUISITO 11: LIMPAR TUDO

function clearAll() {
  for (let j = 1; j <= 5; j++) {
    for (let i = 1; i <= 5; i++) {
      let pixelRow = `pixelId${i}row${j}`;
      let clearPixel = document.querySelector(`#${pixelRow}`);
      let white = `rgb(255,255,255)`;
      clearPixel.style.backgroundColor = white;
    }
  }
}

let clearButton = document.querySelector("#clear-board");
clearButton.addEventListener("click", clearAll);

//5 localstorage para paleta de cores


//13 inputvalue
const inputSelector = document.getElementById('board-size');
const buttonRows = document.getElementById('generate-board');
let totalNum = buttonRows.addEventListener('click', onClick);


function onClick() {
  if (inputSelector.value < 5 && inputSelector.value > 0) {
    inputSelector.value = 5
  } else if (inputSelector.value > 50) {
    inputSelector.value = 50
  } else if (inputSelector.value === "") {
    alert('Board Inválido')
  }
  console.log(inputSelector.value)
  return inputSelector.value;
}



// document.getElementById("board-size").defaultValue = "";

