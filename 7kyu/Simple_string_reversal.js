/*
https://www.codewars.com/kata/simple-string-reversal/train/javascript

In this Kata, we are going to reverse a string while maintaining spaces.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space after the first three characters, hence "edo cruo"

solve("your code rocks") = "skco redo cruoy"
solve("codewars") = "srawedoc"
More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/

function solve(str) {
   let spaceIndexes = [];
   let letters = [];
   str.split('').forEach((char, idx) => {
      if (char === ' ') {
         spaceIndexes.push(idx);
      } else {
         letters.unshift(char);
      }
   })
   spaceIndexes.forEach(char => {
      letters.splice(char, 0, ' ');
   })
   return letters.join('')
};

solve('I love codewars');