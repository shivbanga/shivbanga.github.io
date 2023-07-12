//Banga Beats

let glass;
let ring;
let table;
let bark;
let click;
let honk;
let coke;
let chime;
let hihat;

let lightning;

// let modem;

// let amplitude;
// let level;

let startBool = false;
let homeBool = true;

let checkboxTable;

let glassplayButton;
let tableplayButton;
let clickplayButton;

function preload()
{
	airStrike = loadFont('airstrike.ttf')

	lightning = loadImage('lightning.png');

	glass = loadSound('glass.m4a')
	table = loadSound('table.m4a')
	click = loadSound('click.m4a')
	bark = loadSound('bark.m4a')
	ring = loadSound('ring.m4a')
	honk = loadSound('honk.mp3')
	coke = loadSound('coke.mp3')
	chime = loadSound('chime.mp3')
	hihat = loadSound('hihat.mp3')

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

	glassPlayButton = createButton('Glass_1_');
	glassPlayButton.position(550,200)
	glassPlayButton.style('font-size', '20px');
  	glassPlayButton.style('background-color', color(200,255,255));
 	glassPlayButton.mousePressed(playGlass);
 	glassPlayButton.hide()

	tablePlayButton = createButton('Knock 2');
	tablePlayButton.position(650,200)
	tablePlayButton.style('font-size', '20px');
  	tablePlayButton.style('background-color', color(200,255,255));
 	tablePlayButton.mousePressed(playTable);
 	tablePlayButton.hide()

	clickPlayButton = createButton('Click_3_');
	clickPlayButton.position(750,200)
	clickPlayButton.style('font-size', '20px');
  	clickPlayButton.style('background-color', color(200,255,255));
  	clickPlayButton.mousePressed(playClick);
  	clickPlayButton.hide()

	barkPlayButton = createButton('Bark_4_');
	barkPlayButton.position(550,300)
	barkPlayButton.style('font-size', '20px');
  	barkPlayButton.style('background-color', color(200,255,255));
 	barkPlayButton.mousePressed(playBark);
 	barkPlayButton.hide()

 	honkPlayButton = createButton('Honk_5');
	honkPlayButton.position(650,300)
	honkPlayButton.style('font-size', '20px');
  	honkPlayButton.style('background-color', color(200,255,255));
 	honkPlayButton.mousePressed(playHonk);
 	honkPlayButton.hide()

	ringPlayButton = createButton('Ring_6_');
	ringPlayButton.position(750,300)
	ringPlayButton.style('font-size', '20px');
  	ringPlayButton.style('background-color', color(200,255,255));
 	ringPlayButton.mousePressed(playRing);
 	ringPlayButton.hide()

	cokePlayButton = createButton('Coke_7_');
	cokePlayButton.position(550,400)
	cokePlayButton.style('font-size', '20px');
  	cokePlayButton.style('background-color', color(200,255,255));
 	cokePlayButton.mousePressed(playCoke);
 	cokePlayButton.hide()

	chimePlayButton = createButton('Chime 8');
	chimePlayButton.position(650,400)
	chimePlayButton.style('font-size', '20px');
  	chimePlayButton.style('background-color', color(200,255,255));
 	chimePlayButton.mousePressed(playChime);
 	chimePlayButton.hide()

	hihatPlayButton = createButton('Hi-Hat 9');
	hihatPlayButton.position(750,400)
	hihatPlayButton.style('font-size', '20px');
  	hihatPlayButton.style('background-color', color(200,255,255));
 	hihatPlayButton.mousePressed(playHihat);
 	hihatPlayButton.hide()

  	// checkboxTable = createCheckbox('Loop', false);
  	// checkboxTable.position(660,245)
  	// checkboxTable.changed(playTableLoop)
  	// checkboxTable.hide()

  	// checkboxClick = createCheckbox('Loop', false);
  	// checkboxClick.position(760,245)
  	// checkboxClick.changed(playClickLoop)
  	// checkboxClick.hide()



	
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
	text("Welcome to Banga Beats", 435, 300)
	textSize(20)
	text("press mouse pad to continue", 550,350)

	image(lightning, 30, 20, 400, 500);	
	image(lightning, 975, 250, 400, 500);	

}//home screen

function start()
{
	background(50)

	clickPlayButton.show()
	tablePlayButton.show()
	glassPlayButton.show()
	barkPlayButton.show()
	honkPlayButton.show()
	ringPlayButton.show()
	cokePlayButton.show()
	chimePlayButton.show()
	hihatPlayButton.show()
	checkboxTable.show()
	checkboxClick.show()


}

function playGlass()
{
	glass.play()
}

function playTable()
{
	table.play()
	
}
// function playTableLoop()
// {

// 	if(checkboxTable.checked()){
// 		table.loop()
// 	}else{
// 		table.stop()
// 	}
// }

function playClick()
{
		click.play()
}

// function playClickLoop()
// {
// 	click.play()

// 	if(checkboxClick.checked()){
// 		click.loop()
// 	}else{
// 		click.stop()
// 	}
// }

function playBark()
{
		bark.play()
}
function playHonk()
{
		honk.play()
}
function playRing()
{
		ring.play()
}
function playCoke()
{
		coke.play()
}
function playChime()
{
		chime.play()
}
function playHihat()
{
		hihat.play()
}

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

	if(key == '4')
	{
		bark.play()
	}

	if(key == '5')
	{
		honk.play()
	}

	if(key == '6')
	{
		ring.play()
	}

	if(key == '7')
	{
		coke.play()
	}

	if(key == '8')
	{
		chime.play()
	}

	if(key == '9')
	{
		hihat.play()
	}

}

