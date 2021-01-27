const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg
var back;
var bird;
var birdImg;
var obstacles;
var birdSprite;
var invisibleGround;
var gameState = 1
var pillar1, pillar2 , pillar3 , pillar4 , pillar5 , pillar6;
var score = 0;
var pillarGroup;
function preload(){
backgroundSuccessImg = loadImage("46888871-624a3900-ce7f-11e8-808e-99fd90c8a3f4.png")
backgroundEndImage = loadImage("game over .jpg")
birdImg = loadImage("bird2.png");
pillar1 = loadImage("pillar1-1.png")
pillar2 = loadImage("pillar2.png")
pillar3 = loadImage("pillar3.png")
pillar4 = loadImage("pillar4.png")
pillar5 = loadImage("pillar5.png")
pillar6 = loadImage("pillar6.png")
}

function setup(){
createCanvas(1500,400)

// bird = createSprite(100,300,50,50)

engine = Engine.create()
world=engine.world;
// bird = Bodies.rectangle(100,300,50,50,{isStatic:true})
// World.add(world,bird)
console.log(bird)
birdSprite = createSprite(100,300,50,50)

birdSprite.addImage(birdImg)
birdSprite.scale = 1;
invisibleGround = createSprite(0,780,4000,10)
invisibleGround.visible = false
// back.velocityX = -2
pillarGroup = new Group() ; 

}
function draw(){
  Engine.update(engine)

  if(gameState == 1)
  {

  background(backgroundSuccessImg)
  textSize(30)
  noFill()
  fill("blue")
 text("Score: "+score,50,50)
  if(frameCount%100 ==0)
  {              
    // 200 520
    //
  
   
   
    var rand = Math.round(random(1,3))
    var ob
    score = score + 1;
    if(rand == 1)
    {     
    var ob2 = createSprite(1000,350,40,100)
    ob2.addImage(pillar2)
    ob2.scale=4
    ob2.shapeColor = "#32CD32"
    ob2.debug = true
    
    ob2.velocityX = -8
    ob2.scale = 2;
    pillarGroup.add(ob2)
    

    ob = createSprite(1000,60,40,200)
    ob.addImage(pillar1)
  ob.scale=4.
   ob.shapeColor = "#32CD32"
     ob.velocityX = -8;
     ob.scale = 2   
     pillarGroup.add(ob)  
    }
    if(rand == 2)
    {
    var ob2 = createSprite(1000,320,40,100)
    ob2.addImage(pillar4 )
    ob2.scale=4
    ob2.shapeColor = "#32CD32"
    
    ob2.velocityX = -8
    ob2.scale = 2;
    pillarGroup.add(ob2)
    

    ob = createSprite(1000,50,40,200)
    ob.addImage(pillar3)
  ob.scale=4.
   ob.shapeColor = "#32CD32"
     ob.velocityX = -8;
     ob.scale = 2   
     pillarGroup.add(ob)  
    }
    if(rand == 3)
    {
    var ob2 = createSprite(1000,350,40,100)
    ob2.addImage(pillar6 )
    ob2.scale=4
    ob2.shapeColor = "#32CD32"
    
    ob2.velocityX = -8
    ob2.scale = 2;
    pillarGroup.add(ob2)
    

     ob = createSprite(1000,60,40,200)
    ob.addImage(pillar5)
  ob.scale=4.
   ob.shapeColor = "#32CD32"
     ob.velocityX = -8;
     ob.scale = 2 
     pillarGroup.add(ob)  

    }
    
     
    
     



  }
  if(birdSprite.isTouching(pillarGroup))
  {
    gameState = 0
  }

  if(keyDown("space"))
  {
    console.log("space")
  birdSprite.velocityY = -10
  
  }
  birdSprite.velocityY = birdSprite.velocityY+0.8
if(birdSprite.isTouching(invisibleGround))
{
  gameState = 0
}
  
  drawSprites();
}
if(gameState === 0)
{
  background(backgroundEndImage)
}
    
}