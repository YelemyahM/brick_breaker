var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw mouvement's ball
function draw() {

}
setInterval(draw, 10);

// Ball
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
