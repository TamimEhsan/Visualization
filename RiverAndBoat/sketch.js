

function setup(){
	createCanvas(1200, 360);
	boat = new Particle();
	river = new River();
}

function draw(){
	background(0);
	boat.update();
	boat.edges();
	boat.display();
	river.update();
	river.display();
}

function keyPressed(){
	if(key == ' '){
		boat.resetpar();
		river.resetriv();
		setFrameRate(60*document.getElementById("FPS").value*0.1);
		var slider = document.getElementById("boatAngle");
		var velx = Math.cos((slider.value)*Math.PI/180);
		var vely = Math.sin((slider.value)*Math.PI/180);
		var slider2 = document.getElementById("boatSpeed");
		var veloc = slider2.value*0.1;
		var start = createVector(veloc*velx+river.speed*1,-veloc*vely);
		boat.move(start);
	}
}