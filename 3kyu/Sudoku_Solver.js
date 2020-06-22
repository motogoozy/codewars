
/*
Write a function that will solve a Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

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


puzzle = [
   [2,0,0,1,0,4,0,0,6],
   [0,0,8,5,0,3,0,0,0],
   [0,0,0,8,0,0,0,0,0],
   [0,0,0,2,9,0,7,0,1],
   [7,0,0,0,0,0,0,8,0],
   [3,0,2,0,0,0,5,0,0],
   [8,6,0,0,0,0,0,1,9],
   [0,2,9,0,0,0,0,0,8],
   [4,0,0,0,0,0,0,0,0]
]
*/

function sudoku(puzzle) {
   var squareSize = Math.sqrt(puzzle.length);

   function allPossibilities(rowNumber, columnNumber) { // returns list of all number possibilities for a given position 
      let row = puzzle[rowNumber];
      let column = getColumn(columnNumber);
      let area = getArea(rowNumber, columnNumber);
      let possibilities = [];
      for (let x = 1; x <= puzzle.length; x++) {
         possibilities.push(x);
      }

      function removePossibility(found) {
         if (possibilities.indexOf(found) !== -1) {
            possibilities.splice(possibilities.indexOf(found), 1);
         }
      }
      row.forEach(removePossibility);
      column.forEach(removePossibility);
      area.forEach(removePossibility);
      if (possibilities.length === 0) {
         console.log('no possibilities found');
      }
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
      let rowStart = Math.floor(rowNumber / squareSize) * squareSize;
      let columnStart = Math.floor(columnNumber / squareSize) * squareSize;
      for (let i = rowStart; i < rowStart + squareSize; i++) {
         for (let x = columnStart; x < columnStart + squareSize; x++) {
            area.push(puzzle[i][x]);
         }
      }
      return area;
   }

   function getAreaNumber(rowNumber, columnNumber) { // returns the area number of the passed in position
      let num1 = Math.floor(rowNumber / squareSize);
      let num2 = Math.floor(columnNumber / squareSize);
      let areaNum = (num1 * squareSize) + num2;
      return areaNum;
   }

   function removeFromRow(rowNumber, value) { // removes value from list of possibilities for each location in a given rowNumber
      for (let keyString in zeroMap) {
         let key = keyString.split('-');
         if (key[0] == rowNumber) {
            let possibilities = zeroMap[keyString];
            if (possibilities.includes(value)) {
               zeroMap[keyString].splice(possibilities.indexOf(value), 1);
            }
         }
      }
   }

   function removeFromColumn(columnNumber, value) { // removes value from list of possibilities for each location in a given columnNumber
      for (let keyString in zeroMap) {
         let key = keyString.split('-');
         if (key[1] == columnNumber) {
            let possibilities = zeroMap[keyString];
            if (possibilities.includes(value)) {
               zeroMap[keyString].splice(possibilities.indexOf(value), 1);
            }
         }
      }
   }

   function removeFromArea(areaNumber, value) { // removes value from list of possibilities for each location in a given areaNumber
      for (let keyString in zeroMap) {
         let key = keyString.split('-');
         if (key[2] == areaNumber) {
            let possibilities = zeroMap[keyString];
            if (possibilities.includes(value)) {
               zeroMap[keyString].splice(possibilities.indexOf(value), 1);
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
            let key = row + '-' + column + '-' + area;
            let possibilities = allPossibilities(row, column);

            zeroMap[key] = possibilities;
         }
      }
   }

   // while there are still zeros, iterate over map and fill in puzzle (replace zeros where possibilities === 1, then remove that number from other possibilities lists)
   while (Object.keys(zeroMap).length > 0) {
      let nothingFound = true;
      for (let keyString in zeroMap) {
         let key = keyString.split('-');
         if (zeroMap[keyString].length === 1) { // if only one possibility exists
            let value = zeroMap[keyString][0]; // determine the value
            let row = parseInt(key[0]);
            let column = parseInt(key[1]);
            let area = parseInt(key[2]);
            puzzle[row][column] = value; // replace zero in puzzle with value

            delete zeroMap[keyString]; // delete the key

            // remove value from other keys' possibilities
            removeFromRow(row, value);
            removeFromColumn(column, value);
            removeFromArea(area, value)

            nothingFound = false;
         } else if (zeroMap[keyString].length === 0) {
            return false;
         }
      }

      if (nothingFound) {
         //nothing was done on this iteration of the loop so start guessing
         console.log("Nothing found. Starting to guess.");
         let minPossibilities = Infinity;
         let guessKey;
         for (let key in zeroMap) { // finding the key with the least amount of possibilities
            if (zeroMap[key].length < minPossibilities) {
               minPossibilities = zeroMap[key].length;
               guessKey = key;
            }
         }
         let retVal = false;
         zeroMap[guessKey].forEach((value) => { // recursively guessing each position
            if (retVal) return;
            let key = guessKey.split('-');
            let row = parseInt(key[0]);
            let column = parseInt(key[1]);
            let newPuzzle = [];
            puzzle.forEach((row) => { // creating a copy of the puzzle
               newPuzzle.push(row.slice(0));
            });
            newPuzzle[row][column] = value;
            let answer = sudoku(newPuzzle);
            if (answer) {
               retVal = answer;
            }
         });
         return retVal;
      }
   }


   return puzzle;
}

// let puzzle = [
//    [2, 0, 0, 1, 0, 4, 0, 0, 6],
//    [0, 0, 8, 5, 0, 3, 0, 0, 0],
//    [0, 0, 0, 8, 0, 0, 0, 0, 0],
//    [0, 0, 0, 2, 9, 0, 7, 0, 1],
//    [7, 0, 0, 0, 0, 0, 0, 8, 0],
//    [3, 0, 2, 0, 0, 0, 5, 0, 0],
//    [8, 6, 0, 0, 0, 0, 0, 1, 9],
//    [0, 2, 9, 0, 0, 0, 0, 0, 8],
//    [4, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

let puzzle = 
[
   [0,11,9,0,0,16,13,4,0,0,14,0,10,6,15,0],
   [4,12,15,0,3,6,0,11,0,5,0,1,16,7,14,2],
   [1,0,6,0,15,2,0,0,11,9,10,0,0,0,8,0],
   [0,13,0,0,0,1,0,0,4,6,0,15,0,0,0,0],
   [0,0,0,0,0,0,15,0,8,1,5,3,0,4,11,7],
   [6,0,1,0,0,12,8,0,9,0,0,2,0,0,3,0],
   [14,0,4,13,6,0,0,3,0,12,7,10,8,0,2,0],
   [3,8,0,0,4,7,2,0,6,0,0,0,0,12,16,5],
   [13,0,0,16,0,8,14,10,3,4,15,0,12,5,1,11],
   [0,0,0,6,2,0,0,1,10,0,11,0,15,3,0,9],
   [7,0,0,12,0,4,0,15,5,0,9,14,0,0,0,0],
   [10,0,0,8,0,0,11,0,0,0,1,12,4,0,13,16],
   [0,0,0,0,0,0,7,0,15,2,0,0,0,0,12,3],
   [0,0,7,0,0,10,6,0,1,8,0,13,11,0,9,14],
   [8,6,5,0,0,3,0,0,14,0,0,9,0,0,0,0],
   [0,16,0,2,0,0,0,14,0,10,0,0,0,0,0,0]
]

console.log(sudoku(puzzle));