const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;
//initialising engine and world
var world,engine;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19;
var sling;

function preloasd()
{

}
function setup()
{
    createCanvas(1800,600);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(900,580,1800,10);
    stand=new Ground(1130,500,324,10);
    Engine.run(engine);
    block1=new Box(1130,450,60,90);
    block2=new Box(1189,450,60,90);
    block3=new Box(1254,450,60,90)
    block4=new Box(1070,450,60,90);
    block5=new Box(1005,450,60,90);
    //level two
    block6=new Box(1070,370,60,90);
    block7=new Box(1130,370,60,90);
    block8=new Box(1189,370,60,90);
    //top
    block9=new Box(1130,290,60,90);

    stand2=new Ground(1550,400,195,10)
    //lowest layer
    block10=new Box(1490,330,60,90);
    
    
    block11=new Box(1550,330,60,90);
    block12=new Box(1610,330,60,90);
    //top layer of stand 2
    block13=new Box(1550,250,60,90);
    //polygon
    polygon=new Polygon1(200,500,20);
    sling=new SlingShot(polygon.body,{x:200,y:500});

}

function draw()
{
    background(0);
    Engine.update(engine);
    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    stand2.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    polygon.display();
    sling.display();
    /*detectCollision(polygon,block1);
    detectCollision(polygon,block2);
    detectCollision(polygon,block3);
    detectCollision(polygon,block4);
    detectCollision(polygon,block5);
    detectCollision(polygon,block6);
    detectCollision(polygon,block7);
    detectCollision(polygon,block8);
    detectCollision(polygon,block9);
    detectCollision(polygon,block10);
    detectCollision(polygon,block11);
    detectCollision(polygon,block12);
    detectCollision(polygon,block13);*/

}
function mouseDragged()
{
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
    //sling.attach(polygon.body);
}

function mouseReleased()
{
	sling.fly();
    
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
	  //sling.attach(polygon.body);
	}
  }
    
