// const div = require("./Calculator/div");
// const multiply = require("./Calculator/multiply");
// const add = require("./Calculator/add");
// const sub = require("./Calculator/sub");

const { copyFileSync } = require("fs");



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

// const fileSystem = require('fs');


// fileSystem.writeFile('./erickelnino.txt','Hi how are you doing today',(error) =>{

//     error ? console.log(`File could not be created : ${error}`) : console.log("File was created successfully"); 

// })

// fileSystem.readFile('./erickelnino.txt','utf-8', (error,data) =>{
//     error ? console.log(`Error found while reading the file : ${error}`) : console.log(`Data : ${data}`);
// });

// fileSystem.rename('./erickelnino.txt','./jackpot.txt', (error) =>{

//     console.log(`${error ? `Error found while renaming the file : ${error}` : `File was renamed succesfully`}`);

// });

// fileSystem.unlink('./jackpot.txt', (error) =>{
//     error ? console.log(`Error while deleting file ${error}`) : console.log('file was deleted with success');
// });

const fileSystem = require("fs").promises;

async function getSum()
{
    let data = await fileSystem.readFile("./data.json",'utf-8');
    
    let dataJSOn = JSON.parse(data);

    dataJSOn.forEach(element => {
       console.log(element.Salary + 10);
    });

   console.log(dataJSOn);
}

getSum();
