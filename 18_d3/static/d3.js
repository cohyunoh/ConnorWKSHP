var render = document.getElementById('render');
var transition = document.getElementById('transition');

var render = function(e){
  var numstudents = []
  var i;
  for(i=0; i < data.length; i++){
    numstudents.push(data[i][0];
  };
  visualize(numstudents);
};

var transition = function(e){
  var stats = [][][]
  var i;
  for(i=0; i < data.length; i++){
    stats[i][0] = data[i][1];
    stats[i][1] = data[i][2];
    stats[i][2] = data[i][3];
  };
  d3.select("body").transition(visualize(stats));
};
