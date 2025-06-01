// Define the add function as required
function add (a, b) {
  return a + b;
}

// Get the first command-line argument
const arg1 = process.argv[2];
// Get the second command-line argument
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Call the add function with the converted numbers and print the result
console.log(add(num1, num2));
