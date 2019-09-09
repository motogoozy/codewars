/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. */

var moveZeros = function (arr) {
   let zeros = [];

   let noZeros = arr.filter(e => {
      if (e !== 0) return true;
      else zeros.push(0)
   });

   let combined = noZeros.concat(...zeros)

   return combined;
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);