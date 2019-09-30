/*
https://www.codewars.com/kata/alphabetical-addition/train/javascript

Your task is to add up letters to one letter.

The function will be given a variable amount of arguments, each one being a letter to add.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

function addLetters(...letters) {
   if (letters == 'z') return 'z';
   if (letters.length === 0) return 'z';
   let numObj = {};
   let letterObj = {};
   let count = 1;
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let sum = 0;
   alphabet.forEach(letter => {
      numObj[count] = letter;
      letterObj[letter] = count;
      count++;
   })

   letters.forEach(letter => {
      sum += letterObj[letter]
   })

   if (sum > 26) {
      let temp = sum % 26;
      if (temp === 0) {
         return 'z';
      } else {
         return numObj[temp];
      }
   } else if (sum < 26) {
      return numObj[sum];
   } else if (sum === 26) {
      return 'z';
   }
}

// addLetters('a','b','c');
// addLetters('a','b')
// addLetters('z','a')
// addLetters('y','c','b')
// addLetters('z')
// addLetters()
// addLetters('v','g','y')
// addLetters("q", "p", "d", "o")
addLetters("b", "x", "l", "y", "u", "t")