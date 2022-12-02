const mainSquare = document.getElementById("main-square");
const pixelBoard = document.getElementById("pixel-board");
const divSquare = document.createElement("div");

function generateSquares(number = 5) {
  let heightAndWidth = number * 42;
  mainSquare.style.height = `${heightAndWidth}px`;
  mainSquare.style.width = `${heightAndWidth}px`;

  for (i = 1; i <= number; i++) {
    mainSquare.appendChild(divSquare);
    divSquare.setAttribute("id", "pixel-board");
    for (j = 1; j <= number; j++) {
      const squares = document.createElement("div");
      squares.setAttribute("class", "pixel");
      divSquare.appendChild(squares);
      squares.setAttribute("id", `pixelId${j}row${i}`);
    }
  }
}
generateSquares();

const colorSelectedClass = document.querySelector("#color-selected");
let currentProp = getComputedStyle(colorSelectedClass);

// Requisito 4: GERANDO COR ALEATÒRIA: FALTA SALVAR
let button1 = document.querySelector("#color-2");
let button2 = document.querySelector("#color-3");
let button3 = document.querySelector("#color-4");

function randomColor() {
  let r1 = Math.floor(Math.random() * 255);
  let g1 = Math.floor(Math.random() * 255);
  let b1 = Math.floor(Math.random() * 255);

  let generatedColor1 = `rgb(${r1},${g1},${b1})`;
  button1.style.backgroundColor = generatedColor1;

  let r2 = Math.floor(Math.random() * 255);
  let g2 = Math.floor(Math.random() * 255);
  let b2 = Math.floor(Math.random() * 255);

  let generatedColor2 = `rgb(${r2},${g2},${b2})`;
  button2.style.backgroundColor = generatedColor2;

  let r3 = Math.floor(Math.random() * 255);
  let g3 = Math.floor(Math.random() * 255);
  let b3 = Math.floor(Math.random() * 255);

  let generatedColor3 = `rgb(${r3},${g3},${b3})`;
  button3.style.backgroundColor = generatedColor3;

  localStorage.setItem(
    "colorPalette",
    JSON.stringify([generatedColor1, generatedColor2, generatedColor3])
  );
}

window.onload = () => {
  const colorPalette = JSON.parse(localStorage.getItem("colorPalette"));
  if (colorPalette) {
    button1.style.backgroundColor = colorPalette[0];
    button2.style.backgroundColor = colorPalette[1];
    button3.style.backgroundColor = colorPalette[2];
  }

  PrintPixelBoard();
};

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
  colorSelectedClass.style.backgroundColor =
    selectedElement.style.backgroundColor;
}

function SavePixelBoard() {
  const pixelBoard = [];
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      const element = document.querySelector(`#pixelId${i}row${j}`);
      pixelBoard.push({
        key: `#pixelId${i}row${j}`,
        value: element.style.backgroundColor,
      });
    }
  }
  localStorage.setItem("pixelBoard", JSON.stringify(pixelBoard));
}

function PrintPixelBoard() {
  const pixelBoardFromLocalStorage = JSON.parse(
    localStorage.getItem("pixelBoard")
  );
  console.log(pixelBoardFromLocalStorage);
  if (pixelBoardFromLocalStorage) {
    for (let i = 0; i < pixelBoardFromLocalStorage.length; i++) {
      const pixelId = Object.values(pixelBoardFromLocalStorage[i]);
      const element = document.querySelector(`${pixelId[0]}`);
      element.style.backgroundColor = pixelId[1];
    }
  }
}

let selectColor = document.querySelector("#color-palette");
const pixel = selectColor.addEventListener("click", classSelected);

function pixelPaint(event) {
  let clickedPixel = event.target.id;

  const element = document.querySelector(`#${clickedPixel}`);
  element.style.backgroundColor = currentProp.backgroundColor;
  SavePixelBoard();
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
const inputSelector = document.getElementById("board-size");
const buttonRows = document.getElementById("generate-board");
// const squareOutside = document.getElementById("main-square");
let totalNum = buttonRows.addEventListener("click", onClick);

function removeChild() {
  for (i = 1; i <= 5; i++) {
    mainSquare.removeChild(divSquare);
    divSquare.setAttribute("id", "pixel-board");
    for (j = 1; j <= 5; j++) {
      const squares = document.createElement("div");
      squares.setAttribute("class", "pixel");
      // divSquare.removeChild(squares);
      squares.setAttribute("id", `pixelId${j}row${i}`);
    }
  }
}

function onClick() {
  let inputValue;
  if (inputSelector.value === "") {
    alert("Board Inválido!");
  } else if (inputSelector.value <= 5) {
    inputValue = 5;
  } else if (inputSelector.value > 50) {
    inputValue = 50;
  } else if (inputSelector.value > 5 && inputSelector.value <= 50) {
    inputValue = inputSelector.value;
  }
  console.log(inputValue);

  generateSquares(inputValue);
}

// document.getElementById("board-size").defaultValue = "";
