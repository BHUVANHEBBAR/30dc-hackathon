const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


const contactModel = require('./models/contactus.js');
const contactus = require('./models/contactus.js');
const sendmail=async (req,res)=>{
    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
 // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'tractorbuddyapp@gmail.com',
      pass: 'bvbt buvb zyoc niyc ',
    },
  });

  var obj={
    name:req.body.name,
    mobile:req.body.mobile,
    email:req.body.email,
    City:req.body.city,
    dob:req.body.date
}  
console.log(obj.email)
const today = new Date();
const formattedDate = today.toDateString();
const mailOptions = {
    from:'"Tiny Sprouts"<tractorbuddyapp@gmail.com>',
    to:obj.email,
    subject:`you contacted us on ${formattedDate}`,
    text: `Tiny sprouts academy is a Nursery well established in your City:${obj.City}`
}

contactus.findOne({email:obj.email}).exec().then((users)=>{
    if(!users){
        contactus.create(obj);
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent:' + info.response);
            }
           
        });
    }
    else{
        const mailoptions={from:'"Tiny Sprouts"<tractorbuddyapp@gmail.com>',
        to:obj.email,
        subject:`you contacted us on ${formattedDate}`,
        text: `Tiny Sprouts Academy is a Nursery well established in your City: ${obj.City}.\n\nIt seems you have already reached us. We will get back to you soon.`}
        transporter.sendMail(mailoptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent:' + info.response);
            }
           
        });
    }
 });

 
res.send(obj);




};
module.exports=sendmail;