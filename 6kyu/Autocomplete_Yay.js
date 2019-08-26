function autocomplete(input, dictionary) {
   let words = [...dictionary]
   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   // remove non alphebetical characters from input
   let cleanInput = input.split('').filter(letter => alphabet.includes(letter.toLowerCase())).join('');
   // map over dictionary to see if any words contain the input string
   let matches = words.filter(word => word.toLowerCase().startsWith(cleanInput.toLowerCase())).slice(0, 5);
   return matches;
}

autocomplete('a&p*^', ['apple', 'Ape', 'ash', 'apricot', 'Ache'])