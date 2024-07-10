// Import the prompt-sync module to read user input
const prompt = require('prompt-sync')();

// Define a function to check if a triangle can be built with given sides
function isTriangle(a, b, c) {
  // If any side is less than or equal to 0, it's not a valid triangle
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  // Check if the sum of any two sides is greater than the third side
  // This is a necessary condition for a triangle to be valid
  return a + b > c && a + c > b && b + c > a;
}

let a = parseInt(prompt('a:'));
let b = parseInt(prompt('b:'));
let c = parseInt(prompt('c:'));

if (isTriangle(a , b, c)){
    console.log('true');
}else {
    console.log('false');
}

