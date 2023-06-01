const mydiv = require("./Calculator/div");
const multiplication = require("./Calculator/multiply");
const Addition = require("./Calculator/add");
const substraction = require("./Calculator/sub");
const { parse } = require("path");



const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);
const choice  = process.argv[3];

if(choice === "div")
{
    console.log(mydiv(num1,num2));
}else if(choice === "sub")
{
   console.log(substraction(num1,num2))
}else if(choice === "add")
{
   console.log(Addition(num1,num2));
}else if(choice === "mul")
{
    console.log(multiplication(num1,num2));
}