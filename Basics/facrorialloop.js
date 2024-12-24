
let factorial = 1;
let num = 7;

// Check if number is 0 or 1
if (num == 0 || num == 1) {
  console.log("Factorial of", num, "is 1");
} 
// Check if number is negative
else if (num < 0) {
  console.log("Factorial is not defined for negative numbers");
} 
// Calculate factorial for positive numbers
else {
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  console.log("Factorial of", num, "is", factorial);
}

const date = new Date
console.log('date',date)
 
window

