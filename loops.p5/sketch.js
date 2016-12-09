function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  strokeWeight(0);
  stroke(855);

  // nested loop:
  y = 50;
  for (var x = 20; x < 900; x = x + 50) {
    for (var y = 25; y < 900; y = y + 50) {
      fill(random(255),0, random(255));
      ellipse(x, y, mouseY-y, mouseX-x);
    }

  }
}
