
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var boy,boyImg;
var stone;
var mango1,mango2,mango3,mango4,mango5;
var rope;
function preload()
{
  boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(1050,600,400,400)
	ground=new Ground(width/2,600,width,20)
	stone=new Stone(235,420,30);
	boy=createSprite(200,530,20,50);
	boy.addImage("boy",boyImg)
	boy.scale=0.1
	rope=new Chain(stone.body,{x:150,y:470})
	mango1=new Mango(1020,350,45);
	mango2=new Mango(1160,320,45);
	mango3=new Mango(1080,280,45);
	mango4=new Mango(1000,300,45)
	mango5=new Mango(1110,320,45)

	Engine.run(engine);
   
}


function draw() {
  
  Engine.update(engine);
  rectMode(CENTER);
  
  background("white");
  ground.display();
  tree.display();
  drawSprites();
  rope.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	
	}
	function mouseReleased(){
		rope.fly();
		
	}
function detectollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 //console.log(lmango.body,distance,lmango,lstone)
if(distance<=lmango.radius+lstone.radius){
		console.log(lmango.body)
		Matter.Body.setStatic(lmango.body,false);
	console.log(distance)
	 console.log(lmango.radius+lstone.radius)

 }
 if(lmango && lstone){

 }

}



