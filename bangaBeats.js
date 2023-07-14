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

let x = 0;
let w;
let h;

let lightning;

let glasspic;
let doorpic;
let clickPic;
let barkPic; 
let carPic;
let cokePic;
let ringPic;
let chimePic;
let hihatPic;

let size1;

let startBool = false;
let homeBool = true;

let glassPicBool = false;
let ringPicBool = false;
let tablePicBool = false;
let barkPicBool = false;
let clickPicBool = false;
let carPicBool = false;
let cokePicBool = false;
let chimePicBool = false;
let hihatPicBool = false;

let checkboxTable;
let checkboxRing;
let checkboxBark;
let checkboxHonk;
let checkboxClick;
let checkboxHihat;
let checkboxChime;
let checkboxCoke;
let checkboxGlass;

let glassplayButton;
let tableplayButton;
let clickplayButton;

function preload()
{
	airStrike = loadFont('airstrike.ttf')

	lightning = loadImage('lightning.png')

	glasspic = loadImage('glasspic.png')
	doorpic = loadImage('doorpic.png')
	clickPic = loadImage('clickPic.png')
	barkPic = loadImage('barkPic.png')
	carPic = loadImage('carPic.png')
	chimePic = loadImage('chimePic.png')
	cokePic = loadImage('cokePic.png')
	ringPic = loadImage('ringPic.png')
	hihatPic = loadImage('hihatPic.png')

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


//buttons

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

//checkboxes

  	checkboxTable = createCheckbox('Loop', false);
  	checkboxTable.position(660,245)
  	checkboxTable.changed(playTableLoop)
  	checkboxTable.hide()

  	checkboxClick = createCheckbox('Loop', false);
  	checkboxClick.position(760,245)
  	checkboxClick.changed(playClickLoop)
  	checkboxClick.hide()

  	checkboxGlass = createCheckbox('Loop', false);
  	checkboxGlass.position(560,245)
  	checkboxGlass.changed(playGlassLoop)
  	checkboxGlass.hide()

  	checkboxBark = createCheckbox('Loop', false);
  	checkboxBark.position(560,345)
  	checkboxBark.changed(playBarkLoop)
  	checkboxBark.hide()

  	checkboxCoke = createCheckbox('Loop', false);
  	checkboxCoke.position(560,445)
  	checkboxCoke.changed(playCokeLoop)
  	checkboxCoke.hide()

  	checkboxRing = createCheckbox('Loop', false);
  	checkboxRing.position(760,345)
  	checkboxRing.changed(playRingLoop)
  	checkboxRing.hide()

  	checkboxHihat = createCheckbox('Loop', false);
  	checkboxHihat.position(760,445)
  	checkboxHihat.changed(playHihatLoop)
  	checkboxHihat.hide()
	
	checkboxChime = createCheckbox('Loop', false);
  	checkboxChime.position(660,445)
  	checkboxChime.changed(playChimeLoop)
  	checkboxChime.hide()

	checkboxHonk = createCheckbox('Loop', false);
  	checkboxHonk.position(660,345)
  	checkboxHonk.changed(playHonkLoop)
  	checkboxHonk.hide()

  	amplitude = new p5.Amplitude()


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

	if(glassPicBool == true)
	{
		image(glasspic, 15, 250, 200, 200)
	}

	if(tablePicBool == true)
	{
		image(doorpic, 15, 250, 200, 300)
	}

	if(barkPicBool == true)
	{
		image(barkPic, 15, 250, 250, 200)
	}

	if(clickPicBool == true)
	{
		image(clickPic, 15, 250, 350, 200)
	}

	if(ringPicBool == true)
	{
		image(ringPic, 15, 250, 200, 200)
	}

	if(cokePicBool == true)
	{
		image(cokePic, 15, 250, 200, 350)
	}

	if(carPicBool == true)
	{
		image(carPic, 15, 250, 350, 200)
	}

	if(chimePicBool == true)
	{
		image(chimePic, 15, 250, 200, 350)
	}

	if(hihatPicBool == true)
	{
		image(hihatPic, 15, 250, 350, 350)
	}

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
	background(75)

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
	checkboxGlass.show()
	checkboxCoke.show()
	checkboxHihat.show()
	checkboxRing.show()
	checkboxBark.show()
	checkboxChime.show()
	checkboxHonk.show()


	//createCanvas(800,240)
	// capture = createCapture(VIDEO);
	// capture.size(320,240);
	// capture.position(1145, 0)

	level = amplitude.getLevel()
	let size = map(level, 0, .6, 10, 900)
	ellipse(400, 320, size, size)

	level1 = amplitude.getLevel()
	let size1 = map(level, 0, .6, 10, 900)
	ellipse(975, 320, size1, size1)



}

function playGlass()
{
	glass.stop()
	glass.play()
}

function playGlassLoop()
{

	if(checkboxGlass.checked()){
			glass.loop()
			glassPicBool = true;
	}

	if(!checkboxGlass.checked()){
			glass.stop()
			glass.setLoop(false)
			glassPicBool = false;
	}
	
}

function playTable()
{	
		table.stop();
		table.play();
}
function playTableLoop()
{

	if(checkboxTable.checked()){
			table.loop()
			tablePicBool = true;
	}

	if(!checkboxTable.checked()){
			table.stop()
			table.setLoop(false)
			tablePicBool = false;
	}
	
}

function playClick()
{
		click.stop();
		click.play();
}

function playClickLoop()
{

	if(checkboxClick.checked()){
			click.loop()
			clickPicBool = true;
	}

	if(!checkboxClick.checked()){
			click.stop()
			click.setLoop(false)
			clickPicBool = false;
	}
	
}

function playBark()
{
	bark.stop();
	bark.play();
}
function playBarkLoop()
{

	if(checkboxBark.checked()){
			bark.loop()
			barkPicBool = true;
	}

	if(!checkboxBark.checked()){
			bark.stop()
			bark.setLoop(false)
			barkPicBool = false;
	}
	
}

function playHonk()
{
	honk.stop();
	honk.play();
}
function playHonkLoop()
{

	if(checkboxHonk.checked()){
			honk.loop()
			carPicBool = true;
	}

	if(!checkboxHonk.checked()){
			honk.stop()
			honk.setLoop(false)
			carPicBool = false;
	}
	
}
function playRing()
{
	ring.stop()
	ring.play()
}
function playRingLoop()
{

	if(checkboxRing.checked()){
			ring.loop()
			ringPicBool = true;
	}

	if(!checkboxRing.checked()){
			ring.stop()
			ring.setLoop(false)
			ringPicBool = false;

	}
	
}
function playCoke()
{
	coke.stop();
	coke.play()
}
function playCokeLoop()
{

	if(checkboxCoke.checked()){
			coke.loop()
			cokePicBool = true;
	}

	if(!checkboxCoke.checked()){
			coke.stop()
			coke.setLoop(false)
			cokePicBool = false;
	}
	
}
function playChime()
{
	chime.stop();
	chime.play()
}
function playChimeLoop()
{

	if(checkboxChime.checked()){
			chime.loop()
			chimePicBool = true;
	}

	if(!checkboxChime.checked()){
			chime.stop()
			chime.setLoop(false)
			chimePicBool = false;
	}
	
}
function playHihat()
{
	hihat.stop();
	hihat.play()
}
function playHihatLoop()
{

	if(checkboxHihat.checked()){
			hihat.loop()
			hihatPicBool = true;
	}

	if(!checkboxHihat.checked()){
			hihat.stop()
			hihat.setLoop(false)
			hihatPicBool = false;
	}
	
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