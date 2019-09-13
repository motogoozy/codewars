/*
Instructions
Given a mathematical expression as a string you must return the result as a number.

Numbers
Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

Operators
You need to support the following mathematical operators:

Multiplication *
Division / (as true division)
Addition +
Subtraction -
Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

Parentheses
You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e., all of the following are valid expressions.

1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10
And the following are invalid expressions

1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
Validation
You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

NOTE: Both eval and Function are disabled. Same goes for String.match.
  ['1+1', 2],
  ['1 - 1', 0],
  ['1* 1', 1],
  ['1 /1', 1],
  ['-123', -123],
  ['123', 123],
  ['2 /2+3 * 4.75- -6', 21.25],
  ['12* 123', 1476],
  ['2 / (2 + 3) * 4.33 - -6', 7.732],
*/

var calc = function (expression) {
   expression = expression.replace(/ /g, "");

   function parseString(expression) {
      //take in the expression string and return a list of operators and numbers
      expression = expression.replace(/--/g, "+");
      let result = [];
      let previousIndex = 0;
      let operators = ['-', '+', '*', "/"];
      for (let i = 0; i < expression.length; i++) {
         if (operators.includes(expression[i]) && previousIndex < i) {
            let previousNumber = parseFloat(expression.substring(previousIndex, i));
            result.push(previousNumber);
            result.push(expression[i]);
            previousIndex = i + 1;
         }

         if (i === expression.length - 1) {
            result.push(parseFloat(expression.substring(previousIndex)));
         }
      }
      return result;
   }

   let calculate = (charList) => {

      [1, '/', '-', '-', 11]

      let timesDivideIncomplete = true;
      let addSubtractIncomplete = true;
      while (timesDivideIncomplete) {
         timesDivideIncomplete = false;
         for (let i = 0; i < charList.length; i++) {
            if (charList[i] === '*' || charList[i] === '/') {
               let operator = charList[i];
               let before = charList[i - 1];
               let after = charList[i + 1];
               let result = operator === '*' ? before * after : before / after;

               charList.splice(i - 1, 3, result);
               timesDivideIncomplete = true;
               break;
            }
         }
      }
      while (addSubtractIncomplete) {
         addSubtractIncomplete = false;
         for (let i = 0; i < charList.length; i++) {
            if (charList[i] === '+' || charList[i] === '-') {
               let operator = charList[i];
               let before = charList[i - 1];
               let after = charList[i + 1];
               let result = operator === '+' ? before + after : before - after;

               charList.splice(i - 1, 3, result);
               addSubtractIncomplete = true;
               break;
            }
         }
      }
      return charList[0];
   }

   function finalCalc(expression) {
      if (expression.indexOf('(') !== -1) {
         let open = expression.lastIndexOf('(');
         let close = expression.indexOf(')', open);
         let value = finalCalc(expression.substring(open + 1, close));
         let newString = expression.substring(0, open) + value + expression.substring(close + 1);
         return finalCalc(newString);
      } else {
         return calculate(parseString(expression));
      }
   }
   return finalCalc(expression);
};

console.log(calc('(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-(-11))'));