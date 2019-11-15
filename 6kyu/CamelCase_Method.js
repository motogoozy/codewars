/*
https://www.codewars.com/kata/camelcase-method/train/javascript

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
*/

String.prototype.camelCase = function() {
	let words = this.split(' ').map(word => {
		let arr = word.split('');
		if (arr[0]) {
			arr[0] = arr[0].toUpperCase();
		}
		return arr.join('');
	});

	return words.join('');
}

'camel case word'.camelCase();