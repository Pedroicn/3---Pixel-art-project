// cria quadro de divs

for(let i = 1; i <= 25; i += 1) {
  let div = document.createElement('div');
  div.className = 'pixel';
  document.getElementById('pixel-board').appendChild(div);
}

window.onload = selecionaCorInicial

function selecionaCorInicial() {
  document.getElementById('black').className = 'color selected'
}

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

// function pegaCor() {
//   // getComputedStyle(selected).backgroundColor
//   let paletaCores = document.getElementById('color-palette');
//   let cor = getComputedStyle(selected).backgroundColor
//   paletaCores.addEventListener('click', function(event) {
    

//   })

  
// }
// pegaCor();




function alteraCor() {
  let boardPixels = document.getElementById('pixel-board')
  
  
  boardPixels.addEventListener('click', function(event) {
  let selecionado = document.querySelector('.selected')
  let cssObj = window.getComputedStyle(selecionado, null);
  let cor = cssObj.getPropertyValue("background-color");
    event.target.style.backgroundColor = cor
  })
}
alteraCor();