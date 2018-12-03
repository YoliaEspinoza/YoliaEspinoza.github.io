var barWidth = 90;
var lastBar = -44;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, height, height, height);  
  noStroke();
  background(9);
}

function draw() {
  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barY = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barY, 9, barWidth, height);
    lastBar = whichBar;
  }
}
