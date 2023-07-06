//furby tag game

//game objext
let furby;

// //variables for position and speed of furby
let xPos;
let yPos;

let xSpeed = 2;
let ySpeed = 2;

//calculate mouse distance from furby
let mouseDist; 

//score
let score = 0;

let startBool = true;
let winBool = false;

let rotation=0;

function preload()
{
	furby = loadImage('furby.png');
}//preload

function setup()
{
	createCanvas(windowWidth, windowHeight);
	xPos = random(15, windowWidth - 15);
	yPos = random(15, windowHeight - 15);

	imageMode(CENTER)
	textAlign(CENTER)
}//setup

function draw()
{
	background(0);

	if(startBool == true)
	{
		start()
	}

if(winBool == true)
	{
		winScreen()
	}


}//draw

function winScreen()
{
	background(200, 30, 100)
	fill(255)
	textSize(40)
	text("Winner!", windowWidth/2, 50)
	text("Press 'r' to restart", windowWidth/2,100)

	image(furby, windowWidth/2, windowHeight/2)
	image(furby, mouseX, mouseY, 30, 30)

	rotation++

	push()
	translate(windowWidth/2, windowHeight/2)
	rotate(radians(rotation))
	image(furby,0,0)
	pop()

}//win screen

function start()
{
	fill(255)
	textSize(40)
	text()
	text("Your score is: " + score, windowWidth/2,50)
	image(furby, xPos, yPos, 30, 30)

	//update x and y position every frame
	xPos = xPos + xSpeed;
	yPos = yPos + ySpeed;

	//if furby hits edge of screen, reverse speed
	if(xPos >= windowWidth - 15|| xPos <= 0)
	{
		xSpeed = xSpeed * -1;
	}
	if(yPos >= windowHeight - 15|| yPos <= 0)
	{
		ySpeed = ySpeed * -1;
	}


	mouseDist = dist(mouseX, mouseY, xPos, yPos);
	if (mouseDist <= 15) 
	{
		xPos = random(15, windowWidth - 15);
		yPos = random(15, windowHeight - 15);

		xSpeed = xSpeed * 1.2;
		ySpeed = ySpeed * 1.2;
		score++;
	}
	print(mouseDist);

	if(score == 1)
	{
		startBool = false;
		winBool = true;
	}


}//start

function keyPressed()
{
	if(key == 'r')
	{
		startBool = true;
		winBool = false;

		score=0;
	}
}

function windowResized()
{
	resizeCanvas(windowWidth,windowHeight);
}











