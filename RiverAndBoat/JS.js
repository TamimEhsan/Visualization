document.getElementById("boatAngleSpan").innerHTML = document.getElementById("boatAngle").value;
document.getElementById("boatAngle").oninput = function(){
	document.getElementById("boatAngleSpan").innerHTML = this.value;
}

document.getElementById("boatSpeedSpan").innerHTML = document.getElementById("boatSpeed").value;
document.getElementById("boatSpeed").oninput = function(){
	document.getElementById("boatSpeedSpan").innerHTML = this.value;
}

document.getElementById("boatPositionSpan").innerHTML = document.getElementById("boatPosition").value;
document.getElementById("boatPosition").oninput = function(){
	document.getElementById("boatPositionSpan").innerHTML = this.value;
}

document.getElementById("riverSpeedSpan").innerHTML = document.getElementById("riverSpeed").value;
document.getElementById("riverSpeed").oninput = function(){
	document.getElementById("riverSpeedSpan").innerHTML = this.value;
}

document.getElementById("FPSspan").innerHTML = Math.round(document.getElementById("FPS").value*10)/100;
document.getElementById("FPS").oninput = function(){
	document.getElementById("FPSspan").innerHTML = Math.round(this.value*10)/100;
}