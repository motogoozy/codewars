/*
https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function numberOfPairs(gloves) {
  const counts = {};
  
  gloves.forEach(color => counts[color] = counts[color] + 1 || 1);
  
  return Object.values(counts).reduce((pairs, count) => pairs + Math.floor(count / 2), 0)
}
