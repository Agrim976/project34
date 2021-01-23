const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var superhero;
var monster;
var chain;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;

var gameState = "start";

function preload() {
  bg = loadImage("images/GamingBackground.png");
  
}

function setup() {
  createCanvas(2500, 800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = Bodies.rectangle(425,600,2500,10,{isStatic : true});
  World.add(world, ground);

  superhero = new Superhero(600,400,300,100);

  monster = new Monster(2100, 400, 300, 300);

  chain = new Chain(superhero.body, {x : 400, y: 400});

  box1 = new Box(900,10,("green"));
  box2 = new Box(900,10,("green"));
  box3 = new Box(900,10,("green"));
  box4 = new Box(900,10,("green"));
  box5 = new Box(900,10,("green"));
  box6 = new Box(900,10,("green"));
  box7 = new Box(1000,10,("green"));
  box8 = new Box(1000,10,("green"));
  box9 = new Box(1000,10,("green"));
  box10 = new Box(1100,10,("green"));
  box11 = new Box(1100,10,("green"));
  box12 = new Box(1100,10,("green"));
  box13 = new Box(1100,10,("green"));
  box14 = new Box(1100,10,("green"));
  box15 = new Box(1100,10,("green"));
  box16 = new Box(1100,10,("green"));
  box17 = new Box(1200,10,("green"));
  box18 = new Box(1200,10,("green"));
  box19 = new Box(1200,10,("green"));
  box20 = new Box(1200,10,("green"));
  box21 = new Box(1300,10,("green"));
  box22 = new Box(1300,10,("green"));
  box23 = new Box(1300,10,("green"));
  box24 = new Box(1300,10,("green"));
  box25 = new Box(1300,10,("green"));
  box26 = new Box(1300,10,("green"));
  box27 = new Box(1300,10,("green"));
  box28 = new Box(1300,10,("green"));
  box29 = new Box(1300,10,("green"));
  box30 = new Box(1300,10,("green"));
  box31 = new Box(1400,10,("green"));
  box32 = new Box(1400,10,("green"));
  box33 = new Box(1500,10,("green"));
  box34 = new Box(1500,10,("green"));
  box35 = new Box(1500,10,("green"));
  box36 = new Box(1600,10,("green"));
  box37 = new Box(1600,10,("green"));
  box38 = new Box(1600,10,("green"));
  box39 = new Box(1600,10,("green"));
  box40 = new Box(1600,10,("green"));
  

}

function draw() {
  background("lightblue");
  Engine.update(engine);

  imageMode(CENTER);
  image(bg, 1300, 400, 2600, 800);

  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,2500,10);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display(); 
  box24.display(); 
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display(); 
  box38.display();
  box39.display();
  box40.display();

  superhero.display();

  monster.display();

  //chain.display();

  collision(superhero,monster);

}

function mouseDragged(){
  if(gameState==="start"){
    Matter.Body.setPosition(superhero.body, {x : mouseX, y : mouseY});
    
  }

}

function mouseReleased(){
  chain.fly();
  gameState = "play";

}

function collision(a,b){
  if(a.body.position.x - b.body.position.x <= a.width/2 + b.width/2
    &&b.body.position.x - a.body.position.x <= a.width/2 + b.width/
    2&&a.body.position.y - b.body.position.y <= a.height/2 + b.height/2
    &&b.body.position.y - a.body.position.y <= a.height/2 + b.height/2){
      
    Matter.Body.setStatic(b.body,false);

  }
         
}
