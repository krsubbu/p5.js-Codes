var ball;

function setup() {
  createCanvas(600, 480);
  ball = new Ball();
}

function draw() {
  background(255, 0, 0);
  ball.move();
  ball.display();
	ball.bounce();

}

//class defining ball
class Ball {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.xspeed = 2;
    this.yspeed = 4;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0){
			this.xspeed *= -1;
		}
		if(this.y > height || this.y < 0){
			this.yspeed *= -1;
		}
  }

  display() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, 32);
  }
}
