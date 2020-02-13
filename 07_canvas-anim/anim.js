var radius = 0;
var go = false;
var request;
var change = 1;
var c = document.getElementById("screen");
var ctx = c.getContext("2d");

var resize = function(e){
  if (radius <= 2){
    change = 1;
  }else if(radius >= 300){
    change = -1;
  }
  radius += change;
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.arc(300, 300, radius,0, Math.PI * 2);
  ctx.fill();
  request = window.requestAnimationFrame(resize);
};


var animate = function(e){
  if(!go){
    window.requestAnimationFrame(resize);
    go = true;
  }
};

var animatebutton = document.getElementById("go");
animatebutton.addEventListener('click', animate);

var stop = function(e){
     if (go){
         go = false;
         window.cancelAnimationFrame(request);
     }
 };

 var stopButton = document.getElementById("stop");
 stopButton.addEventListener("click", stop);
