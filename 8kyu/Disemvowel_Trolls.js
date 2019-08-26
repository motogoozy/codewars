function isVowel(char) {
   var vowels = "aeiouAEIOU"
   if (vowels.indexOf(char) > -1) {
      return true;
   } else {
      return false;
   }
}

function disemvowel(str) {
   var newStr = "";
   for (var i = 0; i < str.length; i++) {
      if (isVowel(str[i])) {
         newStr = newStr;
      } else {
         newStr = newStr + str[i];
      }
   }
   return newStr;
}

disemvowel("This website is for losers LOL!");