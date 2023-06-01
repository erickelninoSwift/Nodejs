// const div = require("./Calculator/div");
// const multiply = require("./Calculator/multiply");
// const add = require("./Calculator/add");
// const sub = require("./Calculator/sub");



// let num1 = parseInt(process.argv[2]);
// let num2 = parseInt(process.argv[4]);
// // let choice  = process.argv[3].trim();

// if(choice === "DIV")
// {
//     console.log(`Number 1: ${num1} Number2: ${num2} Operation: %`);
//     console.log(div(num1,num2));
// }else if(choice === "SUB")
// {
//     console.log(`Number 1: ${num1} Number2: ${num2} Operation: -`);
//    console.log(sub(num1,num2))
// }else if(choice === "ADD")
// {
//     console.log(`Number 1: ${num1} Number2: ${num2} Operation: +`);
//    console.log(add(num1,num2));
// }else if(choice === "MULTIPLE")
// {
//     console.log(`Number 1: ${num1} Number2: ${num2} Operation: X`);
//     console.log(multiply(num1,num2));
// }

const fileSystem = require('fs');


fileSystem.writeFile('./erickelnino.txt','Hi how are you doing today',(error) =>{

    error ? console.log(`File could not be created : ${error}`) : console.log("File was created successfully");

})