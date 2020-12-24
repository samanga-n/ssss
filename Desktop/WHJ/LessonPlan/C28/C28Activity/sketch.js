const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4,log5;
var bird,ground,platform,chain;
var pig1,pig2;
var backgroundImage;

function preload(){
  backgroundImage=loadImage("sprites/bg.png");
}
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
   
 
  ground= new Ground(600,height,1200,15);
  platform= new Ground(150,308,300,170);
 
  box1= new Box(700,325,70,70);
  box2= new Box(920,325,70,70);
  pig1=new Pig(810,325);
  log1=new Log(810,260,325,PI/2);
  
  box3= new Box(700,240,70,70);
  box4= new Box(920,240,70,70);
  pig2=new Pig(810,210);
  log2=new Log(810,180,325,PI/2);

  box5=new Box(810,160,70,70);
  log3=new Log(760,120,150,PI/5);
  log4=new Log(870,120,150,-PI/5);

  bird=new Bird(100,100);
  
  //log5= new Log(230,180,80,PI/2);
  slingshot = new Slingshot(bird.body,{x:200,y:100});
  

}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  ground.display();
  platform.display();
  
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  log3.display();
  log4.display();

  box5.display();
  
  bird.display();
  
  //log5.display();
  slingshot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}