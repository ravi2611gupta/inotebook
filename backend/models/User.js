const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

//   default:date.now ❌ default:Date.now ✅ will not work D should be capital (case-sensitive) 👆🏽

const User = mongoose.model('user', userSchema)
// User.createIndexes(); //because we don't want to create a new index named as email that's why we comment it out
module.exports = User