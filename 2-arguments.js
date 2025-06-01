// Get all command line arguments
const args = process.argv;

// Calculate the number of actual arguments passed
// process.argv includes 'node' and the script path, so subtract 2
const numArgs = args.length - 2;

if (numArgs === 0) {
  console.log("No argument");
} else if (numArgs === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
