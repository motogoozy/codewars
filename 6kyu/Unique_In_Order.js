/* Instructions
Output
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder = function (iterable) {
   //normalize the argument to be an array
   if (typeof iterable === 'string') {
      iterable = iterable.split('')
   }
   // loop over each item in the array. Put the first item in the array, then check to see if each subsequent item already exists at the index before it. If it does,skip it and move on. If it doesn't exist at the index before it, add it in. 
   let result = iterable.filter((letter, index) => {
      if (index === 0) {
         return true
      } else if (letter === iterable[index - 1]) {
         return false
      } else if (letter !== iterable[index - 1]) {
         return true
      }
   })
   return result;
}

uniqueInOrder('AAAABBBCCDAABBB')
// uniqueInOrder('ABBCcAD')
// uniqueInOrder([1,2,2,3,3])