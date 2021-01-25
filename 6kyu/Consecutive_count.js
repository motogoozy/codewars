function getConsectiveItems(items, key) {
  let arr;
  if (typeof items === 'number') {
    arr = items
      .toString()
      .split('')
      .map(e => parseInt(e));
  } else {
    arr = [...items];
  }
  if (!arr.includes(key)) return 0;

  let highestCount = 0;
  let currentCount = 0;
  arr.forEach(item => {
    if (item === key) {
      currentCount++;
    } else {
      currentCount = 0;
    }

    if (currentCount > highestCount) {
      highestCount = currentCount;
    }
  });

  return highestCount;
}
