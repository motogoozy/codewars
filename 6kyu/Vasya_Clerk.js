/*
https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has NO money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

function tickets(line){
  const count = {
    25: 0,
    50: 0,
    100: 0,
  };

  for (let i = 0; i < line.length; i++) {
    const bill = line[i];

    if (bill === 100) {
      if (count[50] > 0 && count[25] > 0) {
        count[50] -= 1;
        count[25] -= 1;
      } else if (count[25] >= 3) {
        count[25] -= 3;
      } else return 'NO';

      count[100] += 1;
    } else if (bill === 50) {
      if (count[25] > 0) {
        count[25] -= 1;
      } else return 'NO';
      
      count[50] += 1;
    } else {
      count[25] += 1;
    }
  }

  return 'YES';
}

tickets([ 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 25, 100 ]);
