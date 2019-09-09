/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. */

let pigIt = (str) => {
   let symbols = '`~!@#$%^&*()_+-=[]{}\|;:",.<>?/'.split('');
   let words = str.split(' ');
   let firstLetterLast = words.map(word => {
      let wordArr = word.split('');
      let firstLetter = wordArr.shift();
      wordArr.push(firstLetter);
      return wordArr.join('')
   });

   let pigLatin = firstLetterLast.map(word => {
      if (!symbols.includes(word)) return word + 'ay';
      else return word
   });

   return pigLatin.join(' ');
};

pigIt('Hello beautiful world !')