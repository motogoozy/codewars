/*
https://www.codewars.com/kata/5964d7e633b908e172000046

Some letters in the input string are representing a written-out digit. Some of the letters may randomly shuffled. Your task is to recover them all.

Note that:

Only consecutive letters can be used. "OTNE" cannot be recovered to 1!
Every letter has to start with an increasing index.. "ONENO" results to 11, because the E can be used two times. Endless loops are not possible!
If there are letters in the string, which don't create a number you can ignore them.
If no digits can be found, return "No digits found"
Take care about the order! "ENOWT" will be recovered to 12 and not to 21.
The input string consists only UpperCase letters
e.g.


recover("NEO") =>  "1"
recover("ONETWO") => "12"
recover("ONENO") => "11"
recover("TWWTONE") => "21"
recover("ZYX") => "No digits found"
recover("NEOTWONEINEIGHTOWSVEEN") => "12219827"

You can use the following preloaded dictionary in your solution:


const alph = {"ZERO":0,"ONE":1,"TWO":2,"THREE":3,"FOUR":4,"FIVE":5,"SIX":6,"SEVEN":7,"EIGHT":8,"NINE":9};
*/

function recover(str) {
  const alph = { ZERO: 0, ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, SIX: 6, SEVEN: 7, EIGHT: 8, NINE: 9 };
  const sortedAlph = {};
  for (let [word, num] of Object.entries(alph)) {
    sortedAlph[word.split('').sort().join('')] = num;
  }

  let result = '';

  for (let i = 0; i + 2 < str.length; i++) {
    let wordLength = 3;
    while (wordLength <= 5) {
      let sortedWord = str
        .slice(i, i + wordLength)
        .split('')
        .sort()
        .join('');
      if (sortedAlph.hasOwnProperty(sortedWord)) {
        result += sortedAlph[sortedWord];
        break;
      }
      wordLength++;
    }
  }

  return result ? result : 'No digits found';
}

recover('NEOTWONEINEIGHTOWSVEEN');
