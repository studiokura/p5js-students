var i = 200;
var j = 200;
var m = 1;
var k = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(90, 250, 120);
  text(k, 10, 30);
  if (i > 180 && i < 220) {
    fill(240, 100, 0);
  } else {
    fill(0, 180, 120);
  }
  if (i > 400) {
    m = m + 1;
    m = -m;
  }
  if (i < 0) {
    m = -m;
  }
  i = i + m;
  ellipse(i, j, 50, 50);
}

function mousePressed() {
  if (i > 180 && i < 220) {
    k = k + 1;
  } else {
    text("GAME OVER", 200, 160);
    noLoop();
  }
}