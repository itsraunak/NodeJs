// Please don't change the pre-written code
// Import the necessary modules here
const fs = require("fs");

const Solution = () => {
    // Write your code here
    // const buffer = fs("./notes.txt", { encoding: "utf8" });
    fs.writeFileSync("notes.txt", "The world has enough coders ");
    const buffer = fs.readFileSync("notes.txt", "utf-8");
    console.log(buffer);

    fs.appendFileSync("notes.txt", "BE A CODING NINJA!");

    const data = fs.readFileSync("notes.txt", "utf8");
    console.log(data);

    fs.unlinkSync("notes.txt");
};
Solution();
module.exports = Solution;
