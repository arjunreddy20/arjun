const express = require("express");
const path = require("path");

const rootDirectory = require("../utility/path");

const router = express.Router();

router.get("/contactus", (req,res,next)=> {
    res.sendFile(path.join(rootDirectory, "views", "contactus.html"));
})

router.post("/contactus",(req,res,next) => {
    if (req.body){
        res.redirect("/contact/contactus");
    }

})
router.post("/success",(req,res,next) => {
    if (req.body){
        res.redirect("/suc/success");
    }
})
module.exports = router;