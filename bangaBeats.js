//Banga Beats

let glass;
let light;
let table;
let cut;
let click;

// let modem;

// let amplitude;
// let level;

let startBool = false;
let homeBool = true;

let checkboxTable

let glassplayButton
let tableplayButton
let clickplayButton

function preload()
{
	airStrike = loadFont('airstrike.ttf')

	glass = loadSound('glass.m4a')
	table = loadSound('table.m4a')
	click = loadSound('click.m4a')
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

	glassplayButton = createButton('glass_1');
	glassplayButton.position(550,200)
	glassplayButton.style('font-size', '20px');
  	glassplayButton.style('background-color', color(200,255,255));
 	glassplayButton.mousePressed(playGlass);

 	glassplayButton.hide()

	tableplayButton = createButton('table_2');
	tableplayButton.position(650,200)
	tableplayButton.style('font-size', '20px');
  	tableplayButton.style('background-color', color(200,255,255));
 	tableplayButton.mousePressed(playTable);
 	tableplayButton.hide()

	clickplayButton = createButton('click_3');
	clickplayButton.position(750,200)
	clickplayButton.style('font-size', '20px');
  	clickplayButton.style('background-color', color(200,255,255));
  	clickplayButton.mousePressed(playClick);
  	clickplayButton.hide()

  	checkboxTable = createCheckbox('Loop', false);
  	checkboxTable.position(560,245)
  	checkboxTable.changed(playTableLoop)
  	checkboxTable.hide()
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
	textFont(airStrike);
	textSize(40);
	text("Welcome to Banga Beats", 500, 50)
	textSize(20)
	text("press mouse pad to continue", 600,100)
}

function start()
{
	background(50)

	clickplayButton.show()
	tableplayButton.show()
	glassplayButton.show()
	checkboxTable.show()

	// playButton = createButton('cut__4');
	// playButton.position(550,300)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
 	// playButton.mousePressed(playGlass);

	// playButton = createButton('sound 5');
	// playButton.position(750,300)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
 	// playButton.mousePressed(playGlass);

	// playButton = createButton('sound 6');
	// playButton.position(650,300)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
 	// playButton.mousePressed(playGlass);

	// playButton = createButton('sound 7');
	// playButton.position(550,400)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
 	// playButton.mousePressed(playGlass);

	// playButton = createButton('sound 8');
	// playButton.position(750,400)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
 	// playButton.mousePressed(playGlass);

	// playButton = createButton('sound 9');
	// playButton.position(650,400)
	// playButton.style('font-size', '20px');
  	// playButton.style('background-color', color(200,255,255));
 	// playButton.mousePressed(playGlass);



  	
 	//checkboxTable.changed(playTable);

}

function playGlass()
{
	glass.play()
}

function playTable()
{
	table.play()

	
}
function playTableLoop()
{


	if(checkboxTable.checked()){
		table.loop()
	}else{
		table.stop()
	}
}

function playClick()
{
	click.play()
}
// function playGlass()
// {
// 		glass.play()
// }
// function playGlass()
// {
// 		glass.play()
// }
// function playGlass()
// {
// 		glass.play()
// }
// function playGlass()
// {
// 		glass.play()
// }
// function playGlass()
// {
// 		glass.play()
// }
// function playGlass()
// {
// 		glass.play()
// }

function keyPressed()
{
	if(key == '1')
	{
		glass.play()
	}
	if(key == '2')
	{
		table.play()
	}
	if(key == '3')
	{
		click.play()
	}
}

