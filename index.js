// Problem No 3 & 4

const prompt = require("prompt-sync")();
let num = prompt("What is your age?");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3");
} else {
  console.log("Your number is not divisible by 2 and 3");
}
