function add()
{
    console.log("You can add any number together");
}

function sub()
{
    console.log("You can substract numbers easly");
}
 function addNumbers(num1,num2){

    return num1 + num2;

}

module.exports = {add,sub};
module.exports.addNumbers = addNumbers;