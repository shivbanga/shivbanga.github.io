//Banga Beats

let glass;
let light;
let table;
let cut;
let sound;

// let modem;

// let amplitude;
// let level;

let startBool = false;
let homeBool = true;

function preload()
{
	glass = loadSound('glass.m4a')
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

	// level = amplitude.getLevel()
	// let size = map(level, 0, .6, 10, 900)
	// ellipse(width/2, height/2, size, size)
}//draw


function homeScreen()
{
	background(200, 30, 100);
	fill(255);
	textSize(40);
	text("Welcome to Banga Beats", 500, 50)
	textSize(20)
	text("press mouse pad to continue", 600,100)
}

function start()
{
	background(0)

	playButton = createButton('glass_1');
	playButton.position(550,200)
	playButton.style('font-size', '20px');
  	playButton.style('background-color', color(200,255,255));
 	playButton.mousePressed(playGlass);

	// playButton = createButton('light_2');
	// playButton.position(750,200)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('table_3');
	// playButton.position(650,200)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('cut__4');
	// playButton.position(550,300)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('sound 5');
	// playButton.position(750,300)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('sound 6');
	// playButton.position(650,300)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('sound 7');
	// playButton.position(550,400)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('sound 8');
	// playButton.position(750,400)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());

	// playButton = createButton('sound 9');
	// playButton.position(650,400)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
  	// playButton.mouseClicked(glass.play());


  	// checkbox = createCheckbox('glass', false);
  	// checkbox.position(500,250)
 	// checkbox.changed(myCheckedEvent);

}

function playGlass(){
	
		glass.play()
	
}


//}//playGlass
