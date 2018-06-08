var snapshots = [];
var resolution = 1 / 5;
var go = false;
var counter = 0;

function setup() {
  createCanvas(320, 240);
  background(50);
  video = createCapture(VIDEO, ready);
  video.size(320, 240);
	video.hide();
}

function ready() {
  go = true;
}

function draw() {
  if (go) {
    snapshots[counter] = video.get();
		counter++;
		if(counter == 239){
			counter = 0;
		}
  }
  var w = 320/15;
  var h = 240/15;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[(i+frameCount)%snapshots.length], x, y, w, h);
    x = x + w;
    if (x > 320) {
      x = 0;
      y = y + h;
    }
  }
}
