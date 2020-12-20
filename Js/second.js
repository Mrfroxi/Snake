//Создание canvas + Img
let cvs = document.querySelector('#game');
let ctx = cvs.getContext("2d");

let plane = new Image();
plane.src = 'img/ground.png';

let foodImg = new Image();
foodImg.src = 'img/food.png';
//Переменный
let firstscore = 0 ;
let secondscore = 0;

let box = 32;

let food ={
    x:Math.round(Math.random()*16+ 1)*box,
    y:Math.round(Math.random()*14+ 3)*box
}
//Первая змея
let firstsnake = [];
firstsnake[0] = {
    x:3*box  ,
    y:4*box
 }
//Вторая змея
let secondsnake = [];
secondsnake[0] = {
    x:13*box  ,
    y:10*box
 }
//Функции 
function draw(){
    ctx.drawImage(plane,0 ,0);
    ctx.drawImage(foodImg,food.x ,food.y);
    for(i=0 ; i<firstsnake.length ; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(firstsnake[i].x ,firstsnake[i].y , box ,box);
    }
    for(i=0 ; i<secondsnake.length ; i++){
        ctx.fillStyle = "red";
        ctx.fillRect(secondsnake[i].x ,secondsnake[i].y , box ,box);
    }
    //Счёт
    ctx.fillStyle = "white";
	ctx.font = "50px Arial";
    ctx.fillText(firstscore,box*2,box*1.8);

    ctx.fillStyle = 'red';
    ctx.font ="50px Arial";
    ctx.fillText(secondscore, box*10 , box*1.8)

    // Анимация движения 1
    let firstsnakeX = firstsnake[0].x;
    let firstsnakeY = firstsnake[0].y;

    if(step == 'down') firstsnakeY += box;
    if(step == 'up') firstsnakeY -= box;
    if(step == 'left') firstsnakeX -= box;
    if(step == 'right') firstsnakeX += box;

    if(firstsnakeX == food.x && firstsnakeY == food.y){
        firstscore++;
         food ={
            x:Math.round(Math.random()*16+ 1)*box,
            y:Math.round(Math.random()*14+ 3)*box
        }
    }else{
        firstsnake.pop()
    }

        
    firsthead = {
        x : firstsnakeX,
        y : firstsnakeY
    }

    // ударение Об хвост function 
    function endsnake(tag ,arr){
        for(let i =0 ; i<arr.length ; i++){
            if (tag.x == arr[i].x  && tag.y == arr[i].y){
                clearInterval(game);
            }
        }
    }

endsnake(firsthead ,firstsnake);
    firstsnake.unshift(firsthead);

//Second Snake  !!!

   let  secondsnakeX = secondsnake[0].x ;
   let  secondsnakeY = secondsnake[0].y ;


   if(put == 'down') secondsnakeY += box;
   if(put == 'up') secondsnakeY -= box;
   if(put == 'left') secondsnakeX -= box;
   if(put == 'right') secondsnakeX += box;

   if(secondsnakeX == food.x && secondsnakeY == food.y){
        secondscore++;
        food ={
           x:Math.round(Math.random()*16+ 1)*box,
           y:Math.round(Math.random()*14+ 3)*box
       }
   }else{
    secondsnake.pop()
   }

       
  secondhead = {
       x : secondsnakeX,
       y : secondsnakeY 
   }
   endsnake(secondhead ,secondsnake);
   secondsnake.unshift(secondhead);

}

let step ;
//движение 1 змеи
function walk(event){
if(event.keyCode == 38 && step !='down'){
    step = 'up';
}else if ( event.keyCode == 37 && step !='right'){
    step = 'left'
}else if (event.keyCode == 39 && step !='left'){
    step = 'right'
}else if(event.keyCode == 40 && step !='up'){
    step = 'down'
}
}

let put ;
//движение 2 змеи
function walk2(event){
    if(event.keyCode == 87 && put !='down'){
        put = 'up';
        console.log(put)
    }else if ( event.keyCode == 65 && put !='right'){
        put = 'left'
    }else if (event.keyCode == 68 && put !='left'){
        put = 'right'
    }else if(event.keyCode == 83 && put !='up'){
        put = 'down'
    }
    }

console.log(walk);
document.addEventListener('keydown' ,walk);
document.addEventListener('keydown' ,walk2);
let game = setInterval(draw ,100);