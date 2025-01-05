function checkNumber(num) {
  if (typeof num !== 'number') {
    console.log("Invalid input: Not a number");
    return;
  }
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

checkNumber(5); // Output: Positive
checkNumber(-3); // Output: Negative
checkNumber(0); // Output: Zero
checkNumber("hello"); // Output: Invalid input: Not a number
checkNumber(true); // Output: Invalid input: Not a number