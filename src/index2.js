const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs")
const requests = require("requests");

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
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=609f40e66cc25bd1959951ffce8b5818`)
    .on('data', (chunk) => {
            const objdata = JSON.parse(chunk);
            console.log("Response from API:", objdata); 
            // if (objdata && objdata.name && objdata.main && objdata.main.temp) {
                console.log(`City name is ${objdata.name} and the temp is ${objdata.main.temp}`);
                res.write(objdata.name);
            // } else {
            //     console.log("Invalid response format:", objdata);
            //     res.write("Invalid data received from the API");
            // }
    })
    .on('end', (err) => {
        if (err) {
            console.log('Connection closed due to errors', err);
            res.write("Error processing API response");
        }
        res.end();
    });
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
