const div = require("./Calculator/div");
const multiply = require("./Calculator/multiply");
const add = require("./Calculator/add");
const sub = require("./Calculator/sub");



let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[4]);
let choice  = process.argv[3].trim();

if(choice.includes("DIV"))
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: %`);
    console.log(div(num1,num2));
}else if(choice.includes("SUB"))
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: -`);
   console.log(sub(num1,num2))
}else if(choice.includes("ADD"))
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: +`);
   console.log(add(num1,num2));
}else if(choice.includes("MULTIPLE"))
{
    console.log(`Number 1: ${num1} Number2: ${num2} Operation: X`);
    console.log(multiply(num1,num2));
}