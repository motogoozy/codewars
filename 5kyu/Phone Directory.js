// https://www.codewars.com/kata/56baeae7022c16dd7400086e

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const nums = [0,1,2,3,4,5,6,7,8,9];

function phone(strng, num) {
  const dir = strng.split('\n');
  const entries = dir.filter(entry => entry.includes(num));
  
  if (!entries.length) {
    return `Error => Not found: ${num}`;
  } else if (entries.length > 1) {
    return `Error => Too many people: ${num}`;
  }
  
  const entryArr = entries[0].split('');
  
  const nameStart = entryArr.findIndex(char => char === '<');
  const nameEnd = entryArr.findIndex(char => char === '>') + 1;
  const nameLength = nameEnd - nameStart;
  const nameArr = entryArr.splice(nameStart, nameLength);
  nameArr.shift();
  nameArr.pop();
  const name = nameArr.join('');
  
  const trimmedEntry = entryArr.join('').trim();
  const address = trimmedEntry
    .split(' ')
    .filter(item => !item.includes('+'))
    .join(' ')
    .trim()
    .split('')
    .filter(char => {
      const allowed = [' ', '-', '_', '.']
      if (alphabet.includes(char.toLowerCase()) || nums.includes(+char) || allowed.includes(char)) return true;
      return false;
    })
    .join('')
    .replace('_', ' ')
    .replace( /\s\s+/g, ' ' ) // remove double spaces
    .trim();
  
  const phone = num.slice(1);
  
  return `Phone => ${num}, Name => ${name}, Address => ${address}`;
}
