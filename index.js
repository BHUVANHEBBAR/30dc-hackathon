const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sendmail = require('./controllers/sendmail');
const feeddata=require('./controllers/feeddata');
const contactModel = require('./controllers/models/contactus');
const dburl="mongodb+srv://tractorbuddyapp:CFqW6wPM91vcbuNZ@cluster0.346nge9.mongodb.net/Nursery?retryWrites=true&w=majority&appName=Cluster0";

mongoose
	.connect(dburl)
	.then(() => {
		console.log("connected to db");
	})
	.catch((error) => {
		console.error("Error signing up:", error);
		res.status(500).send("Internal Server Error");
	});


const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req,res) => {
   res.send("hi");
});
app.get("/s",feeddata);
app.post("/s",sendmail);
app.listen(port,()=>{
    console.log("listening on port"+port);
});