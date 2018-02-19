var dropX = 230
var dropY = [];
var speed = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB)
  
  for (var i = 0; i < 10; i = i + 1) {
    dropY[i] = random(220, height);
    speed[i] = random(1, 5);
  }
}
  
function draw() {
  background(0);
  noStroke();

  rect(0, 200, 230, 20);
  
  for (var i = 0; i < 10; i = i + 1) {
     ellipse(230, dropY[i], 10);
     
     dropY[i] = dropY[i] + speed[i];
     
     if (dropY[i] > height) {
       dropY[i] = 220;
     }
  }
}
