const express = require('express')
const app = express();
const path = require("path");

const staticPath = path.join(__dirname,"../public")


// builtin middleware
// app.use(express.static(staticPath))

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.get('/about', function (req, res) {
//     res.send('Ram Ram Ladder')
//   })

app.listen(3000)
