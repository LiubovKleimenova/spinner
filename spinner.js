const arr = [
  "|  ",
  "/  ",
  "-  ",
  "\\  ",
  "|  ",
  "/  ",
  "-  ",
  "\\  ",
  "|  ",
  "/  ",
  "-  ",
  "\\  "
];
let time = 200;
for (const elem of arr) {
  setTimeout(() => {
    process.stdout.write("\r" + elem);
  }, time);
  time += 200; 
  // <= 1s delay to make it noticeable. Can dial it down later.
}

