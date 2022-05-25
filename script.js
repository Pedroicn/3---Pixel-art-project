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