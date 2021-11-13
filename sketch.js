var boy, boyImg;
var bg, bgImg;
var ground;


function preload(){
bgImg = loadImage("images/background 456.jpg");  
boyImg = loadImage("images/pizza_boy-removebg-preview.png");

}
function setup(){
createCanvas(1600,800)  

boy = createSprite(150,600)
boy.addImage("img",boyImg);
boy.scale = 0.35;

ground = createSprite(displayWidth/2,700,displayWidth*5,20);
ground.visible = false;

}
function draw(){
image(bgImg, - displayWidth, 0, displayWidth*5, displayHeight);

boy.x = camera.x-100;

// background(bgImg)


if(keyDown("space") && boy.y>=displayHeight/2+100){
  boy.velocityY-=2;
}

if(keyDown("right")){
  
  camera.x = camera.x + 10;
}
boy.velocityY = boy.velocityY+1;
boy.collide(ground)
drawSprites();
}