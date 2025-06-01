const arg = process.argv[2];
const x = parseInt(arg);

if (isNaN(x)) {
  // This is our first console.log for the error case
  console.log("Missing number of occurrences");
} else {
  // Loop only if x is a positive number
  for (let i = 0; i < x; i++) {
    // This is our second console.log, used inside the loop
    console.log("C is fun");
  }
}
