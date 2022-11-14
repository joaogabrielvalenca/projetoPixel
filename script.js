

// Requisito 6 e 7

const divAppend = document.getElementById('table-squares')
let divSquare = document.createElement('div')
divAppend.appendChild(divSquare)
divSquare.setAttribute('id', "pixel-board")



    for (let i = 0; i < 5; i++) {
        const squares = document.createElement('div')
        squares.setAttribute('id','pixel')  
        divSquare.appendChild(squares);
        squares.classList.add(`pixelId1row${i}`)
    }

const divAppend1 = document.getElementById('table-squares1')
let divSquare1 = document.createElement('div')
divAppend1.appendChild(divSquare1)
divSquare1.setAttribute('id', "pixel-board")


    for (let i = 0; i < 5; i ++) {
        const squares1 = document.createElement('div')
        squares1.setAttribute('id','pixel')
        divSquare1.appendChild(squares1)
        squares1.classList.add(`pixelId2row${i}`)

    }

const divAppend2 = document.getElementById('table-squares2')
let divSquare2 = document.createElement('div')
divAppend2.appendChild(divSquare2)
divSquare2.setAttribute('id', "pixel-board")

    
    for (let i = 0; i < 5; i ++) {
        const squares2 = document.createElement('div')
        squares2.setAttribute('id','pixel')
        divSquare2.appendChild(squares2)
        squares2.classList.add(`pixelId3row${i}`)
    }
    
const divAppend3 = document.getElementById('table-squares3')
let divSquare3 = document.createElement('div')
divAppend3.appendChild(divSquare3)
divSquare3.setAttribute('id', "pixel-board")

        
    for (let i = 0; i < 5; i ++) {
        const squares3 = document.createElement('div')
        squares3.setAttribute('id','pixel')
        divSquare3.appendChild(squares3)
        squares3.classList.add(`pixelId4row${i}`)
    }

const divAppend4 = document.getElementById('table-squares4')
let divSquare4 = document.createElement('div')
divAppend4.appendChild(divSquare4)
divSquare4.setAttribute('id', "pixel-board")
            
    for (let i = 0; i < 5; i ++) {
        const squares4 = document.createElement('div')
        squares4.setAttribute('id','pixel')   
        divSquare4.appendChild(squares4)
        squares4.classList.add(`pixelId5row${i}`)
    }



// Requisito 4: GERANDO COR ALEATÒRIA: FALTA SALVAR

function randomColor() {
    let button1 = document.querySelector('.color-2')
    let r1 = Math.floor(Math.random() * 255)
    let g1 = Math.floor(Math.random() * 255)
    let b1 = Math.floor(Math.random() * 255)
    
    let generatedColor1 = `rgb(${r1},${g1},${b1})`
    button1.style.backgroundColor = generatedColor1
    let colorSave1 = generatedColor1

    let button2 = document.querySelector('.color-3')
    let r2 = Math.floor(Math.random() * 255)
    let g2 = Math.floor(Math.random() * 255)
    let b2 = Math.floor(Math.random() * 255)

    let generatedColor2 = `rgb(${r2},${g2},${b2})`
    button2.style.backgroundColor = generatedColor2
    let colorSave2 = generatedColor2

    let button3 = document.querySelector('.color-4')
    let r3 = Math.floor(Math.random() * 255)
    let g3 = Math.floor(Math.random() * 255)
    let b3 = Math.floor(Math.random() * 255)

    let generatedColor3 = `rgb(${r3},${g3},${b3})`
    button3.style.backgroundColor = generatedColor3
    let colorSave3 = generatedColor3
}
// REQUISITO 9: PEGANDO A COR E COLOCANDO EM UMA TABUA DE PIXEL

const button = document.querySelector('#button-random-color');

button.addEventListener('click', randomColor)

function paletteClick(event) {
    let clickedColor = event.target.className;
    let colorPalette = document.getElementById('color-palette')
    let abc = colorPalette.className 
    abc = clickedColor
    // let style = clickedColor.style.backgroundColor

    console.log(abc)
    // return clickedColor
}

let selectColor = document.querySelector('#color-palette');
let color = selectColor.addEventListener('click', paletteClick);


function pixelPaint(event) {
    let clickedPixel = event.target.className;
    let pixelBoard = document.querySelector('#pixel')
    let classSelected = pixelBoard.className;
   classSelected = clickedPixel;

   console.log(classSelected)
}

let selectPixel = document.querySelector('#pixel')
let pixel = selectPixel.addEventListener('click', pixelPaint)

