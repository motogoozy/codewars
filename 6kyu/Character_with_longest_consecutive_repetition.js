/*
https://www.codewars.com/kata/586d6cefbcc21eed7a001155

For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
*/

function longestRepetition(s) {
  let result = [];
  let allCounts = [];
  let count = 1;

  for (let i = 0; i < s.length; i++){
    if (s[i] === s[i+1]) {
      count++
    } else {
		if (allCounts.every(v => v < count)) {
			result = [s[i], count]
		}
		allCounts.push(count);
		count=1;
    }
  }

  return !result.length > 0 ? ['',0] : [result[0], result[1]];
}

longestRepetition('bbbaaabaaaa');
