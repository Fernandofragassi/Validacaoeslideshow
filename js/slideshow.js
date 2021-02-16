let images = ['1image.jpg','2image.jpg','3image.jpg','4image.jpg']
let i = 0
let canvas = window.document.getElementById('canvas')
canvas.style.background = `url(./img/${images[i]})`

let arrows = window.document.querySelectorAll('.arrow')
arrows.forEach(function(arrow){
    arrow.addEventListener('click',function(e){
        if(e.target.id === "left"){
            i--;
            if(i < 0){
                i = images.length -1
            }
            canvas.style.background = `url(./img/${images[i]})`
        }else if(e.target.id === "right"){
            i++;
            if(i>= images.length){
                i = 0;
            }canvas.style.background = `url(./img/${images[i]}`                
        }
    })
})
/*******************FUNÇÂO PARA AUMENTAR E DIMINUIR A FONTE********************/
window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}

/*******************FUNÇÂO PARA ATIVAR O MODO ESCURO********************/
const nightMode = document.querySelector('#switch-shadow')

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `switch-shadow` ao html
  document.documentElement.classList.toggle('switch-shadow')
})

/*******************FUNÇÂO PARA INICIAR O FORMULARIO********************/
function calculo(){
    var resposta = confirm("Você deja responder o formulario?")

    if (resposta == true) {
        var msg = window.prompt(`Qual é Seu nome?`)
    } else {window.document.getElementById('nome').innerText("")
             
    }

    window.document.getElementById('nome').value = msg
    window.document.getElementById('sobrenome').focus()
    
}
