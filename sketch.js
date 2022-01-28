const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig;
var log;

function setup(){
    var canvas = createCanvas(1800,850);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,820,50,50);
    box2 = new Box(1150,820,50,50);
    ground = new Ground(200,height,3300,20)
    pig = new Pig(1075,820);
    log = new Log(10,620,100,PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
}