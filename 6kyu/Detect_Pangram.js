/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  str = str.toLowerCase();
  const missingChars = alphabet.filter(char => !str.includes(char.toLowerCase()))
  
  return missingChars.length === 0;
}


isPangram('The quick brown fox jumps over the lazy dog.');
// isPangram('This is not a pangram.');
