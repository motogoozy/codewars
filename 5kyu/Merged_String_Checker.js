/*
https://www.codewars.com/kata/merged-string-checker/train/javascript

At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears
*/

const firstIdx = string => string.substr(0, 1)
const lastIdx = string => string.substr(1)
const isEmpty = string => string === ''
const firstCharEqual = (part1, part2) => firstIdx(part1) === firstIdx(part2)

const isMerge = (string, part1, part2) => {
   if (isEmpty(string))
      return isEmpty(part1) && isEmpty(part2)
   else if (firstCharEqual(string, part1) && firstCharEqual(string, part2))
      return isMerge(lastIdx(string), lastIdx(part1), part2) || isMerge(lastIdx(string), part1, lastIdx(part2))
   else if (firstCharEqual(string, part1))
      return isMerge(lastIdx(string), lastIdx(part1), part2)
   else if (firstCharEqual(string, part2))
      return isMerge(lastIdx(string), part1, lastIdx(part2))
   else
      return false
}

isMerge('codewars', 'cdw', 'oeasrs');