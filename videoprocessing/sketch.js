var snapshots = [];
var resolution = 1 / 5;
var go = false;
var counter = 0;
var widthW;
var heightH;

function setup() {
  widthW = windowWidth;
  heightH = windowHeight;
  createCanvas(widthW, heightH);
  background(50);
  video = createCapture(VIDEO, ready);
  video.size(widthW, heightH);
	video.hide();
}

function ready() {
  go = true;
}

function draw() {
  console.log(widthW,heightH);
  if (go) {
    snapshots[counter] = video.get();
		counter++;
		if(counter == 239){
			counter = 0;
		}
  }
  var w = widthW/15;
  var h = heightH/15;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[(i+frameCount)%snapshots.length], x, y, w, h);
    x = x + w;
    if (x > widthW) {
      x = 0;
      y = y + h;
    }
  }
}
