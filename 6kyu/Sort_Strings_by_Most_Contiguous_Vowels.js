/*
https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript

The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.
*/

function sortStringsByVowels(strings){
	const vowels = 'aeiouAEIOU'.split('');
	let vowelCounts = {}; // count : array of strings

	function getVowelCount(string) {
		let highestCount = 0;
		let currentCount = 0;
		let isConsec = false;
		for (let i = 0; i < string.length; i++) {
			if (vowels.includes(string[i])) {
				isConsec = true;
				currentCount++;
				if (currentCount > highestCount) {
					highestCount = currentCount;
				}
			} else {
				isConsec = false;
				currentCount = 0;
			}
		}

		return highestCount;
	};

	strings.forEach(str => {
		const vowelCount = getVowelCount(str);
		vowelCounts[vowelCount] = vowelCounts[vowelCount] || [];
		vowelCounts[vowelCount].push(str);
	})

	const results = Object.entries(vowelCounts)
		.sort((a, b) => {
			if (+a[0] < +b[0]) return 1;
			else if (+a[0] > +b[0]) return -1;
			else return 0;
		})
		.map(e => e[1].map(str => str));

	return [].concat(...results);
}

sortStringsByVowels(["aabaaac","eee","oo","iiii"]);
