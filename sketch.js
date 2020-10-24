
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boyImg,boy;
var stone,ground,tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var ropeobj;
var launchingForce=100;
function preload()
{
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
stone=new Stone(110,320,30);
ground=new Ground(width/2,650,800,20);
tree=new Tree(500,100,200,500);
  
mango1=new Mango(620,180,30);
mango2=new Mango(580,200,30);
mango3=new Mango(520,250,30);
mango4=new Mango(620,250,30);
mango5=new Mango(620,300,30);
//mango6=new Mango(620,350,30);
//mango7=new Mango(620,180,30);
//mango8=new Mango(620,180,30);
tree.debug=true;

ropeobj=new Rope(stone.body,{x:120, y:300});

}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyImg ,100,240,100,200);
  stone.display();
  ground.display();
  tree.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  ropeobj.display();


	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);

}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	ropeobj.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	 ropeobj.attach(stone.body);
	}
  }

  function detectCollision(stone,mango)
  {
mangoPos=mango.body.position;
stonePos=stone.body.position;

var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

if(distance<=mango.radius+stone.radius)
{
	Matter.Body.setStatic(mango.body,false);
}
  }