/*
https://www.codewars.com/kata/ip-validation/train/javascript

Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Input to the function is guaranteed to be a single string.

Examples
Valid inputs:

1.2.3.4
123.45.67.89
Invalid inputs:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Note that leading zeros (e.g. 01.02.03.04) are considered invalid.
*/

function isValidIP(str) {
   let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   let arr = str.split('.');
   let isValid = true;

   if (arr.length !== 4) return false;

   for (let i = 0; i < arr.length; i++) {
      let charArr = arr[i].split('');
      if (charArr.length === 0) {
         isValid = false;
         break;
      };

      for (let j = 0; j < charArr.length; j++) {
         if (!nums.includes(parseInt(charArr[j]))) {
            isValid = false;
            break;
         }
      };

      if (arr[i].startsWith('0') && arr[i].length > 1) {
         isValid = false;
         break;
      };

      let num = parseInt(arr[i]);
      if (num === NaN || num < 0 || num > 255) {
         isValid = false;
         break;
      };
   };

   return isValid;
}

// isValidIP('1a23.45.67.89')
// isValidIP("12.255.56.1")
// isValidIP('0.0.0.0')
isValidIP('76..32.154')