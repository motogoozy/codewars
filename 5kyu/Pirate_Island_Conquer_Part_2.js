/*
https://www.codewars.com/kata/5962b98c2e8c8b02fa0000b4/train/javascript

Description

This kata is part of a series! You may want to start with part 1:

Pirate Island Conquer Part 1

Quick instructions

If you haven't completed part 1, scroll down for the complete instructions. If you completed part 1, part 2 is similar with the following changes:

The pirate home island is not only at [0, 0].
There is between 1 and 3 pirate home islands.
Task

Return the coordinates [y, x] of the closest island to occupy. If there is a tie between one or more islands, return all of them, sorted first from lowest to highest 'y' values, then by 'x' values. [[y, x], [y, x]...]

Input : 2D array [[Strings]]

Output : array of integer coordinates [y, x]. Or 2D array [[y, x]].

Complete Instructions

Description

You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:

Map

                     x
      0    1    2    3    4    5    6    7

0    ['~', '~', '~', '~', '~', '~', '~', '~'],
1    ['~', '~', '~', '~', '~', 'p', '~', '~'],
2    ['~', '~', '~', '~', '~', '~', '~', '~'],
3    ['p', '~', 'u', '~', '~', '~', '~', '~'],
y 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
5    ['~', '~', '~', '~', '~', '~', '~', '~'],
6    ['~', '~', '~', '~', '~', '~', '~', '~'],
7    ['~', '~', '~', '~', '~', '~', '~', '~']];
where 'p' = pirate (that's our home island)

'u' = unoccupied island

'm' = island occupied by marines

'~' = ocean waves

The map size will always be 8 x 8. Each of 'p', 'u', 'm' and '~' can occur in any space of the map.

Coordinates

Given as [y, x]. Examples from the above map:

'p' at [0,0]

'u' at [3, 2]

'm' at [4, 4]

Number of each label in one map:

'p' 1 to 3

'u' 0 to 5

'm' 0 to 5

Aboard your ship, you have some rules for choosing an island to conquer.

Rules (in order of highest priority)

Conquer an unoccupied island if possible. If there are no unoccupied islands on the map, conquer one of the marines' islands.

Conquer the island closest to any of our home islands (the 'p' items). If there is a tie between two or more islands the same distance away, return the location of both. (But rule #1 has higher priority).

How to conquer an island

Return the coordinates of the island to be conquered [y, x]. If there is a tie between two or more islands the same distance away, return all the coordiantes [[y, x], [y, x]...].

Distance

Pirates can only move vertically and horizontally, not diagonally. Moving one index in the array is one unit of distance. Examples:

Example 1: The 'u' island is 2 units away:

   ['p', '~', 'u', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ...
Example 2: The 'u' island is 3 + 2 = 5 units away.

   |  ['p', '~', '~', '~', '~', '~', '~', '~'],
   |  ['~', '~', '~', '~', '~', '~', '~', '~'],
3  |  ['~', '~', '~', '~', '~', '~', '~', '~'],
   |  ['~', '~', 'u', '~', '~', '~', '~', '~'],
   |---------->
      2
Task

Write a function that accepts a 2D array representing the map and return the coordinates of the island to conquer. If there are no 'm' or 'u' islands on the map, return an empty array []. If there is a tie between two or more islands the same distance away, return the location of all of them.

Input: [[Strings]] 8 x 8 2D array of strings.

Output:

For one island: [int, int] y and x coordinates given as integers [y, x].

Or, for a tie, [[y, x], [y, x]...] sorted by lowest 'y' to highest, then by lowest 'x' to highest.

Examples:

Example 1:

   map = [
   ['p', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', 'm', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', 'u', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~']];
There is a 'u' and an 'm'. Rules say we conquer a 'u' if possible, so...

solution = [4, 4]

Example 2:

   map = [
   ['p', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', 'm', '~', '~', '~', '~'],
   ['m', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', 'm', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', 'm', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~']];
Example 3:

   map = [
   ['p', '~', '~', '~', '~', '~', '~', '~'],
   ['~', 'm', '~', 'm', '~', '~', '~', '~'],
   ['m', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', 'm', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', 'm', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~']];
There are no 'u' islands, so we'll take an 'm'. But wait! There are two the same distance away.

solution = [[1, 1], [2, 0]]; ***Not [[2, 0], [1, 1]] lowest 'y' value first.

Example 4:

map = [
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', 'p', 'm', '~', '~', '~', '~'],
   ['m', '~', 'm', 'p', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', 'm', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', 'm', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~']];
There are no 'u' islands, so we'll take the closest two 'm' islands.

solution = [[1, 3], [2, 2]]
*/

const map = [
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', 'p', 'm', '~', '~', '~', '~'],
   ['m', '~', 'm', 'p', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', 'm', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~'],
   ['~', '~', '~', 'm', '~', '~', '~', '~'],
   ['~', '~', '~', '~', '~', '~', '~', '~']];

function conquerIsland(map) {
   let pLocations = [];
   let uLocations = [];
   let mLocations = [];
   let closestU = [];
   let closestM = [];
   
   const getDistance = (homeCoordinates, islandCoordinates) => {
      let yDistance = Math.abs(homeCoordinates[0] - islandCoordinates[0]);
      let xDistance = Math.abs(homeCoordinates[1] - islandCoordinates[1]);
      return yDistance + xDistance;
   }
   
   map.forEach((row, y) => {
      row.forEach((location, x) => {
         if (location === 'p') {
            pLocations.push([y, x])
         }
         else if (location === 'u') {
            uLocations.push([y, x]);
         } else if (location === 'm') {
            mLocations.push([y, x]);
         }
      });
   });

   pLocations.forEach(p => {
      if (uLocations.length > 0) {
         uLocations.forEach(u => {
            const uObj = {
               location: u,
               distanceFromP: getDistance(p, u)
            };

            if (closestU.length === 0) {
               closestU.push(uObj);
            } else {
               if (uObj.distanceFromP < closestU[0].distanceFromP) {
                  closestU = [uObj];
               } else if (uObj.distanceFromP === closestU[0].distanceFromP && !closestU.some(e => JSON.stringify(e.location) === JSON.stringify(uObj.location))) {
                  closestU.push(uObj);
               }
            }
         })
      } else {
         mLocations.forEach(m => {
            const mObj = {
               location: m,
               distanceFromP: getDistance(p, m)
            };

            if (closestM.length === 0) {
               closestM.push(mObj);
            } else {
               if (mObj.distanceFromP < closestM[0].distanceFromP) {
                  closestM = [mObj];
               } else if (mObj.distanceFromP === closestM[0].distanceFromP && !closestM.some(e => JSON.stringify(e.location) === JSON.stringify(mObj.location))) {
                  closestM.push(mObj);
               }
            }
         })
      }
   })

   let list;

   if (closestU.length > 0) {
      list = closestU;
   } else if (closestM.length > 0) {
      list = closestM;
   } else return [];

   let coordinateList = list.map(item => item.location);

   if (coordinateList.length === 1) {
      return coordinateList[0];
   } else {
      return coordinateList.sort((a, b) => {
         if (a < b) return -1;
         else if (a > b) return 1;
         else return 0;
      })
   }
};

conquerIsland(map)