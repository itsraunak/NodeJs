// Please don't change the pre-written code

const express = require("express");
const server = express();

const renderStatic = (server, add) => {
    // Write your code here
    server.use(express.static(add));
};

server.get("/", (req, res) => {
    res.send("get method called!");
});
const add = "./public";
renderStatic(server, add);

module.exports = { renderStatic, server };

// const express = require("express");
// const path = require("path");
// const server = express();
// const staticPath = path.join(__dirname, "public");

// const renderStatic = (server, staticPath) => {
//   server.use(express.static(staticPath));
// };

// server.get("/", (req, res) => {
//   res.send("get method called!");
// });

// renderStatic(server, staticPath);

// module.exports = { renderStatic, server };
