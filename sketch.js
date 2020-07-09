var player;
var ground;
var canvas;

var enemyPhoto;
var enemy,reset;

var healthGroup;

function preload(){
  playerImg = loadImage("images/ninjaA.png");
  player1Img = loadImage("images/ninjaB.png");
  player2Img = loadImage("images/ninjaC.png");
  player3Img = loadImage("images/ninjaD.png");
  player4Img = loadImage("images/ninjaE.png");
  player5Img = loadImage("images/ninjaF.png");
  player6Img = loadImage("images/ninjaB.png");
  player7Img = loadImage("images/ninjaB.png");
  bkg = loadImage("images/bambo.jpg");
  enemyPhotoImg = loadImage("images/enemyPhoto1.png");
  enemy1 = loadImage("images/enemyA.png");
  enemy2 = loadImage("images/enemyF.png");
  enemy3 = loadImage("images/enmy3.png");
  img = loadImage("images/player.png");
  youLost = loadImage("images/gameOver.png");
 
}
function setup() {
  canvas = createCanvas(1000,500);
  player = createSprite(100,300);
  healthGroup = new Group();

  ground = createSprite(500,495,width,40);
  rightWall = createSprite(995,230,20,height);
  rightWall.shapeColor = "green";
  leftWall = createSprite(5,230,20,height);
  leftWall.shapeColor = "green";
  point = createSprite(100,100);

  enemyPhoto = createSprite(800,100);
  enemy = createSprite(800,300);


  health2 = createSprite(280,80,200,7);
  health2.shapeColor = rgb(120,47,57);

  healthGroup.add(health2);
  reset = createButton('reset');
  reset.position(430,77);

}

function draw() {
  background(bkg);
  ground.shapeColor = "brown";

  player.velocityY = 0;   
  player.scale = 0.8;
  player.collide(ground);
  player.collide(rightWall);
  player.collide(leftWall);
  player.velocityY =  player.velocityY + 5;
  player.velocityX = 0;
  player.addImage(playerImg);
  
  if(i=0){
    healthGroup.get(i).destroyi=l+1;
}  
if(World.frameCount%70===0){
   h.destroy();
  }
  enemyPhoto.addImage(enemyPhotoImg);
  enemyPhoto.scale = 0.2;
  enemy.addImage(enemy1);
  enemy.velocityY = 0;   
  enemy.scale = 0.8;
  enemy.bounceOff(ground);
  enemy.bounceOff(rightWall);
  enemy.bounceOff(leftWall);
  enemy.velocityY =  enemy.velocityY + 5;
  //enemy.collide(player);
  point.addImage(img);
  point.scale = 0.8;

for(i=0;i<healthGroup.length;i++){
    h = createSprite(200,200,20,20);
    healthGroup.add(h);

}
  if(keyIsDown("space")){
    player.addImage(player2Img);
    player.velocityY = -3;
   }
  if(player.y<200){
    enemy.addImage(enemy3);
    enemy.velocityY = -3;
  }
  if(keyDown(RIGHT_ARROW)){
    player.velocityX = 3;
  }

  if(keyDown(LEFT_ARROW)){
    player.velocityX = -3;
  }
  if(keyDown("w")){
    player.addImage(player5Img);
    enemy.collide(player);
  }
 else{
    player.addImage(playerImg);
  }
  if(keyDown("d")){
    player.addImage(player1Img);
  }
  if(keyDown("a")){
    player.addImage(player3Img);    
    player.collide(enemy);                                                 
  }
  if(keyDown("enter")){
    enemy.velocityX = -3;
  }
  if(enemy.isTouching(player)){
      enemy.addImage(enemy2);
      player.collide(enemy);
      //health1.width = health1.width-20;

  }
  else{
    enemy.addImage(enemy1);
  }
  textSize(15);
  strokeWeight(0.8);
  stroke(0);
  fill(0);
  text("Press 'LEFT' and 'RIGHT' to move the ninja left to right.",170,100);
  text("Press 'w','d',to attack,press 'a' to block",170,130);
  text("Press 'space' to fly.",170,160);
  text("press enter to start",200,200);

  if(player.x<0){
    point = createSprite(500,200);
    point.addImage(youLost);
    enemy.velocityX = 0;
   // health2.destroy();
  }
  if(player.x>1000){
   // point = createSprite(200,200);
    //p//oint.addImage(youLost);
    enemy.velocityX = 0;
   // health2.destroy();

  }
  if(enemy.x>1000){
    text("YOU WON",400,300);
    enemy.velocityX = 0;
    enemy.destroy();

  }
  if(enemy.x<0){
    text("YOU WON",400,300);
    enemy.velocityX = 0;
    enemy.destroy();

  }
  reset.mousePressed(()=>{
    health2 = createSprite(280,80,265,7);
    health2.shapeColor = rgb(120,47,57);
    health2 = createSprite(620,80,265,7);
    health2.shapeColor = rgb(150,60,49);
    enemy.destroy();
    player.destroy();
    player = createSprite(100,300);
    point.visibility = false;
    enemy = createSprite(800,300);
  });
  
  drawSprites();
  }
