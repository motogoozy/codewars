/*
https://www.codewars.com/kata/tic-tac-toe-checker/train/javascript

If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.
*/

function isSolved(board) {
   let row1 = board[0],
      row2 = board[1],
      row3 = board[2],
      isSolved = false

   // check rows
   for (let i = 0; i < board.length; i++) {
      if (board[i][0] !== 0 && board[i][1] !== 0 && board[i][2] !== 0) {
         if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
         }
      }
   }

   // check columns
   for (let j = 0; j < row1.length; j++) {
      if (row1[j] !== 0) {
         if (row1[j] === row2[j] && row1[j] === row3[j]) {
            return row[j]; // winner
         }
      }
   }

   // check diagonally
   if (row1[0] !== 0) {
      if (row1[0] === row2[1] && row1[0] === row3[2]) {
         return row1[0]; // winner
      }
   }
   if (row3[0] !== 0) {
      if (row3[0] === row2[1] && row3[0] === row1[2]) {
         return row3[0];
      }
   }

   // check for remaining empty spots
   for (let k = 0; k < board.length; k++) {
      if (board[k][0] === 0 || board[k][1] === 0 || board[k][2] === 0) {
         return -1; // board is not finished
      }
   }

   return 0; // it's a draw
}

isSolved([
   [0, 0, 1],
   [0, 1, 2],
   [1, 1, 0]
])

// isSolved([
//    [2, 1, 1],
//    [0, 1, 1],
//    [2, 2, 2]
// ])