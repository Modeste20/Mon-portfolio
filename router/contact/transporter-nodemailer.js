const nodemailer = require("nodemailer");
require('dotenv').config()


const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    service:"gmail",
    port:587,
    requiresAuth:true,
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD_EMAIL
    }
});


module.exports = transport;