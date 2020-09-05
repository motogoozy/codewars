/*
https://www.codewars.com/kata/596557071f13e4e86a000019

Quick start
The rules of this ship are the same as before but...

Now there are sharks! The first mate is deathly afraid of sharks. An island has sharks if there is an 's' one square to the north, south, east or west of an island. This island has sharks in all those positions:

'~', 's', '~'
's', 'u', 's'
'~', 's', '~'
And now there is treasure! We like treasure. An island has treasure if it is one square to the north, south east or west of an island.

Aboard your ship, you have some rules for choosing an island to conquer...


Rules (highest priority first)
Conquer an unoccupied island. If there are no unoccupied islands, conquer one of the marines' islands (but better a "sharked" island than marines...).
Conquer an island with the least number of sharks.
Conquer the island closest to any of our home islands (the p items / distances are computed as Manhattan distances).
If there is a tie, conquer the island with more treasures!

Complete Instructions
You are a captain on a pirate ship. You are looking to conquer islands, so that you can do lots of piratey stuff on those islands. Let's take a look at your pirate map of the area:


Map
												y
         0    1    2    3    4    5    6    7

	0    ['~', '~', '~', '~', '~', '~', '~', '~'],
	1    ['~', '~', '~', '~', 's', 'p', '~', '~'],
	2    ['~', '~', '~', '~', '~', '~', '~', '~'],
	3    ['p', 't', 'u', '~', '~', '~', '~', '~'],
x 4    ['~', '~', '~', '~', 'm', '~', '~', '~'],
	5    ['~', '~', '~', '~', '~', '~', '~', '~'],
	6    ['~', '~', '~', '~', '~', '~', '~', '~'],
	7    ['~', '~', '~', '~', '~', '~', '~', '~']];
Where:

'p' = pirate (that's our home island). There will always be at least one home island.
'u' = unoccupied island
'm' = island occupied by marines
't' = treasure!
's' = shark
'~' = ocean waves
The map size will always be 8 x 8. Each of 'p', 'u', 'm' and '~' can occur in any space of the map.
Coordinates are given as [x,y] (examples from the above map: 'p' at [0, 0], 'u' at [3, 2], 'm' at [4, 4]).


Input
A see map, formatted as an array of arrays of strings.

Output
Return an array containing all the best candidates (ordered by lowest x coordinate, then lowest y), or an empty array if no island to conquer.


Examples:
Example 1:

	map = [
		['~', 't', 'u', 't', '~', '~', '~', '~'],
		['~', '~', '~', 'p', '~', '~', '~', '~'],
		['u', 't', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', 'p', '~'],
		['~', '~', '~', '~', '~', '~', '~', 'u']];
solution = [[0, 2]]
There are several unoccupied islands, but we'll return the one with the most treasure nearby.


	map = [
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', 'p', '~', '~', '~'],
		['~', '~', 'm', '~', '~', '~', '~', '~'],
		['~', '~', '~', 's', 'u', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', 'p']];
solution = [[4, 4]]
It's higher priority to take an unoccupied island with sharks than an island with marines.


	map = [
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', 'p', 'm', '~', '~', '~', '~'],
		['m', 't', 'm', 'p', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', 'm', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~'],
		['~', '~', '~', 'm', '~', '~', '~', '~'],
		['~', '~', '~', '~', '~', '~', '~', '~']];
solution = [[2, 0], [2, 2]]
There are two islands that can claim that one treasure, so it's a tie.
*/

const map = [
	['~', '~', '~', '~', '~', '~', '~', '~'],
	['~', '~', 'p', 'm', '~', '~', '~', '~'],
	['m', 't', 'm', 'p', '~', '~', '~', '~'],
	['~', '~', '~', '~', '~', '~', '~', '~'],
	['~', '~', '~', '~', '~', 'm', '~', '~'],
	['~', '~', '~', '~', '~', '~', '~', '~'],
	['~', '~', '~', 'm', '~', '~', '~', '~'],
	['~', '~', '~', '~', '~', '~', '~', '~']];

function conquerIsland(map) {
	let pLocations = [];
	let uLocations = [];
	let mLocations = [];
	let priorityLocations;
	let bestU = [];
	let bestM = [];
	let bestPriority = [];

	const getDistance = (homeCoordinates, islandCoordinates) => {
		let xDistance = Math.abs(homeCoordinates[0] - islandCoordinates[0]);
		let yDistance = Math.abs(homeCoordinates[1] - islandCoordinates[1]);
		return xDistance + yDistance;
	};

	const getCount = (item, islandCoordinates) => {
		let count = 0;
		const x = islandCoordinates[0];
		const y = islandCoordinates[1];

		if (x-1 >= 0) { // north
			if (map[x-1][y] === item) count++;
		}
		if (y+1 < map[x].length) { // east
			if (map[x][y+1] === item) count++;
		}
		if (x+1 < map.length) { // south
			if (map[x+1][y] === item) count++;
		}
		if (y-1 >= 0) { // west
			if (map[x][y-1] === item) count++
		}

		return count;
	};
	
	// getting coordinates of islands
	map.forEach((row, x) => {
		row.forEach((location, y) => {
			if (location === 'p') {
				pLocations.push([x, y])
			} else if (location === 'u') {
				uLocations.push([x, y]);
			} else if (location === 'm') {
				mLocations.push([x, y]);
			}
		});
	});

	if (uLocations.length === 0 && mLocations.length === 0) return [];
	
	// u islands take priority over m islands
	if (uLocations.length > 0) {
		priorityLocations = uLocations;
		bestPriority = bestU;
	} else if (mLocations.length > 0) {
		priorityLocations = mLocations;
		bestPriority = bestM;
	}

	pLocations.forEach(p => {
		priorityLocations.forEach(e => {
			let eObj = {
				location: e,
				distanceFromP: getDistance(p, e),
				sharks: getCount('s', e),
				treasures: getCount('t', e)
			};

			if (bestPriority.length === 0) {
				bestPriority.push(eObj);
			} else {
				if (eObj.sharks < bestPriority[0].sharks) {
					bestPriority = [eObj];
				} else if (eObj.sharks === bestPriority[0].sharks) {
					if (eObj.distanceFromP < bestPriority[0].distanceFromP) {
						bestPriority = [eObj];
					} else if (eObj.distanceFromP === bestPriority[0].distanceFromP) {
						if (eObj.treasures > bestPriority[0].treasures) {
							bestPriority = [eObj];
						} else if (eObj.treasures === bestPriority[0].treasures) {
							if (!bestPriority.some(e => JSON.stringify(e.location) === JSON.stringify(eObj.location))) {
								bestPriority.push(eObj);
							}
						}
					}
				}
			}
		})
	})

	let coordinateList = bestPriority.map(item => item.location);
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

console.log(conquerIsland(map));
