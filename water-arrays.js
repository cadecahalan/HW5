var dropX = [];
var dropY = [];
var speed = [];

function setup() {
  createCanvas(500, 500);
  colorMode(HSB)
  
  for (i = 0; i < 10; i = i + 1) {
    dropY[i] = random(220, height);
    speed[i] = random(2, 5);
    dropX[i] = 230;
  }
}
  
function draw() {
  background(0);
  noStroke();

  rect(0, 200, 230, 20);
  
  for (i = 0; i < 10; i = i + 1) {
     ellipse(dropX[i], dropY[i], 10);
     
     dropY[i] = dropY[i] + speed[i];
     
    if (speed[i] < 3){
      dropX[i] = dropX[i] + 0.5;
     }
    
    if (speed[i] > 4){
      dropX[i] = dropX[i] + 3;
     }
    
     if (dropY[i] > height) {
       dropY[i] = 220;
       dropX[i] = 230;
     }
    
  }
}
