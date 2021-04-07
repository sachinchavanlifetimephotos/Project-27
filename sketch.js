const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
var roof1; 
var ball1,ball2,ball3,ball4,ball5 ; 
var rope1, rope2, rope3, rope4, rope5;  


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700); 



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    roof1=new Roof(width/2,height/4,width/7,20); 
   
    ballDiameter=40; 
    ballPosX=width/2; 
    ballPosY=height/4+300; 
    ball1=new Ball(ballPosX-ballDiameter*2,ballPosY, ballDiameter); 
    ball2=new Ball(ballPosX-ballDiameter,ballPosY, ballDiameter);  
    ball3=new Ball(ballPosX,ballPosY, ballDiameter); 
    ball4=new Ball(ballPosX+ballDiameter,ballPosY, ballDiameter); 
    ball5=new Ball(ballPosX+ballDiameter*2,ballPosY, ballDiameter); 

    rope1=new Strain(ball1.body,roof1.body,-ballDiameter*2,0); 
    rope2=new Strain(ball2.body,roof1.body,-ballDiameter*1,0); 
    rope3=new Strain(ball3.body,roof1.body,0,0); 
    rope4=new Strain(ball4.body,roof1.body,ballDiameter*1,0); 
    rope5=new Strain(ball5.body,roof1.body,ballDiameter*2,0); 
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  
  roof1.display(); 
  rope1.display(); 
  rope2.display(); 
  rope3.display(); 
  rope4.display(); 
  rope5.display();
  ball1.display(); 
  ball2.display();  
  ball3.display(); 
  ball4.display(); 
  ball5.display(); 
}
function keyPressed(){ 
  if(keyCode===UP_ARROW){ 
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45}); 
  }
}


