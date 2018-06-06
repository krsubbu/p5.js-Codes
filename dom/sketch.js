var canvas;
var h1;
var bgcolor;

var x, y;
var button;

function setup() {
  canvas = createCanvas(600, 480);
  canvas.position(200, 200);
  bgcolor = color(0);
	slider = createSlider(0,100,40);
  button = createButton("help me!!!");
  button.mousePressed(colorChange);

}

function mousePressed() {
  createP("my fav number is " + random(30));
}

function colorChange() {
  bgcolor = color(255, 0, 0);
}

function draw() {
  background(bgcolor);
  fill(255);
  rect(50, 50, 50, 50);
	ellipse(30,30,slider.value());
}
