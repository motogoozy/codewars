/*
https://www.codewars.com/kata/5a1463678ba9145a670000f9/train/javascript

The "Berlin Clock" is the first public clock in the world that tells the time by means of illuminated, coloured fields, for which it entered the Guinness Book of Records upon its installation on 17 June 1975.

The clock is read from the top row to the bottom. The top row of four red fields denote five full hours each, alongside the second row, also of four red fields, which denote one full hour each, displaying the hour value in 24-hour format. The third row consists of eleven yellow-and-red fields, which denote five full minutes each (the red ones also denoting 15, 30 and 45 minutes past), and the bottom row has another four yellow fields, which mark one full minute each. The round yellow light on top blinks to denote even- (when lit) or odd-numbered (when unlit) seconds.

Example: Two fields are lit in the first row (five hours multiplied by two, i.e. ten hours), but no fields are lit in the second row; therefore the hour value is 10.
Six fields are lit in the third row (five minutes multiplied by six, i.e. thirty minutes), while the bottom row has one field on (plus one minute). Hence, the lights of the clock altogether tell the time as 10:31. (Source: Wikipedia)

Task: Write a function that takes in a particular time as 24h format ('hh:mm:ss') and outputs a string that reproduces the Berlin Clock. The parameters should be as follows:

“O” = Light off
“R” = Red light
“Y” = Yellow light

Example Test Case:
Input String:
12:56:01

Output String:
O
RROO
RROO
YYRYYRYYRYY
YOOO

Please check the example test cases for the required output format.
*/

function berlinClock(time) {
	const [hrs, mins, secs] = time.split(':');
	let lightCounts = {
		'1': [secs % 2 === 0 ? 1 : 0, 1],
		'2': [Math.floor(hrs / 5), 4],
		'3': [hrs % 5, 4],
		'4': [Math.floor(mins / 5), 11],
		'5': [mins % 5, 4]
	};

	let result = Object.entries(lightCounts).map(([row, [lit, possible]]) => {
		let char;

		if (row === '2' || row === '3') {
			char = 'R';
		} else {
			char = 'Y';
		}

		let str = char.repeat(lit) + 'O'.repeat(possible - lit);

		if (row === '4') {
			let newStr = [...str].map((char, idx) => {
				if (char === 'Y') {
					if (idx === 2 || idx === 5 || idx === 8) {
						return 'R';
					} else return 'Y';
				} else return 'O';
			})
			str = newStr.join('');
		}

		return str;
	})

	return result.join('\n');
}


