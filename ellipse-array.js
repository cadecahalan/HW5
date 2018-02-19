var x = [];
var y = [];
var d = [];
var sat = [];
var bright = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  
  for (i = 0; i < 50; i = i + 1){
    x[i] = random(0, width);
    y[i] = random(0, height);
    d[i] = random(50,100);
    sat[i] = random (30,80);
    bright[i] = 100;
  }  
}
  
function draw() {
  background(255);
  noStroke();

  for (i = 0; i < 50; i = i + 1){
    fill(50, sat[i], bright[i]);
    ellipse(x[i], y[i], d[i]);
  
    if (random() < 0.01) {
   		d[i] = random(10, 40);
    	bright[i] = random(85,95)
    }
  
    if (random() < 0.02) {
    	d[i] = random(110, 130);
    	bright[i] = 100;
    }  
  }
}  
