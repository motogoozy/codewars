//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers) {
   numbers = numbers.split(' ')
   let evens = [];
   let odds = [];
   numbers.forEach((num, index) => {
      num = parseInt(num)
      if (num % 2 === 0) {
         evens.push(index + 1)
      } else {
         odds.push(index + 1)
      }
   });
   if (evens.length > odds.length) {
      return odds[0]
   } else {
      return evens[0]
   }
}

iqTest("2 4 7 8 10")