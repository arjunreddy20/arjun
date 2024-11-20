const express = require("express");
const path = require("path");

const rootDirectory = require("../utility/path")
const router = express.Router();

router.get("/add-product",(req, res, next) => {
    console.log("in the sec middleware");
    res.sendFile(path.join(rootDirectory,"views","admin.html"));
}); 
router.post("/add-product",(req,res,next) => {
    console.log(req.body);
    res.redirect("/shop/");

})
router.post("/contactus",(req,res,next)=>{
    res.redirect("/contact/contactus");
})
module.exports=router;