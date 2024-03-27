const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")

// Built-in middleware
const static = path.join(__dirname, "../public2");
const views = path.join(__dirname, "templates", "views");
const partials = path.join(__dirname, "templates","partials");


// setting view engine
app.set("view engine","hbs");
app.set("views",views);
hbs.registerPartials(partials);

// app.use(express.static(static));

// template engine route
app.get("/", (req, res) => {
    res.render("index",{dynamic:"whassup"});
});
app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/about/*", (req, res) => {
    res.render("404",
    {error:"this about us page does not exist"});
});

app.get("*", (req, res) => {
    res.render("404",
    {error:"you hit an error page buddy"});
});

app.get("/", (req, res) => {
    res.sendFile("hello from the express server");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
