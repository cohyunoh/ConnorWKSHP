var svg = document.getElementById("vimage");
var cl = document.getElementById("clear");
var mv = document.getElementById("move");
var xt = document.getElementById("extra");

var requestID = 0;
var radius = 10;

var draw = function(e) {
  if (e.target == svg) {
    //console.log(e.target)
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX;
    var y = e.offsetY;
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", radius);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    c.setAttribute("xchange", 1);
    c.setAttribute("ychange", 1);
    c.addEventListener('click', circle);
    svg.appendChild(c);
  }
}

var circle = function(e){
  if (e.target.getAttribute("fill") == "blue"){
    e.target.setAttribute("fill", "violet");
  }
  else if (e.target.getAttribute("fill") == "violet") {
    var x = Math.floor(Math.random() * 500);
    var y = Math.floor(Math.random() * 500);
    e.target.setAttribute("cx", x);
    e.target.setAttribute("cy", y);
    e.target.setAttribute("fill", "blue");
  }
}

var move = function() {
  var circles = document.getElementsByTagName("circle");
  //console.log(circles);
  for (var i = 0; i < circles.length; i++) {
    var cir = circles[i];
    //console.log(typeof cir.getAttribute("cx"));
    var x = parseInt(cir.getAttribute("cx"));
    var y = parseInt(cir.getAttribute("cy"));
    var xchange = parseInt(cir.getAttribute("xchange"));
    var ychange = parseInt(cir.getAttribute("ychange"));
    console.log(typeof svg.getAttribute("width"));
    if (x > parseInt(svg.getAttribute("width")) - radius) {
      cir.setAttribute("xchange", -1);
    } else if (x < radius) {
      cir.setAttribute("xchange", 1);
    }
    if (y > parseInt(svg.getAttribute("height")) - radius) {
      cir.setAttribute("ychange", -1);
    } else if (y < radius) {
      cir.setAttribute("ychange", 1);
    }
    x += xchange;
    y += ychange;
    cir.setAttribute("cx", x);
    cir.setAttribute("cy", y);
  }
  if (requestID != 0) {
    requestID = window.requestAnimationFrame(move);
  }
}

var clear = function(e){
  while (svg.lastChild){
    svg.removeChild(svg.lastChild);
  }
}

cl.addEventListener('click', clear);
svg.addEventListener('click', draw);
mv.addEventListener('click', function(e) {
  window.cancelAnimationFrame(requestID)
  requestID = window.requestAnimationFrame(move);
})
