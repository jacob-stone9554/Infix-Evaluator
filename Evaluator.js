//author: Jacob Stone
//version: 0319202401

//this application serves the functionality of a calculator.
//the program will accept a string expr from the user.
//it will parse the string and determine what operation needs carried out.
//once the operation is complete, it will display the result on the console.


//create the input interface. rl is short for readline
const rl = require('readline').createInterface( {
    input: process.stdin,
    output: process.stdout
});

//necessary fields
let components;
let operand1;
let operand2;
let operator;
let result;

//prompt user, read in input and assign it to expr
rl.question("Enter expression: ", expression => {
    components = expression.split(" ");

    result = eval(components)

    console.log(result);
    rl.close; //close the interface
});

//this function looks at the elements in the array of components
function eval(args) {
    for(let i = 0; i < args.length; i++) {
        if(isNumeric(args[i])) {
            if(i == 0) {
                operand1 = args[i];
            }
            else {
                operand2 = args[i];
            }
        }
        else if(isOperator(args[i])) {
            operator = args[i];
        }
        else if(args[i] == " ") {
            //don't process the whitespace, do nothing
        }
    }

    //determine what operation to carry out on the operands based on what the entered operator was
    switch(operator) { 
        case "+":
            result = parseFloat(operand1) + parseFloat(operand2); //addition
            break;
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2); //subtraction
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2); //multiplication
            break;
        case "/":
            if(operand2 == 0){
                result = "ERROR: Cannot divide by 0!"; //handle division by 0
            }
            else{
                result = parseFloat(operand1) / parseFloat(operand2); //division
            }
            break;
        case "%":
            if(operand2 == 0){
                result = "ERROR: Cannot perform modular arithmetic on 0!" //handle modulo by 0
            }
            else{
                result = parseFloat(operand1) % parseFloat(operand2); // modulo
            }
            break;
        case "**":
            result = parseFloat(operand1) ** parseFloat(operand2); //exponentiation
            break;
        default: 
            console.log("Error");  //otherwise, there is a problem!
    }

    return result; //pass back the result of the operations
}

//check to see if an expression component is a number using regex matching
function isNumeric(str) {
    return /^[0-9]+$/.test(str); //returns true or false
}

//check to see if an expression component is an operator using regex matching
function isOperator(str) {
    return /^[+\-\*\/\%]|(\*\*)/.test(str); //returns true or false
}

