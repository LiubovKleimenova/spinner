const arr = [
  "|  ",
  "/  ",
  "-  ",
  "\\  "
];
let time = 200;
for (let  i = 5; i>0; i--) {
  for (const elem of arr) {
  setTimeout(() => {
    process.stdout.write("\r" + elem);
  }, time);
  time += 200;
}
}

