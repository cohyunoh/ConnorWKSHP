// Connor Oh and Jude Rizzo
// SoftDev1 pd9
// K#27 -- Sequential Progression
// 2019-12-11
var fibonacci = function(n){
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
