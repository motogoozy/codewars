/*
https://www.codewars.com/kata/526d42b6526963598d0004db

Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

const CaesarCipher = function (shift) {
   this.shift = shift;
   this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

   this.encode = function (str) {
      let encodedChars = [];
      let strArr = str.split('');
      strArr.forEach(char => {
         if (this.alphabet.includes(char.toLowerCase())) {
            let currIdx = this.alphabet.indexOf(char.toLowerCase());
            let encIdx = currIdx + this.shift;
            if (encIdx >= 26) {
               encIdx = encIdx - 26;
            }
            encodedChars.push(this.alphabet[encIdx].toUpperCase())
         } else {
            encodedChars.push(char);
         }
      })
      return encodedChars.join('');
   };
   this.decode = function (str) {
      let decodedChars = [];
      let strArr = str.split('');
      strArr.forEach(char => {
         if (this.alphabet.includes(char.toLowerCase())) {
            let currIdx = this.alphabet.indexOf(char.toLowerCase());
            let decIdx = currIdx - this.shift;
            if (decIdx < 0) {
               decIdx = decIdx + 26;
            }
            decodedChars.push(this.alphabet[decIdx].toUpperCase());
         } else {
            decodedChars.push(char);
         }
      })
      return decodedChars.join('');
   }
};



var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'