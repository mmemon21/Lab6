const express=require("express");
const app=express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
   res.render("index.html"); 
});

app.get("*", function(req, res){
   res.send("Sorry, Page not found!"); 
});

app.get("/mercury", function(req, res){
   res.render("mercury.html"); 
});

app.get("/uranus", function(req, res){
   res.render("uranus.html"); 
});

app.get("/venus", function(req, res){
   res.render("venus.html"); 
});

app.get("/earth", function(req, res){
   res.render("earth.html"); 
});

//Listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has been started");
});
