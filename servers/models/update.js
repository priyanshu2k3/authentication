const mongoose = require('mongoose');

var UpdateData = mongoose.Schema({
  Username: String,
  Address:String,
  Country:String,
  State:String,
  Pincode:Number,
  Phonenumber:Number,
  BloodGroup:String,
  Gender:String,
  Birthday:String,
}, {timestamps: true});

const Update=mongoose.model('Update',UpdateData);

module.exports =Update;


// console.log(Name,Address,Country,State,Pincode,Phonenumber,Bloodgroup,Gender,Birthday,"inside profile.js")
