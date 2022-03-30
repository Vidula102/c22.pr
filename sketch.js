const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, playerImg;
var baseImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImg = loadImage("./assets/base.png");
  playerImg = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES);

  var options = {
    isStatic: true
  };
  
  //create player base body (x,y,width,height)
  playerBase = Bodies. rectangle( 200, 350, 180, 150, options);
  World.add(world, playerBase);

  //create player body
  player = Bodies.rectangle( 250, playerBase.position.y - 160, 80, 180, options);
  World.add(world, player);


}

function draw() {
  image(backgroundImg, 0, 0, width, height);

  //show the player image using image() function
  image(baseImg, playerBase.position.x, playerBase.position.y, 180, 150);
  //show the playerbase image using image() function
  image(playerImg, player.position.x, player.position.y, 80, 180);


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}