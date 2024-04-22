import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
   name:String,
   mobile:String,
   email:String,
   City:String,
   dob:String
  });
  export default mongoose.model('contact', userSchema);