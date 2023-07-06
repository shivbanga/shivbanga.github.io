//Conditions

let ellipseX = 600;
let furby;

function preload()
{
	furby=loadImage('furby.png')
}


function setup()
{
createCanvas(windowWidth, windowHeight)
for(let i=0; i<100; i++)
{
	ellipse(random(windowWidth), random(windowHeight), 20, 20)
}//for loop
imageMode(CENTER)
noCursor()
}//function setup

function draw()
{

if(keyIsPressed == true)
{
	background(17,77,209);
	//ellipseX=800;
}
else
{
	background(125,155,0);
	//background(random(0,255),  random(0,255), random(0,255));
	//ellipseX=300
	
}


//for loop
for(let i=0; i<windowHeight; i=i+10)
{
print(i)
	line(0, windowHeight/2,windowWidth, i);
}
for(let i=0; i<windowWidth; i=i+100)
{
	ellipse(random(windowWidth), random(windowHeight), 20, 20)
}

//ellipse(mouseX, mouseY, 100, 100)


textSize(40)
text('Shiv', 200, 200);

image(furby, mouseX, mouseY, 50, 50)

print (ellipseX);

ellipse(ellipseX, 500, 100, 100)

}//draw

function mouseClicked()
{
	if(ellipseX == 300)
	{
		ellipseX == 800
	}
	if(ellipseX == 800)
	{
		ellipseX == 300
	}
}///mouse click


