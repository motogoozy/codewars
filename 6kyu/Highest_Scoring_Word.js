/*
https://www.codewars.com/kata/highest-scoring-word/train/javascript

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
   let words = x.split(' ');
   let highestWord = '';
   let highestScore = 0;
   let letterVal = 1;
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let values = {};
   alphabet.forEach(letter => {
      values[letter] = letterVal;
      letterVal++;
   })
   words.forEach(word => {
      let score = 0;
      word.split('').forEach(letter => {
         score += values[letter];
      });
      if (score > highestScore) {
         highestScore = score;
         highestWord = word;
      }
   })
   return highestWord;
}

high('what time are we climbing up the volcano');