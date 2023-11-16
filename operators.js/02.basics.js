// Introduction to the JavaScript comma operator
// JavaScript uses a comma (,) to represent the comma operator. A comma operator takes two expressions, 
// evaluates them from left to right, and returns the value of the right expression.

// Here’s the syntax of the comma operator:
// leftExpression, rightExpression

let x = 10;
let y = (x++, x + 1);

console.log(x, y);
// Ouput:11 12
