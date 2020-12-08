
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	DBleft=new Dustbin(524,609,10,85);
  DBbase=new Dustbin(580,652,100,10);
	DBright=new Dustbin(635,609,10,85);
	
	myGround= new Ground(400,660,800,10);
	myBall=new ball(94,640,30);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  
  DBright.display();
  DBbase.display();
  DBleft.display();
  myGround.display();
  myBall.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(myBall.body,myBall.body.position,{x:85,y:-85});
  
  }
}




