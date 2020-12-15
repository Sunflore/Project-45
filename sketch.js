var boxA, boxB,boxC,boxD;
var bAI, bBI, bCI,bDI;
var background1, background2;

function preload()
{
   /*bAI=loadImage("boxA.jpg");
   bBI=loadImage("boxB.jpg");
   bCI=loadImage("boxC.jpg");
   bDI=loadImage("boxD.jpg");*/
}

function setup()
{
   var canvas=createCanvas(displayWidth - 30 ,displayHeight - 95);

    boxA=createSprite(180,550,100,50);
    //boxA.addImage(bAI);
    boxB=createSprite(180,350,100,50);
    //boxB.addImage(bB1);
    boxC=createSprite(1000,550,100,50);
    //boxC.addImage(bCI);
    boxD=createSprite(1000,350,100,50)
}

function draw()
{
    background("black");

    drawSprites();
}