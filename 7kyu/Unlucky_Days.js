/*
https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/

function unluckyDays(year){
	let currentDate = new Date(`01-01-${year}`);
	let unluckyCount = 0;

	while (currentDate < new Date(`12-31-${year}`)) {
		if (currentDate.getDate() === 13 && currentDate.getDay() === 5) {
			unluckyCount++;
		}
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return unluckyCount;
}

unluckyDays(2015);