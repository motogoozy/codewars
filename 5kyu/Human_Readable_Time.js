/* 
https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  let remainingSeconds = seconds % 60;
  let minutes = Math.floor(seconds / 60);
  let remainingMinutes = minutes % 60;
  let hours = Math.floor(minutes / 60);

  if (hours.toString().split('').length < 2) {
    hours = `0${hours}`
  };
  if (remainingSeconds.toString().split('').length < 2) {
    remainingSeconds = `0${remainingSeconds}`
  };
  if (remainingMinutes.toString().split('').length < 2) {
    remainingMinutes = `0${remainingMinutes}`
  };

  return `${hours}:${remainingMinutes}:${remainingSeconds}`
};

console.log(humanReadable(45296)); // '12:34:56'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(86400)); // '24:00:00'
console.log(humanReadable(359999)); // '99:59:59'
