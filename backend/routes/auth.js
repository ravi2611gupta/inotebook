const express = require('express');
const User = require('../models/User');
const router = express.Router();

// if you want to use req.body than you have to use a middleware in index file(express.json() ===>>> app.use(express.json()))

// router.get('/', (req, res)=>{

//     // sending something in body or request
//     console.log(req.body);
//     res.send("Hello");


//     // obj = {
//     //     name:"ravi",
//     //     number:34
//     // }

//     // // this line can convert JS OBJECT into JSON ⤵️⤵️⤵️⤵️
//     // res.json(obj)

// })


// Create a user using : POST "/api/auth/". Dosen't require Auth
router.post('/', (req, res)=>{
    console.log(req.body)
    // res.send("Hello ravi")
    const user = User(req.body);
    user.save();
    res.send(req.body)
})


module.exports = router