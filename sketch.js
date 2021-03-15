var gardenI;
var garden;
var cat;
var cat1;
var cat2;
var cat3;
var m;
var m1;
var m2;
var m3;

function preload() {
    //load the images here
    gardenI = loadImage("images/garden.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadImage("images/cat4.png");
    m1 = loadImage("images/mouse1.png");
    m2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    m3 = loadImage("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(500,400);
garden.addImage(gardenI);
cat = createSprite(900,550);
cat.addImage(cat1);
cat.scale = 0.1;
m = createSprite(200,550);
m.addImage(m1);
m.scale = 0.1;
//m.debug = true;
//cat.debug = true;
m.setCollider("rectangle",0,0,5,5,5)

}
function draw() {
    background(255);
    text(m.x+','+m.y,10,45);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(m)) {
        cat.addAnimation("catI",cat3);
        cat.changeAnimation("catI");
        m.addAnimation("mouseD",m3);
        m.changeAnimation("mouseD");
        cat.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",cat2);
        cat.changeAnimation("catRunning");
        m.addAnimation("mouseClapping",m2)
        m.changeAnimation("mouseClapping")
    }
  
  }
  
