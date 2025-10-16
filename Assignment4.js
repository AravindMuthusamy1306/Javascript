const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (num) => {
    const number = parseInt(num);
    console.log(`The Number is ${number}`);
    rl.close();
    if(number > 10){
        console.log("The number is greater than 10");
    } else {
        console.log("The number is less than or equal to 10");
    }
});