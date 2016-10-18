var strokeColor = 'black';
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background('white');
} 

function draw() { 
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
		strokeWeight(10);
	}
}

function keyTyped() {
	if (key === 'b') {
    strokeColor = 'pink';
  } else if (key === 'p') {
    strokeColor = 'purple';
  } else if (key === 'e') {
		strokeColor = 'white';
	}
}