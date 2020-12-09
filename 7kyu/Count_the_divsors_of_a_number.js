function getDivisorsCnt(n){
  let count = 0;
  let current = 1;
  while (current <= n) {
    if (n % current === 0) {
      count++;
    }
    current++;
  }
  
  return count;
}
