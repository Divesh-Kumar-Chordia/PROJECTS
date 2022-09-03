const express = require("express");

const app = express();
app.get("/",function(request,response){
  //console.log(request);//no response
response.send("<h1>Hello World !</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at : diveshkumarchordia@gmail.com");
})
app.get("/about",function(req,res){
  res.send("HI this website is owned by DIVESH KUMAR CHORDIA");
})
app.listen(3000,function(){

console.log("Server started on port 3000");
});
