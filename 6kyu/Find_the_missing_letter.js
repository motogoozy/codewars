/* Write a method that takes an array of consecutive (increasing) letters as array and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!) */

function findMissingLetter(array) {
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

   // check to see if array is uppercase
   const first = array[0];
   if (first === first.toUpperCase()) {
      alphabet = alphabet.join('').toUpperCase().split('');
   }

   // create a copy of the portion of alphabet to compare against the incoming array
   const alphabetFirst = alphabet.indexOf(first);
   let reference = alphabet.splice(alphabetFirst, array.length + 1);

   // loop through each letter in reference to see if it exists in array. if it doesn't (-1) push that letter into the missing array.
   let missing = [];
   reference.forEach(letter => {
      if (array.indexOf(letter) === -1) {
         missing.push(letter)
      }
   })

   // return array (should only contain the missing character)
   return missing[0]
}

// findMissingLetter(['O','Q','R','S'])
findMissingLetter(['a', 'b', 'c', 'd', 'f'])