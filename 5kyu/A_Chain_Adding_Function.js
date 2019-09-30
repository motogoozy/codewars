/*
https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function sum(){
	var sum = 0;
	return function addition(num){
		return sum += num;
	}
}
var add = sum();
add(2)
add(3);

We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3
*/

function add(n) {
   var fn = function (x) {
      return add(n + x);
   };

   fn.valueOf = function () {
      return n;
   };

   return fn;
}

add(1)(2)