var nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 3000,
    auth: {
        user: "<user>",
        pass: "<pass>"
    }
})

var message = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Subject',
    text: 'Yeah man nakamou !'
};

transporter.sendMail(message, function(err, info){
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
})