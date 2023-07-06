//paint brush


let furby;
let furbyBrushBool = false;
let ellipseBrushBool = false;

function preload()
{
furby=loadImage('furby.png')
}//preload



function setup()
{
	createCanvas(windowWidth,windowHeight)
	background(255)
}//setup


//paint brushes
function draw()
{
	smooth()

	if(ellipseBrushBool == true)
	{
		ellipseBrush()
	}//if statement

	if(furbyBrushBool == true)
	{
		furbyBrush()
	}//if statement

	

}//draw


function furbyBrush()
{
if(mouseIsPressed)
{
	image(furby, mouseX,mouseY, 40,40)
}
}//furbyBrush



function ellipseBrush()
{
if(mouseIsPressed)
{
	ellipse(mouseX,mouseY, 40,40)
}
}//ellipseBrush


function keyPressed()
{
	if(key == 'e')
	{
		ellipseBrushBool = true;
		furbyBrushBool = false;
	}

	if(key == 'f')
	{
		print("f key")
		furbyBrushBool = true;
		ellipseBrushBool = false;
	}

	if(key == 'c')
	{
		background(255)
		ellipseBrushBool = false;
		furbyBrushBool = false;
	}

	if(key == 's')
	{
		save('paint.png')
	}

}//key pressed










