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

  module.exports = mongoose.model('user', userSchema)