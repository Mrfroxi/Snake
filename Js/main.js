const canves = document.getElementById('game');
const ctx = canves.getContext('2d');

let place = new Image();
place.src = 'img/ground.png' ; 

const foodImg = new Image();
foodImg.src = 'img/food.png' ;


let schore = 0;

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


function draw() {
    ctx.drawImage(place,0 ,0);
    ctx.drawImage(foodImg,food.x,food.y);
    for(let i=0 ; i<snake.length ; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x , snake[i].y , box , box)
    }



}

document.addEventListener('keydown' , walks);

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






let game = setInterval(draw , 100);
