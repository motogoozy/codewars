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

function nextBigger(n) {
   let nString = n.toString();

   function test(t) {
      for (let i = t.length - 1; i > 0; i--) {
         if (i - 1 >= 0 && t[i] === t[i - 1]) {
            continue;
         }
         let currentNumber = parseInt(t[i]);
         for (let x = i - 1; x >= 0; x--) {
            let compareNumber = parseInt(t[x]);
            if (compareNumber < currentNumber) {
               let splitString = t.split('');
               splitString[x] = t[i];
               splitString[i] = t[x];
               let remainder = splitString.splice(x + 1);
               remainder.sort();
               let finalArray = splitString.concat(remainder);
               return parseInt(finalArray.join(''));
            }
         }
      }
      return -1;
   }

   for (let i = nString.length - 1; i >= 0; i--) {
      let subStr = nString.substr(i);
      let smallerInt = test(subStr);
      if (smallerInt !== -1) {
         return parseInt(nString.substr(0, i) + smallerInt.toString());
      }
   }
   return -1;
}

nextBigger(12);