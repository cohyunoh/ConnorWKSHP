//Connor Oh
//Softdev1 pd9
//K07 -- They lock us in the tower whenever we get caught
//2020-02-13

//Global Variables
var radius = 0; //radius of circle
var animateCirclepls = false; //tells when to play animation
var animateSaverpls = false; //tells when to play animation
var request;	//will store the id when played so we can stop the animation
var change = 1; //amount to change radius by
var c = document.getElementById("screen");
var ctx = c.getContext("2d");
var x = 300;
var y = 300;
var dx = 2;
var dy = 2;
var circle = function(e){
  if (radius <= 2){
    change = 1; //if the radius is too small, then start increasing radius
  }else if(radius >= 300){
    change = -1; //if too big then start decreasing
  }
  radius += change;
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.arc(300, 300, radius,0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  request = window.requestAnimationFrame(circle); //sets the request to a new request
};

var bounce = function(e){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.arc(x, y, 5,0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
  request = window.requestAnimationFrame(bounce); //sets the request to a new request
  if(x + dx > canvas.width-5 || x + dx < 5) {
    dx = -dx;
  }
  if(y + dy > canvas.height-5 || y + dy < 5) {
      dy = -dy;
  }
  x += dx;
  y += dy;
};


var animateCircle = function(e){
  if(!animateCirclepls){

    window.requestAnimationFrame(circle); //calls the function recursively
    animateCirclepls = true; //sets the boolean true
    animateSaverpls = false; //sets the boolean false
  }
};

var animateCirclebutton = document.getElementById("go");
animateCirclebutton.addEventListener('click', animateCircle);


var animateSaver = function(e){
  if(!animateSaverpls){
    window.requestAnimationFrame(bounce); //calls the function recursively
    animateCirclepls = false; //sets the boolean false
    animateSaverpls = true; //sets the boolean true
  }
};

var animateSaverbutton = document.getElementById("bounce");
animateSaverbutton.addEventListener('click', animateSaver);

var stop = function(e){
     if (animateCirclepls || animateSaverpls){
         animateCirclepls = false;
         animateSaverpls = false;
         window.cancelAnimationFrame(request);
     }
 };

 var stopButton = document.getElementById("stop");
 stopButton.addEventListener("click", stop);
