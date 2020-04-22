var renderbutton = document.getElementById('render');
var transitionbutton = document.getElementById('transition');

var svg;
var x,y;
var width;
var iter = 0;

var render = function(e){
  d3.select("body").selectAll("table").remove();
  d3.select("body").selectAll("p").remove();
  var numstudents = []
  var i;
  for(i=0; i < data[iter].length; i++){
    numstudents.push(data[iter][i]);
  };
  console.log(numstudents)
  var school = []
  school.push(names[iter])
  console.log(school)
  d3.select("body").append("p").text(school[0])
  var container = d3.select("body")
    .append("table")
    .selectAll("th")
      .data(["Number of test takers", "Critical Reading Mean", "Mathematics Mean","Writing Mean"]).enter()
      .append("th")
        .text(function(d) {return d})
  var bruh = d3.select("table")
    .selectAll("tr")
      .data(" ").enter()
      .append("tr")
        .text(function(d) {return d})
    .selectAll("td")
      .data(numstudents).enter()
      .append("td")
        .text(function(d) {return d})
};

var transition = function(e){
  if(iter + 1 == 3){
    iter = 0;
  }
  else iter++;
  console.log(iter)
  return render();
};




renderbutton.addEventListener('click', render);
transitionbutton.addEventListener('click', transition);
