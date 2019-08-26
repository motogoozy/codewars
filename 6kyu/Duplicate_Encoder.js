// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
   //loop over array once to keep track of how many times each character is used in a dictionary object
   let charCount = {};
   wordArr = word.toLowerCase().split('');
   wordArr.forEach(letter => {
      if (!charCount[letter]) {
         charCount[letter] = 1
      } else {
         charCount[letter]++
      }
   });
   //map over array to see if letter is used more than once and print accordingly. then return joined array as a string
   let encodedArr = wordArr.map(letter => {
      if (charCount[letter] > 1) return ')';
      else return '('
   })
   return encodedArr.join('')
}

duplicateEncode('Success')