const connectToMongo = require('./db');
connectToMongo();

// install a nodemon module using ---- npm i -D nodemon
// install a nodemon module using ---- npm install -g nodemon
// hit again this command after installing the nodemon ---- nodemon .\index.js


// express js boilerplate start
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port  http://localhost:${port}`)
})
// express js boilerplate end