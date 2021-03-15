var garden
var gardenI
var cat
var cat1
var cat2
var cat3
function preload() {
    //load the images here
    gardenI = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400)
    cat = createSprite()
}

function draw() {
background("black");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
