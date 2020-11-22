//To use the physics engine, we will use 3 objects created in Matter.js library -->
//World,Engine,Bodies

const World = Matter.World; //namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {

    isStatic: true  //this is in JSON format - Javascript object notation  
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  console.log(ground.position.x);
  console.log(ground.position.y);

  var ball_options = {
    restitution: 3
  }

  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);


 
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);
 
  ellipseMode(RADIUS);
  fill("green");
  ellipse(ball.position.x,ball.position.y,30);
}