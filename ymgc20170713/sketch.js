var x = 100,
  y = 50,
  houkouX = 1,
  houkouY = 1;
var iro = 0,
  iro2 = 1,
  iro3 = 1;
var ookisa1 = 50,
  ookisa2 = 10,
  nobiruka = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  x = x + 4 * houkouX;
  if (x > 600 || x < 0) {
    houkouX = houkouX * -1;
  }

  y = y + 3 * houkouY;
  if (y > 600 || y < 0) {
    houkouY = houkouY * -1;
  }


  iro = iro + 1;

  if (iro > 255) {
    iro = 100;
  }

  iro2 = iro2 + 2;

  if (iro2 > 255) {
    iro2 = 100;
  }

  iro3 = iro3 + 3;

  if (iro3 > 255) {
    iro3 = 100;
  }

  ookisa1 = ookisa1 + nobiruka;
  ookisa2 = ookisa1;

  if (ookisa1 > 100 || ookisa1 < 50) {
    nobiruka = nobiruka * -1
  }


  background(iro, iro2, iro3);
  stroke(255);
  fill(255 - iro, 255 - iro2, 255 - iro3);
  ellipse(x, y, ookisa1, ookisa2);
}