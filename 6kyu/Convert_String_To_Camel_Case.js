/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

Examples
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior" */

function toCamelCase(str) {
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   let clean;
   if (str.includes('_')) {
      clean = str.split('_')
   } else if (str.includes('-')) {
      clean = str.split('-')
   } else if (str.includes(' ')) {
      clean = str.split(' ')
   } else if (str === '') {
      return '';
   } else {
      clean = str.split('')
   }
   let camelCase = clean.map((word, index) => {
      if (index === 0) {
         word = word.split('');
         let newWord = word.map((letter, index) => {
            if (index !== 0) {
               return letter.toLowerCase();
            } else return letter;
         })
         return newWord.join('')
      } else {
         word = word.split('');
         let newWord = word.map((letter, index) => {
            if (index === 0) return letter.toUpperCase();
            else return letter.toLowerCase();
         })
         return newWord.join('')
      }
   })
   return camelCase.join('')
}

toCamelCase('the sTealth WarrioR')