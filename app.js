
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const app = express();

const adminRoutes = require("./routes/admin");
const ShopRoutes = require("./routes/shop");
const contactRoute = require("./routes/contact")
const succesROUte = require("./routes/success")
app.use(bodyParser.urlencoded({extended : false}));
//next() allows to execute next function
app.use(express.static(path.join(__dirname,"public")));

app.use("/shop",ShopRoutes);
app.use("/admin",adminRoutes);
app.use("/contact",contactRoute);
app.use("/suc",succesROUte);


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})
app.listen(3000);