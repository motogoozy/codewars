// https://www.codewars.com/kata/570b69d96731d4cf9c001597

function magicSquare(n) {
  const square = [];
  const length = n - 1;
  let current = 1;
  let x = Math.floor(n / 2);
  let y = 0;

  // build empty box
  while (current <= n) {
    const arr = [];
    let idx = 0;

    while (idx < n) {
      arr.push('');
      idx++;
    }

    square.push(arr);
    current++;
  }

  current = 1;

  while (current <= (n * n)) {
    square[y][x] = current;
    const prevY = y;
    const prevX = x;

    if (y - 1 < 0) {
      y = length;
    } else {
      y--;
    }

    if ((x + 1) > length) {
      x = 0;
    } else {
      x++;
    }

    if (square[y][x]) {
      y = prevY + 1 > length ? 0 : prevY + 1;
      x = prevX;
    }

    current++;
  }

  return square;
}
