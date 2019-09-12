/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 points
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

Throw       Score
---------   ------------------
5 1 3 4 1   50 + 2 * 100 = 250
1 1 1 3 1   1000 + 100 = 1100
2 4 4 5 4   400 + 50 = 450
In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.
*/

function score(dice) {
   let diceMap = {};
   let score = 0;
   dice.forEach(die => {
      if (diceMap[die]) {
         diceMap[die]++;
      } else {
         diceMap[die] = 1;
      }
   });

   console.log(diceMap)

   for (let num in diceMap) {
      if (diceMap[num] >= 3) {
         let tempScore = 0;
         if (num == 1) {
            tempScore += 1000;
         } else {
            tempScore += num * 100;
         }
         diceMap[num] = diceMap[num] - 3;
         score += tempScore;
      }
      if (diceMap[num] > 0) {
         if (num == 1) {
            score += diceMap[num] * 100;
         } else if (num == 5) {
            score += diceMap[num] * 50;
         }
      }
   }

   return score;
}

score([2, 4, 4, 5, 4])