/*
https://www.codewars.com/kata/string-ends-with/train/javascript

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

// quick answer
let solution = (str, ending) => str.endsWith(ending);

// long answer
// function solution(str, ending) {
//    let endingLength = ending.length;
//    let sub = str.substring(str.length - endingLength, str.length);
//    return sub === ending;
// };

solution('abc', 'bc') //true
// solution('abc', 'd') // returns false