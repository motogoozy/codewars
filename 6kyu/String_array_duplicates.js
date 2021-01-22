/*
https://www.codewars.com/kata/59f08f89a5e129c543000069

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

const dup = arr => arr.map(word => word.split('').filter((char, idx) => word[idx-1] !== char).join(''))

dup(["abracadabra","allottee","assessee"])