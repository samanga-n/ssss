
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, stone, tree, ground, mango1;

function preload()
{
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	
	text("Press Space key for a Second Chance",150,200);
	stone = new Stone(232,538,40);
	tree = new Tree(1000,500);
	ground = new Ground(600,690,1200,20);
	mango1 = new Mango(1000,94,30);
	mango2 = new Mango(1010,200,30);
	mango3 = new Mango(830,270,30);
	mango4 = new Mango(1180,390,30);
	mango5 = new Mango(900,400,30);
	mango6 = new Mango(1080,310,30);
	mango7 = new Mango(950,295,30);
	mango8 = new Mango(1160,240,30);
	mango9 = new Mango(855,235,40);
	mango10 = new Mango(1039,263,40);
	mango11 = new Mango(1082,187,40);
	mango12 = new Mango(913,183,40);
	mango13 = new Mango(815,341,40);

	throwObject = new Throw(stone.body,{x:232, y:528});

	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  push();
  textSize(20);
  stroke("orange");
  text("Press Space key for a Second Chance",150,100);
  pop();
  image(boy ,200,453,200,315);
  stone.display();
  tree.display();
  push();
  fill("black");
  text(mouseX+","+mouseY,mouseX,mouseY);
  pop();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  throwObject.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  detectollision(stone,mango13);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	throwObject.fly();
   
}
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:232, y:528}) 
	  throwObject.attach(stone.body);
	}
  }


