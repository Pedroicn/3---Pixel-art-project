// cria quadro de divs

for(let i = 1; i <= 25; i += 1){
  let div = document.createElement('div')
  div.className = 'pixel'
  document.getElementById('pixel-board').appendChild(div)
}