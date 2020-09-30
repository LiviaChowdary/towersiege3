const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, polygon, stand;
var platform;
var bird, slingshot;
var score = 0;

var gameState = "onSling";

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    stand1 = new Ground()

    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(330,195,30,40);
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);
    block9 = new Box(390,155,30,40);


    polygon = new polygon(200,50);
    

  //polygon holder with slings 
  polygon = Bodies.circle(50,200,20); 
  World.add(world,polygon); 

    slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw(){
   
    Engine.update(engine);
    //strokeWeight(4);
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    slingshot.display();

    text("SCORE : "+score,750,40);
  
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }

}
function score(){
    if(this.visibilty<0&&this.visibility>-105){
        score++;
    }

}

