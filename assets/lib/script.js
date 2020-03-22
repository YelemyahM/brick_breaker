/* Variables */
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-10;
var dx = 2;
var dy = -2;
var ballRadius = 10;

/* The ball */
function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
  ctx.closePath();
}

/* Ball mouvements */
function ballMouvment() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  // Bounce on vertical walls
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  // Bounce on horizontal walls
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

	x += dx;
	y += dy;
}

setInterval(ballMouvment, 20);
