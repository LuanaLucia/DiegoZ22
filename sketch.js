var quadrado

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, box1, box2

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world = engine.world;

  box1 = Bodies.rectangle(200,100,50,50)
  World.add(world,box1)

  var box2_options={
    isStatic: true
  }

  box2 = Bodies.rectangle(200,300,400,50,box2_options)
  World.add(world,box2)

}

function draw() {
  background(0); 
  
  Engine.update(engine)
  
  rectMode(CENTER)
  rect(box1.position.x,box1.position.y,50,50)

  rect(box2.position.x,box2.position.y,50,50)


}