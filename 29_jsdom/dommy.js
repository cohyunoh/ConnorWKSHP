// Nahi Khan & Connor Oh
// SoftDev pd9
// K29 -- Sequential Progression III
//2019-12-12

//Few reminders:
//var b = document.getElementById("error");
//b.addEventListener('click', function(e) { console.log(e) });

var changeHeading = function(e) { // e is an event
  var h = document.getElementById("h");
  if (e.type == 'mouseover') {
    h.innerHTML = e.target.innerHTML;
    // target returns the element that triggered the event
  } else {
    h.innerHTML = "Hello World!";
  }
};

var removeItem = function(e) {
  e.target.remove();
  // remove removes the element from the html file
};

var lis = document.getElementsByTagName("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', changeHeading);
  lis[i].addEventListener('mouseout', changeHeading);
  lis[i].addEventListener('click', removeItem);
  // NOTICE: NO PARAMETERS BEING USED
};

var addItem = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "WORD";
  //adds an innerHTML to the li Item
  item.addEventListener('mouseover', changeHeading);
  // adds an event to it so it changes the Heading to word
  item.addEventListener('mouseout', changeHeading);
  // adds an event to it so it changes the Heading back
  item.addEventListener('click', removeItem);
  // adds event to it so it gets removed when clicked on
  list.appendChild(item);
  // this adds the item, which is a child, to the parent list, which is "thelist" in the html file
};

var button = document.getElementById("b");
button.addEventListener('click', addItem);
// =================OUR FIB METHOD=================================
var fib = function(n) {
  if (n < 2) {
    return 1;
  } else {
    return fib(n-1) + fib(n-2);
  }
};
// ================================================================


var fibNums = [];

var addFib = function(e) {
  console.log(e);
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  item.innerHTML = addFib2(e);
  list.appendChild(item);
};

var addFib2 = function(e) {
  console.log(e);
  var ans;
  if (fibNums.length < 2) { // if the length is less than 2, the statement in else won't work
    ans = fib(fibNums.length);
  } else { // append the next fibonacci number into the list
    ans = fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2];
  }
  fibNums.push(ans);
  return ans;
};

var fb = document.getElementById("fb");
fb.addEventListener('click', addFib);
