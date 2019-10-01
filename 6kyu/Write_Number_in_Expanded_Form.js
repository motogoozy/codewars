/*
https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
   let numArr = num.toString().split('');
   let zeroCount = numArr.length;
   let longArr = [];
   let result = '';

   numArr.forEach(num => {
      if (num !== '0') {
         let longNum = '';
         longNum += num;
         for (let i = 1; i < zeroCount; i++) {
            longNum += '0';
         }
         longArr.push(longNum);
      }
      zeroCount--;
   })

   return longArr.join(' + ')
}

expandedForm(70304);