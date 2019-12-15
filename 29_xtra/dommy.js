var changeHeading = function(e) {
  var h = document.getElementById("h");
  h.innerHTML = e;
};

var removeItem = function(e) {
  // ???
};

var lis = document.getElementsByTagName("li");

for (var i=0; i<lis.length; i++) {

  lis[i].addEventListener( 'mouseover', function(e){
    changeHeading(lis[i]);
  });
  lis[i].addEventListener( 'mouseout', function(e){
    changeHeading("Hello World!")
  });
}
