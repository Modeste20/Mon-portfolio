const validator = require("validator");

    module.exports = function (arg){
        
function validName (){
    if(!name){
        errors.name = "Veuillez entrez votre nom";
    }
    else if(parseInt(name)){
        errors.name = "Veuillez entrez un nom valide";
    }
    else if(!validator.isLength(name,{min:3})){
        errors.name = "Votre nom doit contenir plus de 3 caractères"
    } else{
        errors.name === undefined
    }
}

function validSurName (){
    if(!surname){
        errors.surname = "Veuillez entrez votre prénom";
    }
        
    else  if(parseInt(surname)){
        errors.surname = "Veuillez entrez un prénom valide";
    }
    else  if(!validator.isLength(surname,{min:3})){
        errors.surname = "Votre prénom doit contenir plus de 3 caractères";
    }  else{
        errors.surname === undefined
    }
}

        let errors = {};
        const {name,surname,email,objet,message}  = arg ;

        validName();
        validSurName();
        if(!validator.isEmail(email)){
            errors.email = "Veuillez entrez un email valide";
        }
        if(!message){
            errors.message = "Veuillez entrez votre message";
        }

        return errors;
    }
