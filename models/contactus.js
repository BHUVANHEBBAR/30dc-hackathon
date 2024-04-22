const mongoose = require('mongoose');
const userSchema=new mongoose.Schema({
   name:String,
   mobile:String,
   email:String,
   City:String,
   dob:String
  });
  module.exports = mongoose.model('contact', userSchema);