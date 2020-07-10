// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Person(H) {
  this.pos = createVector(50, height-H);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.base = createVector(50,height-H);
  this.state = true;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
	//this.acc.y*=0.01;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
   
    stroke(255);
   // rect(this.pos.x, this.pos.y - 50, 20, 50);
	ellipse(this.pos.x,this.pos.y-10,20,20);
  }
  
  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= 0;
	  this.vel.x *= 0;
      this.pos.y = height;
    }
	if (this.state == true) {
      this.vel.y *= 0;
	  this.vel.x *= 0;
      this.pos.y = this.base.y;
    }
	
  }
  
  this.resetper = function(H){
	this.vel.x *= 0;
	this.vel.y *= 0;
	this.pos.x = 50;
	this.pos.y = height-H;
	this.base.y = height-H;
	this.acc.x = 0;
	this.acc.y = 0; 
  }
}