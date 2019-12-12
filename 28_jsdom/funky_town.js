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

var fibonnacci = document.getElementById("f");
fibonnacci.addEventListener("click", console.log(fib(30)));

var greatestcommondenominator = document.getElementById("g");
greatestcommondenominator.addEventListener("click", console.log(gcd(1220, 516)));

var rand = document.getElementById("r");
rand.addEventListener("click", console.log(randomStudent()));
