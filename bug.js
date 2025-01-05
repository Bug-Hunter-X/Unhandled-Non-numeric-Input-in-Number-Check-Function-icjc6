function checkNumber(num) { 
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

//The bug is that when a non-numeric value is passed to the function the code will throw an error because it is not possible to compare a string to a number. The solution is to add a check at the beginning to see if the input is numeric. 