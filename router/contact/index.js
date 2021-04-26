const slugify = require("slugify");
const validator = require("validator");

const router = require("express").Router();

router.get("/",(req,res) =>{
    const [success] = req.flash("success") || "";
    const [errorInfo] = req.flash("info-error") || "";
    const [error] = req.flash("error") || "";
    const [body]= req.flash("body")
    if(error){
        res.render('contact',{errors:error,body})
    }
    res.render("contact",{success,"info-error":errorInfo,body});
})
router.post("/"+slugify("envoyez moi un message"),(req,res) =>{
    const {body} = req;
    req.flash('body',body);
    const errors = require("./validation")(body)
   if(Object.keys(errors).length !== 0){
       req.flash("error",errors) ;
       res.redirect("/contact");
   }else{
         const transport = require("./transporter-nodemailer")

        const mailOptions = {
			from:req.body.email,
			to:"codeurcodeur52@gmail.com",
			subject: req.body.objet,
			text:`Salut , Le nommé ${req.body.name} ${req.body.surname} avec l'email ${req.body.email} vous addresse le message suivant : ${req.body.message}`
		};
        transport.sendMail(mailOptions,(error) =>{
            if(error){
                req.flash('info-error',"Désolé , une erreur est survenue lors de l'envoie du message.Veuillez Réessayer ultérieurement.")
                res.redirect('/contact')
            } else{
                req.flash('success',"Message envoyé avec succès.");
                res.redirect("/contact")
            }
        })
       
   }
})

module.exports = router;