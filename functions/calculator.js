const calculator={
    "add":(a,b)=> a+b,
    "sub":(a,b)=> a-b,
    "mult":(a,b)=>a*b,
    "div":(a,b)=>a/b
}
function performOperation(operation, num1, num2) {
    switch (operation.toLowerCase()) {
        case 'add':
            console.log(`Result of ${num1} + ${num2}:`, this.add(num1, num2));
            break;
        case 'sub':
            console.log(`Result of ${num1} - ${num2}:`, this.subtract(num1, num2));
            break;
        case 'multiply':
            console.log(`Result of ${num1} * ${num2}:`, this.multiply(num1, num2));
            break;
        case 'divide':
            console.log(`Result of ${num1} / ${num2}:`, this.divide(num1, num2));
            break;
        default:
            console.log('Invalid operation');
    }
}
performOperation.call(calculator,"add",5,3);