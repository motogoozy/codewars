/* You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption */

function longestConsec(strArr, k) {
   var n = strArr.length;
   longest = '';
   str = ''

   if (n === 0 || k > n || k <= 0) {
      return "";
   }

   for (var i = 0; i < n; i++) {
      var currentStr = strArr.slice(i, k + i).join('');
      if (currentStr.length > str.length) {
         str = currentStr;
      }
   }
   return str;
}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)