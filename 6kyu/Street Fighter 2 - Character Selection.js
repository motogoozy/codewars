// https://www.codewars.com/kata/5853213063adbd1b9b0000be

function streetFighterSelection(fighters, position, moves) {
  let [y, x] = position;
  const results = [];
  
  moves.forEach(move => {
    if (move === 'up') {
      y = Math.max(y - 1, 0);
    } else if (move === 'down') {
      y = Math.min(y + 1, fighters.length - 1);
    } else if (move === 'right') {
      if (x === fighters[y].length - 1) {
        x = 0;
      } else {
        x++;
      }
    } else {
      if (x === 0) {
        x = fighters[y].length - 1;
      } else {
        x--;
      }
    }
    
    results.push(fighters[y][x])
  })
  
  return results;
}
