
function River(){
	this.speed = 0;
	this.lines = width/20;
	this.start = 0;
	
	this.update = function(){
		this.start+=this.speed;
		if(this.start>=20 || this.start<=-20)this.start = 0;
	}
	
	this.display = function(){
		for(i = 0;i<width/20+5;i++){
			stroke(255);
			line(i*20+this.start,0,i*20+this.start,height);
		}
	}
	this.resetriv = function(){
		var slider = document.getElementById("riverSpeed");
		this.speed = 0.1*slider.value;
	}
}