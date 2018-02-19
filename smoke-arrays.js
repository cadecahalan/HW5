var x = [];
var y = [];
var r = [];
var direction = [];
var size = [];

function setup() {
  createCanvas(400, 400);
  
  for (i = 0; i < 100; i = i + 1){
    x[i] = 210;
    y[i] = random (0,290);
    r[i] = 0;
    size[i] = 20;
    direction[i] = random (-5, 5);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);
  
  for (i = 0; i < 100; i = i + 1){
  
  // save graphics state
  push();
  // darker as it gets closer to 0
  fill(y[i]);
  // rotate r around (x,y)
  translate(x[i], y[i]);
  rotate(r[i]);
  // draw rectangle
  rect(-10, -10, size[i], size[i]);
  // reset rotation and translation
  pop();
  
  // up 3 pixels
  y[i] -= 3;
  x[i] = x[i] - direction[i];
  size[i] = size[i] + 0.5;
  
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r[i] += 0.5
  
  // if reach past the top a bunch
  if (y[i] < 0) {
    y[i] = 290;
    x[i] = 210;
    size[i] = 20;
  }
}
}
