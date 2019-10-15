/*
https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
   let triangle = [];
   let currentRow = 1;
   let currentOdd = 1;
   let numsInRow = 1;
   while (currentRow <= n) {
      let newRow = [];
      while (newRow.length < numsInRow) {
         newRow.push(currentOdd);
         currentOdd += 2;
      }
      triangle.push(newRow);
      numsInRow++;
      currentRow++;
   }
   let requestedRow = triangle[n - 1]
   let rowSum = requestedRow.reduce((acc, val) => acc += val, 0);
   return rowSum;
}

rowSumOddNumbers(5)