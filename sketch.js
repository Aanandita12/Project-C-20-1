var movingRect, fixedRect;
var car, wall, thickness1, thickness2, thickness3, thickness4;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect= createSprite(200, 200, 80, 30);
  wall      =createSprite(1500, 200, 60, height/2);
  thickness1= createSprite(200, 200, 80, 30);
  thickness2= createSprite(200, 200, 80, 30);
  thickness3= createSprite(200, 200, 80, 30);
  thickness4= createSprite(200, 200, 80, 30);
  car       =createSprite (50,200,50,50);

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 && 
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
  thickness.y-thickness.y<thickness.height/2+thickness.height/2)
  {movingRect.shapeColor="pink";
  fixedRect.shapeColor="pink";
  thickness1.shapeColor="pink";
  thickness2.shapeColor="red";
  thickness3.shapeColor="blue";
  thickness4.shapeColor="green";
 
  car.velocityX = speed;


}
else{
fixedRect.shapeColor="green";
//fixedRect.shapeColor="green";
//thickness.shapeColor="green";

thickness=random(22,83);
speed=random(55,90);
weight=random(400,1500);

    
}
  drawSprites();
}
