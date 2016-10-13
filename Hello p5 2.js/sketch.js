var bgColor = 'white'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  //background(bgColor)
  fill(bgColor);
  ellipse(550,450,mouseY,mouseY)
  if (mouseX < 1 * windowWidth / 5) {
    bgColor = '#6638F0';
  } else if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#B40C7A';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#78BBFF';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#78BBFF';
  } else {
    bgColor = '#E12874';
  }
}