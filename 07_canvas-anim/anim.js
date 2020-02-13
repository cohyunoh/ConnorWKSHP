var radius = 0;
var go = true;
var request;
var resize = function(e){
  if (radius <= 0){
    radius += 0.1;
  }else if(radius <= 300){
    radius -= 0.1;
  }
  var c = document.getElementById("screen");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.arc(c.offsetX + 300, c.offsetY + 300, radius, 0, Math.PI * 2);
  ctx.fill();
  request = window.requestAnimationFrame(resize);
};


var animate = function(e){
  if(!go){
    window.requestAnimationFrame(resize);
    go = true;

  }
};

var animatebutton = 
