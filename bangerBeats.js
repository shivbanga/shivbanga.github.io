//Banger Beats

let glass;
let light;
let table;
let cut;
let sound;

let modem;

let amplitude;
let level;

let startBool = false;
let homeBool = true;

function preload()
{
	modem = loadSound('ModemSound.mp3')
}//preload

function setup()
{
	canvas = createCanvas(windowWidth, windowHeight)	
	canvas.style('z-index','-1')
	canvas.position(0,0)
	background(0);

	if(homeBool == true)
	{
		homeScreen();
	}

}//setup

function draw()
{
	
	if(mouseIsPressed == true)
	{
		startBool = true;
		homeBool = false;
	}

	if(startBool == true)
	{
		start();
	}

	background(0)
	// level = amplitude.getLevel()
	// let size = map(level, 0, .6, 10, 900)
	// ellipse(width/2, height/2, size, size)
}//draw


function homeScreen()
{
	background(200, 30, 100);
	fill(255);
	textSize(40);
	text("Welcome to Banger Beats", windowWidth/2, 50)
	textSize(20)
	text("press mouse pad to continue", windowWidth/2, 100)
}

function start()
{
		
	playButton = createButton('glass');
	playButton.position(300,400)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));

	playButton = createButton('light');
	playButton.position(500,400)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));


	playButton = createButton('table');
	playButton.position(400,400)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));


	playButton = createButton('cut');
	playButton.position(300,500)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));

	playButton = createButton('sound');
	playButton.position(500,500)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));

	playButton = createButton('sound');
	playButton.position(400,500)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));

}

