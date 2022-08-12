var box 
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,40,40) 
}

function draw() 
{
  background(30);
  if (keyDown(LEFT_ARROW))
{
  box.x-=5
}
if (keyDown(RIGHT_ARROW))
{
 box.x+=5
}
drawSprites()
}



