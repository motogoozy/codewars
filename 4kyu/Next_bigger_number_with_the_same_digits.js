/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
144 ==> 414
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBigger(num) {
  // create array of digits
  const digits = num
    .toString()
    .split('')
    .map((s) => parseInt(s));

  // initialize i to the second to last index
  let i = digits.length - 2;
  // search for the element that breaks the ascending order
  while (i >= 0 && digits[i] >= digits[i + 1]) i--;
  // if i gets decremented to -1, then the next bigger doesn't exist, we return -1
  if (i === -1) return i;

  // we create and initialize j to the last index
  let j = digits.length - 1;
  // we search for the first digit that is bigger than digits[i]
  while (digits[j] <= digits[i]) j--;

  // we swap digits[i] with digits[j]
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // we reverse the part that starts from i+1
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }

  // we return digits as an integer
  return parseInt(digits.map((d) => d.toString()).join(''));
}

const a = 513; // 531
const b = 2017; // 2071
const c = 6642; // -1
const d = 1318540; // 1340158

console.log(nextBigger(2017));
