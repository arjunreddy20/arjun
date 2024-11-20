const express = require("express");
const path = require("path");

const rootDirectory = require("../utility/path");
const router = express.Router();

router.get("/success",(req,res,next)=> {
    res.sendFile(path.join(rootDirectory, "views", "success.html"));
})
router.post("/success",(req,res,next) => {
    if (req.body){
        res.redirect("/suc/success");
    }
})
module.exports=router;