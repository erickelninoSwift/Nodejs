const mydiv = require("./Calculator/div");
const multiplication = require("./Calculator/multiply");
const Addition = require("./Calculator/add");
const substraction = require("./Calculator/sub");



const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
const choice  = process.argv[3];

if(choice === "DIVIDE")
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: %`);
    console.log(mydiv(num1,num2));
}else if(choice === "SUB")
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: -`);
   console.log(substraction(num1,num2))
}else if(choice === "ADD")
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: +`);
   console.log(Addition(num1,num2));
}else if(choice === "MULTIPLE")
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: X`);
    console.log(multiplication(num1,num2));
}