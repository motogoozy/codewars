/*
https://www.codewars.com/kata/59473c0a952ac9b463000064/train/javascript

Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.


Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3 
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)
The right side letters and their power:

 m - 4
 q - 3 
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)
The other letters don't have power and are only victims.
The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.

mtq => wtp
wjs => mjz
A letter with adjacent letters j and t is not converted i.e.:

tmj => tmj
jzt => jzt
The priests (j and t) do not convert the other priests ( jt => jt ).

Example
alphabetWar("z")         //=>  "z"  => "Right side wins!"
alphabetWar("tz")        //=>  "ts" => "Left side wins!" 
alphabetWar("jz")        //=>  "jz" => "Right side wins!" 
alphabetWar("zt")        //=>  "st" => "Left side wins!" 
alphabetWar("azt")       //=> "ast" => "Left side wins!"
alphabetWar("tzj")       //=> "tzj" => "Right side wins!" 
*/

function alphabetWar (fight) {
  const leftPower = {
    t: 0, s: 1, b: 2, p: 3, w: 4
  }

  const rightPower = {
    j: 0, z: 1, d: 2, q: 3, m: 4
  }

  const fightPower = {
    left: 0,
    right: 0
  }

  const str = fight.split('')

  str.forEach((v, i) => {
    let power = leftPower[v] !== undefined ? 'left' : 'right'
    const prev = str[i-1]
    const next = str[i+1]
    const value = leftPower[v] || rightPower[v] || 0

    if ((prev === 't' && next !== 'j') || (next === 't' && prev !== 'j')) {
      if (power === 'right') {
        power = 'left'
      }
    } else if ((prev === 'j' && next !== 't') || (next === 'j' && prev !== 't')) {
      if (power === 'left') {
        power = 'right'
      }
    }

    fightPower[power] += value
  })

  if (fightPower.left === fightPower.right) {
    return "Let's fight again!"
  }

  return `${fightPower.left > fightPower.right ? 'Left' : 'Right'} side wins!`
}
