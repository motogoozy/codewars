function convertCaseOpp(str) {
   str = str.split('');
   for (var i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
         str[i] = str[i].toLowerCase();
      } else if (str[i] === str[i].toLowerCase()) {
         str[i] = str[i].toUpperCase();
      }
   }
   return str.join('');
}

convertCaseOpp("Hello World");