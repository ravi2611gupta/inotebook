const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs"); //for salting and papering of password
const jwt = require("jsonwebtoken");

const JWT_SECRET = "raviisaboodboy";

// Create a user using : POST "/api/auth/createuser". (no login required)
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be atleast 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // if there are errors, returns bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check whether the user with this email exits already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists" });
      }

      // console.log(user);

      const salt = await bcrypt.genSalt(10);
      //   secPass = bcrypt.hash(password, salt)
      const secPass = await bcrypt.hash(req.body.password, salt);

      // create a new user 👦🏽
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        // password: req.body.password,
        password: secPass,
      });

      // res.json({"nice":"nice"});
      // res.json(user); //we will not send any user we just send the signed token to the server
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      //   console.log(jwtData);
      //   res.json(authToken);
      res.json({ authToken });

      // .then(user => res.json(user))
      // .catch(err =>{
      // console.log(err)
      // res.json({error: 'Please enter a unique value for email', message:err.message})})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

module.exports = router;
