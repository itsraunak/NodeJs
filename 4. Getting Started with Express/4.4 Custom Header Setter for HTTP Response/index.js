// Please don't change the pre-written code

const express = require("express");
const server = express();

// Set custom header on response object
const setCustomHeader = (res, Contenttype, applicationType) => {
    // Write your code here
    return res.set(Contenttype, applicationType);
};

// Route that uses the setCustomHeader function
server.get("/", (req, res) => {
    setCustomHeader(res, "Content-Type", "application/json");
    res.send(`get method called!`);
});

module.exports = { setCustomHeader, server };
