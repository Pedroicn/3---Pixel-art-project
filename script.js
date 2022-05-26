// cria quadro de divs

for(let i = 1; i <= 25; i += 1) {
  let div = document.createElement('div');
  div.className = 'pixel';
  document.getElementById('pixel-board').appendChild(div);
}

// seleciona cor preta sempre que carrega a página
window.onload = selecionaCorInicial

function selecionaCorInicial() {
  document.getElementById('black').className = 'color selected'
}

// seleciona cor quando clicado
function setColor() {
  let paletaCores = document.getElementById('color-palette');


  paletaCores.addEventListener('click', function(event) {
    let selecionado = document.querySelector('.selected')
    if(event.target.className === 'color') {
      selecionado.classList.remove('selected')
      event.target.classList.add('selected')
      
    }

  })
}
setColor();

// pinta os pixels com a cor selecionada
function alteraCor() {
  let boardPixels = document.getElementById('pixel-board')
  
  
  boardPixels.addEventListener('click', function(event) {
  let selecionado = document.querySelector('.selected')
  let cssObj = window.getComputedStyle(selecionado, null);
  let cor = cssObj.getPropertyValue("background-color");
  let pixels = document.getElementsByClassName('pixel')
  if(event.target.className === 'pixel') {
    event.target.style.backgroundColor = cor;
  }

    
  })
}
alteraCor();

// Cria um botão que retorne a cor do quadro para a cor inicial.
function createClearButton() {
  let newButton = document.createElement('button');
  let buttonSection = document.getElementById('clear-button');
  newButton.setAttribute('id', 'clear-board');
  buttonSection.appendChild(newButton);
  newButton.innerHTML = 'Limpar';
  
  newButton.addEventListener('click', function(event) {
    event.target = window.location.reload();
  })
}
createClearButton();

// remove quadro
 
  let quadroPixel = document.querySelectorAll(".pixel")
  let generateButton = document.getElementById("generate-board");
  let input = document.getElementById('board-size');
  let sectionBoard = document.getElementById('pixel-board');
  let comprimentoPixel = input.value;


  generateButton.addEventListener('click', createNewBoard)
  generateButton.addEventListener('click', removeBoard)

function removeBoard() {
  
}    
    
function createNewBoard() {  
  if(input.value === '') {
    window.alert('Board inválido!')
  } else {
    for(let i = 0; i < quadroPixel.length; i += 1) {

      quadroPixel[i].remove();
      
    }
    if(input.value < 5) {
      input.value = 5
    }
    if(input.value > 50) {
      input.value = 50
    }
    sectionBoard.style.width = input.value*43 + 'px'
    for(let j = 0; j < input.value ** 2; j += 1) {
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      sectionBoard.appendChild(pixel);
    }
    quadroPixel = document.querySelectorAll(".pixel")
  }
  
}




 