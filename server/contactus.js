import mongoose from "mongoose";

const contactusSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    kids_name : String,
    email : String,
    phone : String,
    city : String
});

export default mongoose.model('contactus', contactusSchema);