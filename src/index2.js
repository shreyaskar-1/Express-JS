const express = require("express");
const path = require("path");
const app = express();

// Built-in middleware
const static = path.join(__dirname, "../public2");
app.use(express.static(static));

app.get("/", (req, res) => {
    // Sending index2.html when root route is accessed
    res.sendFile(path.join(__dirname, "../public2/index2.html"));
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
