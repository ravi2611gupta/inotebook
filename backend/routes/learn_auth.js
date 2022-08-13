const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

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

// Create a user using : POST "/api/auth/". Dosen't require Auth (without auth)
// router.post('/', (req, res)=>{
//     console.log(req.body)
//     // res.send("Hello ravi")
//     const user = User(req.body);
//     user.save();
//     res.send(req.body)
// })

// Create a user using : POST "/api/auth/". (with auth)
router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({
          error: "Please enter a unique value for email",
          message: err.message,
        });
      });
  }
);

module.exports = router;
