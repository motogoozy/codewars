/* 
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid. 

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens) {
   let openCount = 0;
   let closeCount = 0;
   if (parens.startsWith('(') && parens.endsWith(')')) {
      parens.split('').forEach(p => {
         if (p === '(') openCount++;
         else closeCount++
      });
      if (openCount === 0 && closeCount === 0) return false;
      else if (openCount === closeCount) return true;
      else return false;
   } else return false;
}

validParentheses("(())((()())())")