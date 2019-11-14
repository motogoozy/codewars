/*
https://www.codewars.com/kata/split-strings/train/javascript

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

function solution(str) {
	if (str.length & 2 !== 0) {
		str += '_';
	}

	let result = [];
	let index = 0;

	while (index <= str.length - 1) {
		let first = str[index];
		let second = str[index + 1];
		result.push(first + second);
		index += 2;
	}

	return result;
}

solution('abc');