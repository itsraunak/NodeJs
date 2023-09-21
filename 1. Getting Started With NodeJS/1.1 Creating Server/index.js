// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http");
// Write your code here

const server = http.createServer((req, res) => {
    res.end("Response received at port 8080.");
    // Welcome to Node js Server
});

server.listen(8080, () => {
    console.log("server is listening on port 8080");
});

module.exports = server;
