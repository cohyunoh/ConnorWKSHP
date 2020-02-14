//Connor Oh
//Softdev1 pd9
//K07 -- They lock us in the tower whenever we get caught
//2020-02-13

//Global Variables
var radius = 0; //radius of circle
var animateCircle = false; //tells when to play animation
var animateSaver = false; //tells when to play animation
var request;	//will store the id when played so we can stop the animation
var change = 1; //amount to change radius by
var c = document.getElementById("screen");
var ctx = c.getContext("2d");

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
  request = window.requestAnimationFrame(resize); //sets the request to a new request
};

var circle = function(e){

};

var animateCircle = function(e){
  if(!animateCircle){
    window.requestAnimationFrame(circle); //calls the function recursively
    animateCircle = true; //sets the boolean true
    animateSaver = false; //sets the boolean false
  }
};

var animateCirclebutton = document.getElementById("go");
animateCirclebutton.addEventListener('click', animateCircle);

var animateSaver = function(e){
  if(!animateSaver){
    window.requestAnimationFrame(bounce); //calls the function recursively
    animateCircle = false; //sets the boolean false
    animateSaver = true; //sets the boolean true
  }
};

var animateSaverbutton = document.getElementById("bounce");
animatebutton.addEventListener('click', animateSaver);

var stop = function(e){
     if (animateCircle || animateSaver){
         animateCircle = false;
         animateSaver = false;
         window.cancelAnimationFrame(request);
     }
 };

 var stopButton = document.getElementById("stop");
 stopButton.addEventListener("click", stop);
