var trexRunning, trexColliding, trex, groundMoving, ground, invisibleGround, cloud, cloudImage, obstacle1, obstacle2, obstacle3, obstacle4, obsstacle5, obstacle6, obstacle, randomNumber1, cloudGroup, ObstacleGroup

function preload(){
  trexRunning = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trexColliding = loadImage("trex_collided.png");
  groundMoving = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);
  trex = createSprite(40,180);
  trex.scale = 0.5;
  trex.addAnimation("running", trexRunning);
  ground = createSprite(300,170,400,20);
  ground.addImage("ground", groundMoving);
  invisibleGround = createSprite(300,180,600,20);
  invisibleGround.visible = false;
  cloudGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background("black");
  
  trex.collide(invisibleGround);
  
  if(keyDown("space")){
    trex.velocityY = -20;
  }
  trex.velocityY = trex.velocityY + 1;
  
  ground.velocityX = -3
  if(ground.x < 0){
    ground.x = 200;
  }
  
  spawnCloud();
  
  spawnObstacle();
  
  drawSprites();
}

function spawnCloud(){
  if(frameCount % 60 === 0){
  cloud = createSprite(600,random(60,50));
  cloud.scale = random(0.5,0.9);
  cloud.addImage(cloudImage);
  cloud.velocityX = -3;
  cloud.depth = trex.depth;
  cloud.lifetime = 200;
  trex.depth = trex.depth + 1;
  cloudGroup.add(cloud);
  }
}

function spawnObstacle(){
  if(frameCount % 60 === 0){
    obstacle = createSprite(600,170);
    obstacle.velocityX = -6;
    obstacle.lifetime = 100;
    obstacle.scale = 0.5;
    var randomNumber1 = Math.round(random(1,6));
    switch(randomNumber1){
      case 1: obstacle.addImage(obstacle1);
        break;
      case 2: obstacle.addImage(obstacle2);
        break;
        case 3: obstacle.addImage(obstacle3);
        break;
        case 4: obstacle.addImage(obstacle4);
        break;
        case 5: obstacle.addImage(obstacle5);
        break;
        case 6: obstacle.addImage(obstacle6);
        break;
        default: break;
           }
    obstacleGroup.add(obstacle);
    
  }
}