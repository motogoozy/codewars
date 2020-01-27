/*
https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see Example Tests: for more details.

Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/

function listSquared(m, n) {
   let results = [];

   function getDivisors(int) {
      let divisors = [];
      let num = int;
      while (num > 0) {
         if (int % num === 0) {
            divisors.push(num);
         }
         num--;
      }
      return divisors;
   };
   
   function isSquare(int) {
      return n > 0 && Math.sqrt(int) % 1 === 0;
   };

   for (let i = m; i <= n; i++) {
      let divisors = getDivisors(i);
      let sum = divisors.reduce((a, b) => a + (b * b), 0);
      if (isSquare(sum)) {
         results.push([i, sum])
      }
   }

   return results;
}

listSquared(1, 42);