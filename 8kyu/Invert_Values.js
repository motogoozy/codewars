/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

Python/JS/PHP/Java:

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers (and for C/C++: that all values are greater than INT_MIN).
*/

function invert(array) {
   var output = [];
   for (let x = 0; x <= array.length - 1; x++) {
      if (array[x] > 0) {
         output[x] = array[x] - array[x] * 2
      } else output[x] = Math.abs(array[x]);
   }
   return output;
}

invert([1, -2, 3, -4, 5]);