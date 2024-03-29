// https://www.codewars.com/kata/58583922c1d5b415b00000ff/train/javascript

function superStreetFighterSelection(fighters, position, moves) {
  let [y, x] = position;
  const results = [];
  
  moves.forEach(move => {
    if (move === 'up') {
      const newY = Math.max(y - 1, 0);
      
      if (fighters[newY][x]) {
        y = newY;
      }
    } else if (move === 'down') {
      const newY = Math.min(y + 1, fighters.length - 1);
      
      if (fighters[newY][x]) {
        y = newY;
      }
    } else if (move === 'right') {
      let newX = x;
      let next = '';
      
      while (!next) {        
        if (newX === fighters[y].length - 1) {
          newX = 0;
        } else {
          newX++;
        }
        
        if (fighters[y][newX]) {
          next = fighters[y][newX];
        }
      }
      
      x = newX;
    } else {
      let newY = y;
      let next = '';
      
      while (!next) {
        if (x === 0) {
          x = fighters[y].length - 1;
        } else {
          x--;
        }
        
        if (fighters[newY][x]) {
          next = fighters[newY][x];
        }
      }
      
      y = newY;
    }
    
    results.push(fighters[y][x])
  })
  
  return results;
}
