  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var circle = {centerX:250, centerY:250, radius:200,  angle:0}
  var raf;

  var ball = {
    x: 450,
    y: 280,
    dx: 2,
    dy: -2,
    speed: .07,
    radius: 40,
    draw: function() {
    context.fillStyle = '#000000';
    context.beginPath();
    context.arc(ball.x, ball.y, 25, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
    }
  };

function clear() {
  context.fillStyle = 'rgba(255, 0, 255, 0.01)';
  context.fillRect(0,0,canvas.width,canvas.height);
}

function drawScreen() {
  clear();
  ball.draw();
  ball.x = circle.centerX + Math.cos(circle.angle) * circle.radius;
  ball.y = circle.centerY + Math.sin(circle.angle) * circle.radius;
  circle.angle += ball.speed;
  ball.x += ball.dx;
  ball.y += ball.dy;
  raf = requestAnimationFrame(drawScreen);
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
  }

window.addEventListener('click', random_bg_color);

window.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(drawScreen);
});

window.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
