const nodemailer = require('nodemailer');
const sendmail=async (req,res)=>{const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
 // Use `true` for port 465, `false` for all other ports
    auth: {
      user: 'tractorbuddyapp@gmail.com',
      pass: 'bvbt buvb zyoc niyc ',
    },
  });
const mailOptions = {
    from:'"Maddison Foo Koch 👻"<tractorbuddyapp@gmail.com>',
    to:"bhuvantgh@gmail.com",
    subject: 'Test Email',
    text: 'This is a test email sent from Nodemailer.'
}
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
res.send("sent email");
};
module.exports=sendmail;