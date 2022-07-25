// https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const a = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const b = numbers[j];
      if ((a + b) === target) {
        return [i, j];
      }
    }
  }
}
