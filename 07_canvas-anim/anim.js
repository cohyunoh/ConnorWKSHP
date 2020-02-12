var radius = 0;
var go = true;
var request;
var resize = function(){
  var c = document.getElementById("screen");
  var ctx = c.getContext("2d");
  ctx.clearRect(0,0,c.width,c.height);
  ctx.fillStyle = "#ff0000";
  ctx.beginPath();
  ctx.arc(c.offsetX + 300, c.offsetY + 300, radius, 0, Math.PI * 2);
  ctx.fill();
  if (radius < 300){
    request = window.requestAnimationFrame(resize);
    radius += 0.1;
  }else{
    request = window.requestAnimationFrame(resize);
    radius -= 0.1;
  }
}


if(go){
  request = window.requestAnimationFrame(resize);
}else{
  window.cancelAnimationFrame(request);
}
