//this program will check to see an entered string is a valid or invalid mathematical expression
//valid operations include: + - * / % and **
//it uses stringcutter to process the expression into components
//for now, parentheses will be invalid

let validExpr = "23 ** 2"; //test expression

let components = validExpr.split(" ");

let operand1;
let operand2;
let operator;

for(let n = 0; n < components.length; n++) {
    console.log(components[n]);
}

console.log(""); //whitespace

//this loop iterates over the components of the expression
//it sets the values for the operation
for(let i = 0; i < components.length; i++) {
    if(checkNumeric(components[i])) {
        console.log("This part of the expression is a number: " + components[i]);

        //if its the first element of the expression, assign operand1
        //otherwise, assign operand 2
        if(i == 0) {
            operand1 = components[i];
        }
        else {
            operand2 = components[i];
        }
    }
    else if(components[i] == " "){
        //do nothing with the whitespace
    }
    else if(checkOperator(components[i])) {
        console.log("this part of the expression is an operator: " + components[i]);
        operator = components[i];
    }
}

let result;

if(operator == '+') {
    result = parseInt(operand1) + parseInt(operand2);
    console.log(result);
}







//this function checks to see whether a string contains only numbers
function checkNumeric(str){
    return /^[0-9]+$/.test(str);
}

function checkOperator(str){
    return /^[\+\-\*\/\%]|(\*\*)/.test(str);
}