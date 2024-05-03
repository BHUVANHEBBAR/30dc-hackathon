import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import nodemailer from 'nodemailer';
import contactus from '../models/contactus.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dburl = "mongodb+srv://tractorbuddyapp:CFqW6wPM91vcbuNZ@cluster0.346nge9.mongodb.net/Nursery?retryWrites=true&w=majority&appName=Cluster0";


mongoose
	.connect(dburl)
	.then(() => {
		console.log("connected to db");
	})
	.catch((error) => {
		console.error("Error signing up:", error);
	});

//Nodemailer

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user:'tractorbuddyapp@gmail.com',
  pass:'bvbt buvb zyoc niyc',
}});


  app.post('/submit', async (req, res) => {
    try {
      // Create a new FormData instance with the request body data
      var formData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        kids_name : req.body.kids_name,
        email: req.body.email,
        city: req.body.city,
        date: req.body.date
      };
     
  
      // Prepare the email message
      const mailOptions = {
        from: 'tinybudsaca.edu.in',
        to: req.body.email,
        subject: 'Form Submission Confirmation',
        text: `Thank you for submitting the form. Your form data is as follows:\n\nFirst Name: ${formData.first_name}\nLast Name: ${formData.last_name}\nKids Name: ${formData.kids_name}\nEmail: ${formData.email}\nCity: ${formData.city}\n \nWe'll contact you soon.`,
      };
      contactus.findOne({email:formData.email}).exec().then((users)=>{
        if(!users){
          contactus.create(formData);
          transporter.sendMail(mailOptions);
        }
        else{
          const mailOptions = {
            from: 'tinybudsaca.edu.in',
            to: req.body.email,
            subject: 'Form Submission Confirmation',
            text: `It seems you have already reached us. We will get back to you soon.
            Thank you for submitting the form. Your form data is as follows:\n\nFirst Name: ${formData.first_name}\nLast Name: ${formData.last_name}\nKids Name: ${formData.kids_name}\nEmail: ${formData.email}\nCity: ${formData.city}\n\nWe'll contact you soon.`,
          };
          transporter.sendMail(mailOptions);

        }
      });
      
  
      // Send a response indicating success
      res.send('Form data saved and email sent successfully');
    } catch (error) {
      // Handle any errors that occur during saving or sending the email
      console.error('Error saving form data or sending email:', error);
      res.status(500).send('An error occurred while saving the form data or sending the email');
    }
  });
  app.get('/contacts', async (req, res) => {
    try {
      const contacts = await contactus.find().lean();
      res.json(contacts);
      console.log(contacts);
    } catch (error) {
      console.error("Error fetching contact data:", error);
      res.status(500).json({ message: "An error occurred while fetching contact data" });
    }
  });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });