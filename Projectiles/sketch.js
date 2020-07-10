// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;
var person2;
var slider3;
var slider4;
var slider5;
var slider6;
//var obstacle;
var counter = 0;

function setup() {
  createCanvas(1200, 360);
  var slider = document.getElementById("myRange");
  var slider2 = document.getElementById("myRange2");
  slider3 = document.getElementById("myHeight1");
  person = new Person(slider3.value);
  slider4 = document.getElementById("myRange3");
  slider5 = document.getElementById("myRange4");
  slider6 = document.getElementById("myHeight2");
  person2 = new Person(slider6.value);
  
}

function keyPressed() {
  if (key == ' ') {
	person.state = false;
	person2.state = false;
	setFrameRate(60*document.getElementById("FPS").value*0.1);
	var velx = Math.sin((90-slider.value)*Math.PI/180);
	var vely = Math.cos((90-slider.value)*Math.PI/180);
	var veloc = slider2.value*0.1;
	//console.log(velx);
    var jump = createVector(veloc*velx, -veloc*vely);
    person.applyForce(jump);
	
	velx = Math.sin((90-slider4.value)*Math.PI/180);
	vely = Math.cos((90-slider4.value)*Math.PI/180);
	veloc = slider5.value*0.1;
	//console.log(velx);
    jump = createVector(veloc*velx, -veloc*vely);
    person2.applyForce(jump)
  }
}

function draw() {
  background(0);
  counter++;
  if(counter == 10){
	  
	  console.log(getFrameRate());
  }
  
  //translate(-person.pos.x + 50, 0);

  var gravity = createVector(0, 0.1);
  person.applyForce(gravity);
  person.update();
  person.edges();
  fill(255,0,0);
  person.display();
  
  
  person2.applyForce(gravity);
  person2.update();
  person2.edges();
  fill(0,0,255);
  person2.display();
  

  //fill(255, 0, 100);
  //rect(400, height - 50, 50, 50);
}
function resetpos(){
	person.state = true;
	person2.state = true;
	person.resetper(slider3.value);
	person2.resetper(slider6.value);
}
