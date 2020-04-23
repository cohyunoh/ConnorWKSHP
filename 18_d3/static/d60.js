var renderbutton = document.getElementById('render');
var transitionbutton = document.getElementById('transition');

var iter = 0;

var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;


var xScale = d3.scaleBand().range ([0, width]).padding(0.4),
    yScale = d3.scaleLinear().range ([height, 0]);
  //scaleBand() is used to construct a band scale.

var g = svg.append("g")
           .attr("transform", "translate(" + 100 + "," + 100 + ")");

var titles = ["Number of Test Takers","Critical Reading Mean","Mathematics Mean","Writing Mean"]

var render = function(e){
  var stats = []
  var i;
  for(i=0; i < data.length; i++){
    stats.push(data[i][iter]);
  };
  console.log(stats);
  console.log(names);
  xScale.domain(names);
  yScale.domain([0, d3.max(stats)]);

  g.append("g")
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(xScale).tickFormat(function(d){
     return d;
   }).ticks(3))

  g.append("g")
   .call(d3.axisLeft(yScale).tickFormat(function(d){
       return d;
   }).ticks(10))
   .append("text")
   .attr("class", "yaxis")
   .attr("y", 6)
   .attr("dy", "0.71em")
   .attr("text-anchor", "end")
   .attr("stroke", "black")
   .text(titles[iter]);


   g.selectAll(".bar")
          .data(names)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return xScale(d); })
          .data(stats)
          .attr("y", function(d) { return yScale(d); })
          .attr("width", xScale.bandwidth())
          .attr("height", function(d) { return height - yScale(d); });

};

var transition = function(e){
  if(iter + 1 == 4){
    iter = 0;
  }
  else iter++;
  console.log(iter)
  var stats = []
  var i;
  for(i=0; i < data.length; i++){
    stats.push(data[i][iter]);
  };
  console.log(stats);

  svg.selectAll("rect")
    .data(stats)
    .transition()
    .ease(d3.easeLinear)
    .duration(100)
    .attr("y", function(d) { return yScale(d); })
    .attr("height", function(d) { return height - yScale(d); });
  d3.selectAll("text.yaxis")
    .transition()
    .ease(d3.easeLinear)
    .duration(100)
    .text(titles[iter]);
  };
console.log(svg);
console.log(g);



renderbutton.addEventListener('click', render);
transitionbutton.addEventListener('click', transition);
