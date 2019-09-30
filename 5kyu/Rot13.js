/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message){
	let lowAlphabet = ('abcdefghijklmnopqrstuvwxyz').split('');
	let upAlphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');
	let result = [];
	let findLetter = (letter, alphabet) => {
		let letterIdx = alphabet.indexOf(letter);
		let newLetterIdx = (letterIdx + 13) - 26;
		if (newLetterIdx < 0) {
			let temp = newLetterIdx * -1;
			newLetterIdx = 26 - temp;
		}
		return alphabet[newLetterIdx]
	}
	message.split('').forEach(letter => {
		let val;
		if (lowAlphabet.includes(letter)) {
			val = findLetter(letter, lowAlphabet);
		} else if (upAlphabet.includes(letter)) {
			val = findLetter(letter, upAlphabet);
		} else {
			val = letter;
		}
		result.push(val);
	})
	return result.join('');
};

rot13('tEst');