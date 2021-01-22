/*
https://www.codewars.com/kata/59971e64bfccc70748000068/train/javascript

Consider the following series:

1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122

It is generated as follows:

For single digit integers, add the number to itself to get the next element.
For other integers, multiply all the non-zero digits and add the result to the original number to get the next element.
For example: 16 + (6 * 1) = 22 and 104 + (4 * 1) = 108.

Let's begin the same series with a seed value of 3 instead of 1:

3, 6, 12, 14, 18, 26, 38, 62, 74, 102, 104, 108, 116, 122

Notice that the two sequences converge at 26 and are identical therefter. We will call the series seeded by a value of 1 the "base series" and the other series the "test series".

You will be given a seed value for the test series and your task will be to return the number of integers that have to be generated in the test series before it converges to the base series. In the case above:

convergence(3) = 5, the length of [3, 6, 12, 14, 18]. 
Good luck!
*/

function convergence(n){
	const base = [1, 2, 4, 8, 16, 22, 26, 38, 62, 74, 102, 104, 108, 116, 122];

  let current = n;
  while(base.indexOf(current) < 0) {
    if (current.toString().length < 2) {
      current = current + current;
    } else {
      let sum = current.toString().split('').reduce((acc, cur) => parseInt(cur) === 0 ? acc : acc * parseInt(cur))
      current = current + sum;
    }
  }

  return base.indexOf(current) - 1;
}

console.log(convergence(15))