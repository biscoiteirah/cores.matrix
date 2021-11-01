var bola;
function setup() {
  createCanvas(400, 400);
  bola=createSprite (200,200,30,30);
  bola.shapeColor="white";
}
function draw() {
  background("black");
//escreva o codigo para alterar a cor do fundo 
if (keyIsDown(RIGHT_ARROW)) {
  bola.position.x=bola.position.x+5
  background("red");
}
//mudar a cor para vermelho quando a seta para direita for pressionada
if (keyIsDown(LEFT_ARROW)) {
bola.position.x=bola.position.x-5
background("green");
}

if (keyIsDown(UP_ARROW)) {
  bola.position.y=bola.position.y-5
  background("blue");
  }

  if (keyIsDown(DOWN_ARROW)) {
    bola.position.y=bola.position.y+5
    background("purple");
    }
    drawSprites();
  }