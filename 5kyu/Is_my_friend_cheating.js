/*
A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removeNb(26) should return [[15, 21], [21, 15]]
*/


/* TIMED OUT:
function removeNb (n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	};
	let sum = arr.reduce((acc, val) => acc + val);
	let results = [];

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			let num1 = arr[i];
			let num2 = arr[j];
			let excluded = sum - num1 - num2;
			if (num1 * num2 === excluded) {
				let pair = [num1, num2]
				results.push(pair);
			}
		}
	}

	if (results.length === 0) return [];
	else return results;
}

removeNb(26);
*/

function removeNb(n) {
   let sum = (n * (n + 1)) / 2; // sum of sequence
   let result = [];
   for (let b = n; b > 0; b--) {
      let a = (sum - b) / (b + 1);
      if (a < n && Number.isInteger(a)) { // an integer means it divides evenly
         result.push([a, b]);
      }
   }
   return result;
}

removeNb(10);