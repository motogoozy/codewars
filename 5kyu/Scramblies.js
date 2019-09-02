/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
  let lookup1 = {};
  let lookup2 = {};
  str1.split('').forEach(char => {
    if (!lookup1[char]) {
      lookup1[char] = 1;
    } else {
      lookup1[char]++;
    }
  });
  str2.split('').forEach(char => {
    if (!lookup2[char]) {
      lookup2[char] = 1;
    } else {
      lookup2[char]++;
    }
  });
  for (var char in lookup2) {
    if (!lookup1[char]||lookup1[char] < lookup2[char]) {
      return false;
    }
  }
  return true;
}

// scramble('rkqodlw', 'world');
scramble('katas', 'steak')
