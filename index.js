// const div = require("./Calculator/div");
// const multiply = require("./Calculator/multiply");
// const add = require("./Calculator/add");
// const sub = require("./Calculator/sub");

// const { copyFileSync } = require("fs");



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

// const fileSystem = require("fs").promises;

// async function getSum()
// {
//     let data = await fileSystem.readFile("./data.json",'utf-8');
    
//     let dataJSOn = JSON.parse(data);

//     let sum  = 0;

//     dataJSOn.forEach(element => {
//        sum += element.Salary;
//     });

//    console.log(sum);
// }

// getSum();


// HTTP modules


// const http = require("http");
// const filesystem = require('fs').promises;


// const url = require('url');



// async function serverRunner()
// {


   

//     const server = http.createServer(async(request,response) =>{
   
//         console.log("Server is running now ");

//         const myURL = new URL(request.url,'http://localhost:3000/product?id=%27guccibag/');

//         console.log(myURL);
//         console.log(myURL.pathname);
    
//         const data = await filesystem.readFile('./index.html','utf-8',error =>{
//             error ? console.log('There was an error while trying to read file') : console.log("Document loaded with success");
//         })
    
//         response.writeHead(200,{'Content-type': 'text/html'});
//         response.end(data);
        
//     });
    
//     return server.listen(3000);

// }

// serverRunner();

import validator from "validator";

var myEmail = 'Erick@yahoo.com';
const name = "Erick";

console.log(validator.isEmail(myEmail))

console.log(validator.equals(name,'Erick'));

// URL Modules


// NPM modules



