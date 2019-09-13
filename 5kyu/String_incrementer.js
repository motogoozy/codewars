/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100
*/

function incrementString(str) {
   if (isNaN(str.slice(-1))) {
      return `${str}1`;
   } else {
      var chars = str.split('').filter(n => isNaN(n)).join('');
      var nums = str.split('').filter(n => !isNaN(n)).join('');
      var incrementedNum = +nums + 1;
      if (nums.length > incrementedNum.toString().length) {
         var zeros = '';
         for (var i = 0; i < nums.length; i++) {
            zeros += '0';
         }
         return chars + (zeros + incrementedNum).slice(-nums.length);
      } else {
         return chars + incrementedNum;
      }
   }
}

incrementString('foobar999')