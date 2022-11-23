// // Requisito 6 e 7

const divAppend = document.getElementById("main-square");
const divSquare = document.createElement("div");
for (i = 1; i <= 5; i++) {
  divAppend.appendChild(divSquare);
  divSquare.setAttribute("id", "pixel-board");
  for (j = 1; j <= 5; j++) {
    const squares = document.createElement("div");
    squares.setAttribute("class", "pixel");
    divSquare.appendChild(squares);
    squares.setAttribute("id", `pixelId${j}row${i}`);
  }
}

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
  let clickedClass = event.target.id;
  console.log(clickedClass);
  colorSelectedClass.id = clickedClass;
  console.log("cor", currentProp.backgroundColor);
  console.log(colorSelectedClass);
}

let selectColor = document.querySelector("#color-palette");
const pixel = selectColor.addEventListener("click", classSelected);

function pixelPaint(event) {
  let clickedPixel = event.target.id;

  const element = document.querySelector(`#${clickedPixel}`);
  element.style.backgroundColor = currentProp.backgroundColor;
}

let selectPixel = document.querySelector("#table-squares1");
selectPixel.addEventListener("click", pixelPaint);

let selectPixel1 = document.querySelector("#table-squares2");
selectPixel1.addEventListener("click", pixelPaint);

let selectPixel2 = document.querySelector("#table-squares3");
selectPixel2.addEventListener("click", pixelPaint);

let selectPixel3 = document.querySelector("#table-squares4");
selectPixel3.addEventListener("click", pixelPaint);

let selectPixel4 = document.querySelector("#table-squares5");
selectPixel4.addEventListener("click", pixelPaint);

//REQUISITO 11: LIMPAR TUDO

function clearAll() {
  for (let j = 1; j <= 5; j++) {
    let pixelId = `pixelId${j}row`;
    for (let i = 0; i < 5; i++) {
      let pixelRow = `${pixelId}${i}`;
      let clearPixel = document.querySelector(`#${pixelRow}`);
      let white = `rgb(255,255,255)`;
      clearPixel.style.backgroundColor = white;
    }
  }
}

let clearButton = document.querySelector("#clear-board");
clearButton.addEventListener("click", clearAll);

//falta requisito 5 (nao da pra fazer) e 12 (dá)
//5 localstorage para paleta de cores
