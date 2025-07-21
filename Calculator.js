const num1 = 20;
const num2 = 5;
const operator = "+";  

if (operator === "+") {
  console.log("Result: " + (num1 + num2));
} else if (operator === "-") {
  console.log("Result: " + (num1 - num2));
} else if (operator === "*") {
  console.log("Result: " + (num1 * num2));
} else if (operator === "/") {
  if (num2 !== 0) {
    console.log("Result: " + (num1 / num2));
  }
}