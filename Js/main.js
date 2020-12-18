const canves = document.getElementById('game');
const ctx = canves.getContext('2d');

let place = new Image();
place.src = 'img/ground.png' ; 

const foodImg = new Image();
foodImg.src = 'img/food.png' ;


let score = 0;

let box =32;

let food = {
    x: Math.round(Math.random()*17 +1)*box,
    y: Math.round(Math.random()*15 +3)*box
}

let snake = [];
snake[0] = {
    x: 9*box,
    y: 10*box
}

//Движение
let put ;
function walks(event){
    if(event.keyCode ==37 && put !='right'){
        put = 'left' 
    }else if(event.keyCode== 39   && put !='left'){
        put = 'right'
    }else if(event.keyCode == 38   && put != 'down'){
        put = 'up'
    }else if(event.keyCode==40 && put != 'up'){
        put = 'down'
    }
    }

//Появлементов элементов
function draw() {
    ctx.drawImage(place,0 ,0);
    ctx.drawImage(foodImg,food.x,food.y);
    for(let i=0 ; i<snake.length ; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x , snake[i].y , box , box)
    }

    
function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y)
			clearInterval(game);
	}
}
    //Счёт
    
	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
    ctx.fillText(score,box*2,box*1.8);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX < box || snakeX > box * 17
		|| snakeY < 3 * box || snakeY > box * 17)
		clearInterval(game);



    if(put == 'left') snakeX -= box;
    if(put == 'right') snakeX += box;
    if(put == 'up') snakeY -= box;
    if(put == 'down') snakeY += box;

     //Ест food
    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
			x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box,
		};
    }else {
        snake.pop();
    }
   

        let head = {
            x:snakeX,
            y:snakeY
        }

        eatTail(head, snake);

        snake.unshift(head);

    }


document.addEventListener('keydown' , walks);
let game = setInterval(draw , 100);
