//trazenddo o canvas para o javascript
let canvas = document.getElementById("snake");
//trabalhando em 2d mostranddo o campo do jogo
let context = canvas.getContext("2d");
//tamanho do campo do jogo
let box = 32;
//array da cobrinha
let snake = [];
//dentro da cobrinha
snake [0] = {
    y: 8 * box,
    x: 8 * box
}

//direção da cobrinha
let direction = "right";

//criando o backgroud
function criarBG(){
    //cor do backgroud
    context.fillStyle = '#191970';
    // desenhando as dimenssões do jogo   
    context.fillRect(0, 0, 16*box, 16*box);
}

//trabalhando com array e tamanho 
function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "ForestGreen";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

//iniciando o jogo
function iniciarJogo(){
    criarBG();
    criarCobrinha();

    //ponto de partida do jogo
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //cordenada da cobrinha
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //pop retirar o ultimo elemento da array 
    snake.pop();

    //crianco a variavel para acrescentar
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    
    //acrescentando a cabeça
    snake.unshift(newHead);
}

//tempo do jogo
let jogo = setInterval(iniciarJogo, 100);
