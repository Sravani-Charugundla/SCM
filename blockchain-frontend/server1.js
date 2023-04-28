const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/vendor.html"));
})

const server = app.listen(5001);
const portNumber = server.address().port;
console.log("server: "+ portNumber);