/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance. */

function findUniq(arr) {
   let nums = {};
   arr.forEach(num => {
      if (!nums[num]) nums[num] = 1;
      else nums[num] = nums[num] + 1;
   })
   for (let key in nums) {
      if (nums[key] === 1) return Number(key);
   }
}

findUniq([1, 1, 1, 0.55, 1, 1]);