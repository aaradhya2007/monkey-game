
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survivalTime;
var ground;
var PLAY=1;
var END=0 ;
var gameState=PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(200,353,30,30)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(300,380,600,10)
  
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  
  survivalTime=0;
 
}


function draw() {
  
  
  background("lime")
 
 
  
 if(keyDown("space")&&monkey.y>=335){
   monkey.velocityY=-10;
   
 }
  survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time : "+survivalTime,300,100) 
  
  if(gameState===PLAY){
     obstacles();
  bananas(); 
  }
  
  monkey.velocityY=monkey.velocityY+0.6;
  monkey.collide(ground);
  
  if(monkey.isTouching(obstacleGroup)){
 gameState=END;
 obstacleGroup.destroyEach();
 foodGroup.destroyEach();
}
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
  }
  
   drawSprites();
}
function obstacles(){
  
  if(frameCount%200===0){
     obstacle=createSprite(600,360,30,30)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1; 
  obstacle.velocityX=-5;  
  obstacleGroup.add(obstacle)
   }

}

function bananas(){
  if(frameCount%80===0){

  banana=createSprite(600,250,30,30)
  banana.addImage(bananaImage);
  banana.scale=0.08;
  banana.velocityX=-5;
 
    banana.lifetime=200;
    foodGroup.add(banana)
  }
}


