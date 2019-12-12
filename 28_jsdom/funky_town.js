// Connor Oh and Leia Park
// SoftDev1 pd9
// K#28 -- Sequential Progression II: Electric Boogaloo
// 2019-12-12
var fib = function(n){
  if(n==1) return 1;
  else if (n==2) return 1;
  else return (fib(n-2) + fib(n-1));
};

var max = function(x,y){
  if(x > y) return x;
  else return y;
};

var min = function(x,y){
  if(x > y) return y;
  else return x;
};

var gcd = function(a,b){
  m = max(a,b);
  n = min(a,b);
  if (m % n == 0) return n;
  else return gcd(n, m%n);
};

var list = ["connor", "leia", "grace", "jude"];

var randomStudent = function(){
  len = list.length;
  index = Math.floor(Math.random() * len);
  return list[index];
};
var ans1 = fib(30);
var ans2 = gcd(1220,516);
var ans3 = randomStudent();
var fibonnacci = document.getElementById("f");
fibonnacci.addEventListener("click", function(){
  console.log(ans1)
});
fibonnacci.addEventListener("click", function(){
  document.getElementById("ans1").innerHTML = ans1;
});

var greatestcommondenominator = document.getElementById("g");
greatestcommondenominator.addEventListener("click", function(){
  console.log(ans2)
});
greatestcommondenominator.addEventListener("click", function(){
    document.getElementById("ans2").innerHTML = ans2;
});

var rand = document.getElementById("r");
rand.addEventListener("click", function(){
  console.log(ans3)
});
rand.addEventListener("click", function(){
  document.getElementById("ans3").innerHTML = ans3;
});
