const arg = process.argv[2];
const size = parseInt(arg);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Only proceed if size is a positive number
  if (size > 0) {
    for (let i = 0; i < size; i++) {
      let row = "";
      for (let j = 0; j < size; j++) {
        row += "X";
      }
      console.log(row);
    }
  }
}
