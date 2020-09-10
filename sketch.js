// Engine is used to create the physics engine
const Engine = Matter.Engine;

// World is used to create the physical world and add objects to it. 
const World = Matter.World;

// Bodies is used to create the physical objects which inhabit the world.
const Bodies = Matter.Bodies;

var engine, world, ball, ground1, ball2;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world =  engine.world;

  ball = new box(200,100,50,50);
  ground1 = new ground(400,380,800,10);
  ball2 = new box(230,200,50,50);
  
}

function draw() {
  background(0);  

  Engine.update(engine);

  ball.display();
  ball2.display();
  ground1.display();
  }