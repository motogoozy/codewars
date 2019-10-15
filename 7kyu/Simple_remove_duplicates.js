/*
https://www.codewars.com/kata/5ba38ba180824a86850000f7

In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
More examples can be found in the test cases.

Good luck!
*/

function solve(arr) {
   let duplicatesMap = {};
   let result = [];
   arr.forEach(num => {
      if (duplicatesMap[num]) {
         duplicatesMap[num]++;
      } else {
         duplicatesMap[num] = 1;
      }
   });

   arr.forEach(num => {
      if (duplicatesMap[num] !== 1) {
         duplicatesMap[num]--;
      } else {
         result.push(num);
      }
   });

   return result;
}

solve([3, 4, 4, 3, 6, 3]);