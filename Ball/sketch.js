var x;
var y;
var xspeed;
var yspeed;
var radius;

function setup() {
  createCanvas(600, 468);
  x = 0;
  y = height / 2;
  xspeed = 2;
  yspeed = 4;
  radius = 32;
}

function draw() {
  background(50);
  move();
  update();
  display();
}

function display() {
  fill(random(x), random(x), random(x));
  noStroke();
  ellipse(x, y, radius);
}

function move() {
  x += xspeed;
  y += yspeed;
}

function update() {
  if (x > width || x < 0) {
    xspeed *= -1;
  }

  if (y > height || y < 0) {
    yspeed *= -1;
  }
}
