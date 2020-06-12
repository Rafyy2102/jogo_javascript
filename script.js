//trazenddo o canvas para o javascript
let canvas = document.getElementById("snake");

//trabalhando em 2d mostranddo o campo do jogo
let context = canvas.getContext("2d");

//tamanho do campo do jogo
let box = 32;

//array da cobrinha
let snake = [];

//tamanho dentro da cobrinha
snake [0] = {
    y: 8 * box,
    x: 8 * box
}

//direção da cobrinha
let direction = "right";

//criando array para a comida
let food = {
    //Math.floor tira a flutação do math e randomm traz números aleatórios
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}



//criando o backgroud
function criarBG(){
    //cor do backgroud
    context.fillStyle = '#191970';
    // desenhando as dimenssões do jogo   
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//trabalhando com array e tamanho 
function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "ForestGreen";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//criando a comida da cobrinha
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

//evento do botão ao clicar
document.addEventListener('keydown', update);

//criando a função do evento do botão
function update(event){

    //o 37 indica a direção que é direita
    if(event.keyCode == 37 && direction != 'right') direction = 'left';

    //o 38 indica a direção que é para baixo
    if(event.keyCode == 38 && direction != 'down') direction = 'up';

    //o 39 indica a direção que é esquerda
    if(event.keyCode == 39 && direction != 'left') direction = 'right';

    //o 40 indica a direção que é para cima
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

//iniciando o jogo
function iniciarJogo(){
    criarBG();
    criarCobrinha();
    drawFood();

    // redirecionanddo o movimento da cobrinha para que passa por traz da tela
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box; 

    //criando a função quando a cobrinha encostar sua cabeça na ponta da sua calda, restar o jogo
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("GAME OVER :(");
        }
    }
    //ponto de partida do jogo
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //cordenada da cobrinha
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //posição da comida e da cobrinha
    if(snakeX != food.x || snakeY != food.y){

        //pop retirar o ultimo elemento da array 
        snake.pop();            
    }else{

        //Math.floor tira a flutação do math e randomm traz números aleatórios
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }    

    //crianco a variavel para acrescentar
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    
    //acrescentando mais uma cabeça
    snake.unshift(newHead);
}

//tempo do jogo
let jogo = setInterval(iniciarJogo, 100);
