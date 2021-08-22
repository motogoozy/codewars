/*
https://www.codewars.com/kata/58ab002d68ee07c57b000118/javascript

Description
Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges, it will save a lot of space. You should write a function that will convert an array of numbers into a string. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings
The numbers could arrive all jumbled up so you'll need to sort them Sometimes the same number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange and vise versa for the toArray function. Also, ranges of 2 digits will take the same space whether they are represented as a sequence or a range. I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression, but represent them as a range anyway for consistency.

Good luck!

If you're finding this Kata a little hard, then maybe try my other one first
*/

function toRange(arr) {
  if (arr.length === 0) return '';
  
  const vals = [... new Set(arr)].sort((a, b) => a - b);
  let ranges = [];
  let currentRange = [];
  
  vals.forEach((num, idx) => {
    if ((currentRange.length === 0) || (num === Math.max(...currentRange) + 1)) {
      currentRange.push(num);
    } else {
      ranges.push(currentRange);
      currentRange = [num];
    }
  })

  ranges.push(currentRange);
  
  return ranges.map(range => {
    const min = Math.min(...range);
    const max = Math.max(...range);

    return min === max ? min : `${min}_${max}`;
  }).join(',');
}

function toArray(str) {
  if (str === '') return [];
  
  const ranges = str.split(',');
  let arr = [];

  ranges.forEach(range => {
    if (!range.includes('_')) {
      arr.push(+range);
    } else {
      const [min, max] = range.split('_');
      for (let i = +min; i <= +max; i++) {
        arr.push(i);
      }
    }
  })

  return arr;
}
