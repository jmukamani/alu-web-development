console.log("Start of the execution queue");

setTimeout(() => {
  console.log("Final code block to be executed using setTimeout");
}, 0);

for (let i = 0; i < 100; i++) {
  console.log(`Iteration ${i}`);
}

console.log("End of the loop printing");