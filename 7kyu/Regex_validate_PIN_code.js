/*
https://www.codewars.com/kata/regex-validate-pin-code/train/javascript

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/

function validatePIN(pin) {
   if (pin.length === 4 || pin.length === 6) {
      let nums = '0123456789'.split('');

      let pinArr = pin.split('');
      for (let i = 0; i < pinArr.length; i++) {
         if (!nums.includes(pinArr[i])) {
            return false;
         }
      };
      return true;
   } else return false;
   }

validatePIN('123a');