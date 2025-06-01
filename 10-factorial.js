function factorial (n) {
  // Base case 1: Factorial of NaN is 1 (as per problem statement)
  // This also handles cases where n might become NaN during recursion, though unlikely with n-1.
  if (isNaN(n)) {
    return 1;
  }

  // Base case 2: Factorial of negative numbers.
  // Standard factorial isn't defined for negative integers.
  // To prevent infinite recursion (e.g., -1 * f(-2) * f(-3)...) and be consistent
  // with NaN yielding 1, we'll have negative inputs also yield 1.
  if (n < 0) {
    return 1;
  }

  // Base case 3: Factorial of 0 is 1 (standard mathematical definition)
  if (n === 0) {
    return 1;
  }

  // Recursive step: n! = n * (n-1)!
  // This applies for positive integers.
  return n * factorial(n - 1);
}

// Get the first command-line argument
const arg = process.argv[2];

// Convert the argument to an integer.
// If arg is undefined (no argument) or a non-numeric string, num will be NaN.
const num = parseInt(arg);

// Compute factorial and print it
console.log(factorial(num));
