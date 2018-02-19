var x = [];
var y = [];
var d = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (i = 0; i < 50; i = i + 1){
    x[i] = random(x, width);
    y[i] = random(y, height);
    d[i] = random(2, 50);
  }  
}
  
function draw() {
  background(255);
  noStroke();

  for (i = 0; i < 50; i = i + 1){
    fill(120, 60, 100);
    ellipse(x[i], y[i], d[i]);
  }  
}  
