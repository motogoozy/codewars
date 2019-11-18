/*
https://www.codewars.com/kata/5259510fc76e59579e0009d4

I'm sure, you know Google's "Did you mean ...?", when you entered a search term and mistyped a word. In this kata we want to implement something similar.

You'll get an entered term (lowercase string) and an array of known words (also lowercase strings). Your task is to find out, which word from the dictionary is most similar to the entered one. The similarity is described by the minimum number of letters you have to add, remove or replace in order to get from the entered word to one of the dictionary. The lower the number of required changes, the higher the similarity between each two words.

Same words are obviously the most similar ones. A word that needs one letter to be changed is more similar to another word that needs 2 (or more) letters to be changed. E.g. the mistyped term berr is more similar to beer (1 letter to be replaced) than to barrel (3 letters to be changed in total).

Extend the dictionary in a way, that it is able to return you the most similar word from the list of known words.

Code Examples:

fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
fruits.findMostSimilar('strawbery'); // must return "strawberry"
fruits.findMostSimilar('berry'); // must return "cherry"

things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
things.findMostSimilar('coddwars'); // must return "codewars"

languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven'); // must return "java"
languages.findMostSimilar('javascript'); // must return "javascript" (same words are obviously the most similar ones)
I know, many of you would disagree that java is more similar to heaven than all the other ones, but in this kata it is ;)

Additional notes:

there is always exactly one possible correct solution
*/

function Dictionary(words) {
   this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
   if (this.words.includes(term)) return term;
   let highScore = 0;
   let bestMatch = '';
   for (let word of this.words) {
      let basicDiff = this.basicDiff(term, word);
      let continualDiff = this.continualDiff(term, word);
      let diffScore = basicDiff < continualDiff ? basicDiff : continualDiff;
      if (diffScore < highScore || bestMatch === '') {
         highScore = diffScore;
         bestMatch = word;
      }
   }
   return bestMatch;
}

Dictionary.prototype.basicDiff = function (term, word) {
   let diffScore = 0;
   for (let i = 0; i < term.length; i++) {
      let termChar = term[i];
      let wordChar = word[i];
      if (termChar !== wordChar) {
         diffScore++;
      }
   }
   return diffScore;
}

Dictionary.prototype.continualDiff = function (term, word) {
   let diffScore = term.length;
   if (term.length === word.length) return diffScore;
   let sizeIndex = Math.abs(word.length - term.length) + 1;
   let longer = word.length >= term.length ? word : term;
   let shorter = longer === word ? term : word;
   for (let s = 0; s < sizeIndex; s++) {
      let currComp = shorter.length + sizeIndex;
      for (let i = 0; i < shorter.length; i++) {
         let shortC = shorter[i];
         let longC = longer[i + s];
         if (shortC === longC) currComp--;
      }
      if (currComp < diffScore) diffScore = currComp;
   }
   return diffScore;
}

// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"

// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"

let languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven');