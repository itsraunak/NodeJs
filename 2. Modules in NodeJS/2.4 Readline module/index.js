// Import required module
const readline = require("readline");

const Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const Solution = () => {
    // Write your code here
    Interface.question("Enter the first number: ", (num1) => {
        Interface.question("Enter the second number: ", (num2) => {
            const max = Math.max(Number(num1), Number(num2));
            console.log(`The maximum of two number is: ${max}`);
        });
    });
};

Solution();
module.exports = Solution;
