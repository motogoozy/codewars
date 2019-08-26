function titleCase(title, minorWords) {
   var titleCased = [];
   var words = title.toLowerCase().split(" ");
   if (minorWords) {
      var minorWordsArr = minorWords.toLowerCase().split(" ");
   }

   for (var num = 0; num < words.length; num++) {
      var currentWord = words[num];
      if (minorWords == undefined) {
         titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1));
      } else {
         if (!minorWordsArr.includes(currentWord) || num === 0) {
            titleCased.push(currentWord[0].toUpperCase() + currentWord.slice(1));
         } else {
            titleCased.push(currentWord);
         }
      }
   }
   return titleCased.join(" ");
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('the quick brown fox'));
titleCase('THE WIND IN THE WILLOWS', 'The In');