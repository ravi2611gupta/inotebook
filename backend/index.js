const connectToMongo = require('./db');
connectToMongo();

// install a nodemon module using ---- npm i -D nodemon
// install a nodemon module using ---- npm install -g nodemon
// hit again this command after installing the nodemon ---- nodemon .\index.js


// express js boilerplate start
const express = require('express')
const app = express()
// const port = 3000
const port = 5000


// if you want to use req.body than you have to use a middleware (express.json)
app.use(express.json())
// available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/api/v1/login', (req, res) => {
//     res.send('this is login!')
// })

// app.get('/api/v1/signup', (req, res) => {
//     res.send('this is signup!')
// })

app.listen(port, () => {
    console.log(`iNotebook backend listening on port  http://localhost:${port}`)
})
// express js boilerplate end