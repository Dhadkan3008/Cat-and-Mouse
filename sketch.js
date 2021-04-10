var cat ,garden;
var background1;

function preload() {
    //load the images here
    cat = loadImage("tomOne.png");   
    catRunning = loadAnimation("tomTwo.png","tomThree.png");
    catSad = loadImage("tomFour.png");
    garden = loadImage("garden.png");
    mouseStanding = loadImage("jerryOne.png");
    mouseTeasing = loadAnimation("jerryThree.png");
}

function setup(){
    createCanvas(1000,800);
   
    //create tom and jerry sprites here
  
  
  cat1 = createSprite(700,660)
  cat1.addImage(cat);
  cat1.scale = 0.1;
  //cat1.debug=true;
  cat1.setCollider("rectangle",10,10,1000,1050)

  mouse1 = createSprite(100,660)
  mouse1.addImage(mouseStanding);
  mouse1.scale = 0.1;
  //mouse1.debug=true;
  mouse1.setCollider("rectangle",10,10,1000,1050);

}
function draw() {
background(garden);


if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("cat",catRunning);
cat1.changeAnimation("cat");

}

if(cat1.x-mouse1.x < cat1.width/2 +mouse1.width/2
    && mouse1.x-cat1.x < cat1.width/2+mouse1.width/2){

    cat1.velocityX = 0;
    mouse1.addAnimation("mouse",mouseTeasing);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworry",catSad);
    cat1.changeAnimation("catworry");
}


    drawSprites();
}
