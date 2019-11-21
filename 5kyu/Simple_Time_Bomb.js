/*
https://www.codewars.com/kata/simple-time-bomb/train/javascript

A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey);
*/

const keys = Object.keys(this);
const wire = keys[keys.length - 1];

CutTheWire(this[wire]);