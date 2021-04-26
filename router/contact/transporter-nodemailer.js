const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport({
    host:"smtp.gmail.com",
    service:"gmail",
    port:587,
    requiresAuth:true,
    auth: {
        user:"codeurcodeur52@gmail.com",
        pass:"djedemin"
        }
});


module.exports = transport;