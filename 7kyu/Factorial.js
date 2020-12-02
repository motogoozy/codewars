function factorial(n) {
  if (n < 0 || n > 12) throw new RangeError();
  if (n === 0 || n === 1) return 1;
  
  let result = n;
  while (n > 2) {
    n--;
    result *= n;
  }
  
  return result;
}


