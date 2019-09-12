/*
Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

For Sudoku rules, see the Wikipedia article.

var puzzle = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]];

sudoku(puzzle);
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] 
*/

function sudoku(puzzle) {
   //return the solved puzzle as a 2d array of 9 x 9 
   function allPossibilities(rowNumber, columnNumber) { // returns list of all number possibilities for a given position 
      let row = puzzle[rowNumber];
      let column = getColumn(columnNumber);
      let area = getArea(rowNumber, columnNumber);
      let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      function removePossibility(found) {
         if (possibilities.indexOf(found) !== -1) {
            possibilities.splice(possibilities.indexOf(found), 1);
         }
      }
      row.forEach(removePossibility);
      column.forEach(removePossibility);
      area.forEach(removePossibility);
      return possibilities;
   }

   function getColumn(columnNumber) { // returns list of numbers in a given column
      let column = [];
      for (let i = 0; i < puzzle.length; i++) {
         column.push(puzzle[i][columnNumber]);
      }
      return column;
   }

   function getArea(rowNumber, columnNumber) { // returns list of all numbers in a containing quadrant (area) of a position passed in
      let area = [];
      let rowStart = Math.floor(rowNumber / 3) * 3;
      let columnStart = Math.floor(columnNumber / 3) * 3;
      for (let i = rowStart; i < rowStart + 3; i++) {
         for (let x = columnStart; x < columnStart + 3; x++) {
            area.push(puzzle[i][x]);
         }
      }
      return area;
   }

   function getAreaNumber(rowNumber, columnNumber) { // returns the area number of the passed in position
      let num1 = Math.floor(rowNumber / 3);
      let num2 = Math.floor(columnNumber / 3);
      let areaNum = (num1 * 3) + num2;
      return areaNum;
   }

   function removeFromRow(rowNumber, value) { // removes value from list of possibilities for each location in a given rowNumber
      for (let key in zeroMap) {
         if (key[0] == rowNumber) {
            let possibilities = zeroMap[key];
            if (possibilities.includes(value)) {
               zeroMap[key].splice(possibilities.indexOf(value), 1);
            }
         }
      }
   }

   function removeFromColumn(columnNumber, value) { // removes value from list of possibilities for each location in a given columnNumber
      for (let key in zeroMap) {
         if (key[1] == columnNumber) {
            let possibilities = zeroMap[key];
            if (possibilities.includes(value)) {
               zeroMap[key].splice(possibilities.indexOf(value), 1);
            }
         }
      }
   }

   function removeFromArea(areaNumber, value) { // removes value from list of possibilities for each location in a given areaNumber
      for (let key in zeroMap) {
         if (key[2] == areaNumber) {
            let possibilities = zeroMap[key];
            if (possibilities.includes(value)) {
               zeroMap[key].splice(possibilities.indexOf(value), 1);
            }
         }
      }
   }

   let zeroMap = { // a map containing the location of all zeros & their possible numbers
      // location: array of possible numbers
   };

   for (let i = 0; i < puzzle.length; i++) { // populating zeroMap
      for (let j = 0; j < puzzle[i].length; j++) {
         if (puzzle[i][j] === 0) {
            let row = i;
            let column = j;
            let area = getAreaNumber(row, column);
            let key = '' + row + column + area;
            let possibilities = allPossibilities(row, column);

            zeroMap[key] = possibilities;
         }
      }
   }

   // while there are still zeros, iterate over map and fill in puzzle (replace zeros where possibilities === 1, then remove that number from other possibilities lists)
   while (Object.keys(zeroMap).length > 0) {
      for (let key in zeroMap) {
         if (zeroMap[key].length === 1) { // if only one possibility exists
            let value = zeroMap[key][0]; // determine the value
            let row = parseInt(key[0]);
            let column = parseInt(key[1]);
            let area = parseInt(key[2]);
            puzzle[row][column] = value; // replace zero in puzzle with value

            delete zeroMap[key]; // delete the key

            // remove value from other keys' possibilities
            removeFromRow(row, value);
            removeFromColumn(column, value);
            removeFromArea(area, value)
         }
      }
   }


   return puzzle;
}



var puzzle = [
   [5, 3, 0, 0, 7, 0, 0, 0, 0],
   [6, 0, 0, 1, 9, 5, 0, 0, 0],
   [0, 9, 8, 0, 0, 0, 0, 6, 0],
   [8, 0, 0, 0, 6, 0, 0, 0, 3],
   [4, 0, 0, 8, 0, 3, 0, 0, 1],
   [7, 0, 0, 0, 2, 0, 0, 0, 6],
   [0, 6, 0, 0, 0, 0, 2, 8, 0],
   [0, 0, 0, 4, 1, 9, 0, 0, 5],
   [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(sudoku(puzzle));