/*
https://www.codewars.com/kata/weird-string-case/train/javascript

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

function toWeirdCase(string) {
   let wordsArr = string.toLowerCase().split(' ');
   let resultArr = [];

   for (let i = 0; i < wordsArr.length; i++) {
      let wordArr = wordsArr[i].split('');
      let word = '';

      for (let j = 0; j < wordArr.length; j++) {
         if (j % 2 === 0) {
            word += wordArr[j].toUpperCase();
         } else {
            word += wordArr[j];
         }
      }
      resultArr.push(word);
   }
   return resultArr.join(' ');
}

toWeirdCase('Weird string case');