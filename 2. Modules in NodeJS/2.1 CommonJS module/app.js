// Note:  Please do not change the prewritten code

// import the required module here
const math = require("./math.js");

const Solution = () => {
    const nums = [1, 2, 3, 4, 5];

    console.log(`The sum is ${math.sum(nums)}.`);
    console.log(`The mean is ${math.mean(nums)}.`);
};
Solution();
module.exports = Solution;