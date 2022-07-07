// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1

var beeramid = function(bonus, price) {
  let beers = Math.floor(bonus / price);
  
  let levels = 0;
  let num = 1;
  
  while (true) {
    if (beers >= (num * num)) {
      beers -= (num * num);
      levels++;
      num++;
    } else {
      break;
    }
  }
  
  return levels;
}
