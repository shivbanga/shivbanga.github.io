//Eiffel Tower Sketch

let etower;
let value =(255,244,51);
//let offset = 0;
//let easing = 0.05;

function setup()
{
  createCanvas(windowWidth, windowHeight);
  print(windowWidth)

}
function preload() 
{
  etower = loadImage('etower.png');
}

function draw() 
{
  background(17,77,209);
  stroke(255, 102, 0);
  strokeWeight(10);
      
  //Sun
  fill(255,244,51);
  ellipse(25,30, 100,100);

  
  //arms
  stroke(153, 102, 0);
  line(315,400, 360, 400);
  
  line(270,400, 360, 400);
  

  //face
  fill(153, 102, 0);
  noStroke()
  ellipse(313,360,50,50);

  //rectangle in the middle
  noStroke()
  fill(153, 102,0);
  rect(300,375, 25,70);
  
  
  //triangle in middle
  noStroke()
  //fill(255,244,51)
  fill(value)
  triangle(100,100, 200,450,75,450)
  
   //rectangle in the middle
  fill(100, 200,0);
  noStroke()
  rect(0,450,windowWidth,300);
  
  stroke(50)
  fill(220)
  // line(95,200,155,300)
  // line(155,300,80,400)
  // line(80,400, 180,450)
  
  // line(125,200,85,300)
  // line(85,300,185,400)
  // line(80,450,185,400)
  
  print(mouseX, mouseY)

  image(etower, -500, -400);
  // Display at full opacity
  //let dx = mouseX - etower.width / 2 - offset;
  //offset += dx * easing;
  //tint(255, 127); // Display at half opacity
  //image(etower, offset, 10);

}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}
///changing color of eiffel tower
function mousePressed() 
{
  if (value === (255,244,51)) 
  {
    value = 255;
  } 
  else
  {
    value = (255,244,51);
  }

  
}//close mouse pressed function





