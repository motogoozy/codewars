/*
https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function (arr) {
   let highest = 0;

   if (arr.length === 0) return 0;

   if (!arr.some(num => num < 0)) { // if array contains only positive numbers
      return arr.reduce((total, num) => total + num);
   } else if (!arr.some(num => num > 0)) { // if array contains only negative numbers
      return 0;
   }

   arr.forEach((num, idx) => {
      let start = idx;
      let end = idx;

      while (end < arr.length) {
         let sub = arr.slice(start, end + 1);
         let sum = sub.reduce((total, val) => total + val);

         if (sum > highest) {
            highest = sum;
         }

         end++;
      }
   });

   return highest;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);