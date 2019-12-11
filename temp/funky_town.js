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

var gcd = function(x,y){
  m = max(x,y);
  n = min(x,y);
  if (m % n == 0) return n;
  else return gcd(n, m%n);
};
