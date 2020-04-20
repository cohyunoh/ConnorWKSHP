var renderbutton = document.getElementById('render');
var transitionbutton = document.getElementById('transition');

var svg;
var x,y;
var width;

var render = function(e){
  var numstudents = []
  var i;
  for(i=0; i < data.length; i++){
    numstudents.push(data[i][0]);
  };
};

var transition = function(e){
  var stats = []
  var i;
  for(i=0; i < data.length; i++){
    list = [data[i][1], data[i][2], data[i][3]];
    stats.push(list);
  };
};




render.addEventListener('click', render);
transition.addEventListener('click', transition);
