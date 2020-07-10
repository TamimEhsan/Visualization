// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Particle() {
  
  this.pos = createVector(50, height-20);
  this.vel = createVector(0, 0);


  this.update = function() {
    this.pos.add(this.vel);
   
  }

  this.display = function() {
   fill(255);
    stroke(255);
   // rect(this.pos.x, this.pos.y - 50, 20, 50);
	ellipse(this.pos.x,this.pos.y-10,20,20);
	//console.log(this.pos.x);
  }
  
  this.edges = function() {
    if (this.pos.y < 10) {
      this.vel.y = 0;
	  this.vel.x = 0;
      this.pos.y = 10;
    }	
  }
  this.move = function(value){
	  this.vel = value;
  }
  this.resetpar = function(){
	var slider = document.getElementById("boatPosition");
	this.vel.x *= 0;
	this.vel.y *= 0;
	this.pos.x = 10*slider.value;
	this.pos.y = height-20;
  }
}