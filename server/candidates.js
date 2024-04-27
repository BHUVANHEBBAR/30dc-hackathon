import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import contactus from './contactus.js';

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
    console.error("Error connecting to MongoDB:", error);
  });

// Route to fetch contact data
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
