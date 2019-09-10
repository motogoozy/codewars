/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
   if (array.length === 0) return array;
   let evenIndexes = {};
   let odds = [];
   array.forEach((num, idx) => {
      if (num % 2 === 0 || num === 0) {
         evenIndexes[idx] = num;
      } else {
         odds.push(num);
      }
   })
   odds = odds.sort((a, b) => a - b);
   for (let idx in evenIndexes) {
      odds.splice(idx, 0, evenIndexes[idx])
   };
   return odds;
}

sortArray([5, 3, 2, 8, 1, 4])