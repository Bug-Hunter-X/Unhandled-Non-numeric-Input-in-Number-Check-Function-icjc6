# Unhandled Non-numeric Input in Number Check Function

This repository demonstrates a common error in JavaScript: failure to handle non-numeric input in a function designed to check the sign of a number.  The original code throws an error if a non-number is provided. The solution adds input validation to prevent this error.

## Bug

The `checkNumber` function correctly identifies positive, negative, and zero numbers. However, if a string or other non-numeric value is passed, a runtime error occurs because of the comparison with numerical values.

## Solution

The improved `checkNumber` function now includes a check using `typeof` to ensure that the input `num` is a number before performing the comparison. If it's not a number, it logs an appropriate message. This prevents unexpected errors and makes the function more robust.
