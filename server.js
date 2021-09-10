const  express = require('express')
let app = express()
const handlebars = require("handlebars")
const hbs = require('express-handlebars');
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const flash = require("connect-flash");
const MemoryStore = require('memorystore')(session)
const serverless = require('serverless-http')



require("dotenv").config();

app.set('trust proxy', 1);

app.use(session({
    secret:"flashsession145269987",
    resave:false, 
    store: new MemoryStore({
        checkPeriod: 86400000
      }),
    saveUninitialized:true,
    cookie:{secure:false}
}));

app.use(function (req, res, next) {
    if (!req.session) {
      return next(new Error('oh no'));
    }
    next() 
  })
app.use(flash())
app.engine(".hbs",hbs({
    extname:".hbs",
    defaultLayout:null,
}));

app.set("views", path.join(__dirname,'views'))

app.set("view engine" , ".hbs")

//static file


app.use('/static',express.static(path.join(__dirname,'static')))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//routes

app.use('/',require("./router/index"));
app.use("/contact",require("./router/contact"))
app.use((req,res,next) =>{
   res.status(404).render("P404")
})

//Layout

handlebars.registerHelper("input-error",function(errors,arg){
    if(errors && errors[arg]){
        return "error";
    }
})

handlebars.registerHelper("check",function(errors,body,arg){
    if(errors !== undefined && Object.keys(errors).length !== 0 && !errors[arg]){
        return body[arg];
    }
})


handlebars.registerHelper("boolean",function(errors,body){
   if(Boolean(errors && body)){
       return true
   } else{
       return false;
   }
})

handlebars.registerHelper("json",function(arg){
    return JSON.stringify(arg)
})

handlebars.registerPartial("header-portfolio",require('./views/layout/header-portfolio.hbs'));

handlebars.registerPartial('header',require('./views/layout/header.hbs'));

handlebars.registerPartial('footer',require("./views/layout/footer.hbs"))


// run server

let port = process.env.PORT
if(port === null || port === ''){
    port = 4000
}

app.listen(port,() =>{
    console.log("En écoute sur le port 3000"+process.env.PORT)
})