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
   let levenshtein = function (word) {
      if (word === term) {
         return 0
      }
      if (term.length === 0) {
         return word.length
      }
      if (word.length === 0) {
         return term.length
      }
      let v0 = new Array(term.length + 1);
      let v1 = new Array(term.length + 1);
      for (let i = 0; i < v0.length; i++) {
         v0[i] = i;
      }
      for (let i = 0; i < word.length; i++) {
         v1[0] = i + 1;
         for (let j = 0; j < term.length; j++) {
            let cost = word.charAt(i) === term.charAt(j) ? 0 : 1;
            v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
         }
         let tmp = v0;
         v0 = v1;
         v1 = tmp;
      }
      return v0[term.length];
   }
   return this.words.sort(function (a, b) {
      return levenshtein(a) - levenshtein(b)
   })[0];
}

// fruits = new Dictionary(['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry']);
// fruits.findMostSimilar('strawbery'); // must return "strawberry"
// fruits.findMostSimilar('berry'); // must return "cherry"

// things = new Dictionary(['stars', 'mars', 'wars', 'codec', 'codewars']);
// things.findMostSimilar('coddwars'); // must return "codewars"

let languages = new Dictionary(['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript']);
languages.findMostSimilar('heaven');