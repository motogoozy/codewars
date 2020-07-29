/*
https://www.codewars.com/kata/559536379512a64472000053/train/javascript

Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
#Example:

your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase
*/

function playPass(str, num) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const nums = '1234567890'.split('');

	let newStr = str.split('').map((char, i) => {
		if (alphabet.includes(char.toLowerCase())) {
			let idx = alphabet.indexOf(char.toLowerCase());
			let shiftedIdx = idx + num;
			if (shiftedIdx > 25) {
				shiftedIdx = Math.abs(shiftedIdx - 26);
			}
			let shiftedChar = alphabet[shiftedIdx];
			if (i % 2 === 0) {
				return shiftedChar.toUpperCase();
			} else {
				return shiftedChar;
			}
		} else if (nums.includes(char)) {
			return 9 - (+char);
		} else return char;
	})

	return newStr.reverse().join('');
}

playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2);