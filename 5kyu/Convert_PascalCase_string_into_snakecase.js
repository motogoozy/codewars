/*
https://www.codewars.com/kata/529b418d533b76924600085d

Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1);
*/

function toUnderscore(string) {
   let result = []; // array of words
   let word = [];
   let numbers = '0123456789'.split('');

   if (typeof string === 'number') return string.toString();

   for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (word.length === 0) { // beginning of a new word
         word.push(letter.toLowerCase());
      } else if (numbers.includes(letter) || letter === '_') {
         word.push(letter);
      } else if (letter === letter.toUpperCase()) { // beginning of a new word
         result.push(word.join('')); // push the previous full word into result list
         word = [letter.toLowerCase()];
      } else {
         word.push(letter.toLowerCase());
      }
   }
   result.push(word.join(''));

   return result.join('_')
}

// toUnderscore(5);
toUnderscore('App7Test')