const mongoose = require('mongoose');

var UserSignUp = mongoose.Schema({
  username: String,
  email:{
    type:String,
    required:true,
    unique:true,
  },
  hash: String
}, {timestamps: true});

const User=mongoose.model('User', UserSignUp);

module.exports =User;