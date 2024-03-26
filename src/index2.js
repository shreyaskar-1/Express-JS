const express = require("express");
const path = require("path");
const app = express();

// Built-in middleware
const static = path.join(__dirname, "../public2");
// how to change the name of views

const template = path.join(__dirname, "../src/templates");


// setting view engine
app.set("view engine","hbs");
app.set("views",template);

// app.use(express.static(static));

// template engine route
app.get("/", (req, res) => {
    res.render("index",{dynamic:"whassup"});
});

app.get("/", (req, res) => {
    res.sendFile("hello from the express server");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
