//Создание canvas + Img
let cvs = document.querySelector('#game');
let ctx = cvs.getContext("2d");

let plane = new Image();
plane.src = 'img/ground.png';

let foodImg = new Image();
foodImg.src = 'img/food.png';
//Переменный
const firstscore = 0 ;
const secondscore = 0;

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

 
}







let game = setInterval(draw ,100);