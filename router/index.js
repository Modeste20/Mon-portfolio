const router = require("express").Router()

router.get("/",(req,res) =>{
    const info = req.flash('info');
    if(info){
        res.render("index",{info:info[0]});
    } else{
        res.render("index")
    }
})

router.get("/projets",(req,res) =>{
    res.render("projets")
})

router.get('/Landry',(req,res) =>{
    res.render("me")
})

module.exports = router;