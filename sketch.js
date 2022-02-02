
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bOpt;

function preload(){
	var bOpt ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(300,10,16,bOpt)
	World.add(world,ball)
	left = new Ground (950,610,20,120)
	right = new Ground (1200,610,20,120)
	grnd = new Ground (width/2,670,width,10) 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  left.display()
  right.display()
  grnd.display()

  ellipseMode(RADIUS)
  fill("white")
  ellipse(ball.position.x,ball.position.y,16,16)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-0.05})
	}
}



