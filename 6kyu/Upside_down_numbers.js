/*
https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript

Consider the numbers 6969 and 9116. When you rotate them 180 degrees (upside down), these numbers remain the same. To clarify, if we write them down on a paper and turn the paper upside down, the numbers will be the same. Try it and see! Some numbers such as 2 or 5 don't yield numbers when rotated.

Given a range, return the count of upside down numbers within that range. For example, solve(0,10) = 3, because there are only 3 upside down numbers >= 0 and < 10. They are 0, 1, 8.

More examples in the test cases.

Good luck!
*/

function solve(x, y) {
  const upsideDownNums = {
    0: '0',
    1: '1',
    6: '9',
    8: '8',
    9: '6',
  };
  const invalidNums = ['2', '3', '4', '5', '7'];
  let count = 0;

  function isValid(num) {
    num = num.toString();
    let upsideDown = [...num]
      .reverse()
      .map(char => (upsideDownNums.hasOwnProperty(char) ? upsideDownNums[char] : char))
      .filter(char => !invalidNums.includes(char))
      .join('');

    if (upsideDown.length !== num.length) return false;

    return upsideDown === num;
  }

  for (let i = x; i < y; i++) {
    if (isValid(i)) count++;
  }

  return count;
}

solve(60000, 70000);
