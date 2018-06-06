var arr = [];

function setup() {
  createCanvas(600, 480);
  arr = ["hello", "mr", "subham", "kumar"];
}

function draw() {
  background(50);
  textSize(16);
	fill(255,5,0);
  for (var i = 0; i < arr.length; i++) {
    text(arr[i], width/2, 20*i+20);
  }
}
