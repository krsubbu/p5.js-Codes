var song;
var button;
var play = false;
var slider;
var amp;

function loaded() {
  console.log("loaded");
  song.play();
}

function stopmusic() {
  play = !play;
  if (play) {
    button.html("play");
    song.pause();
  } else {
    button.html("stop");
    song.play();
  }
}

function setup() {
  createCanvas(640, 480);
  song = loadSound("sounds/jazz.mp3", loaded);
  button = createButton("Stop");
  slider = createSlider(1, 10, 1);
  amp = new p5.Amplitude();
}

function draw() {
  var level = amp.getLevel();
  level = map(level, 0, 0.3, 10, 200);

  background(50);
  song.rate(slider.value());
  button.mousePressed(stopmusic);

  fill(0, 255, 255);
  noStroke();
  ellipseMode(CENTER);
  ellipse(320, 240,300, level);
}
