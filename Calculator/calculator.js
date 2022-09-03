const express =require("express");
const bodyParser=require("body-parser");
const app =express();

app.use(bodyParser.urlencoded({extended :true}));


app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");

});
//it shows error 404 that is client side error
//we need to post the answer

app.post("/bmiCalculator.html",function(req,res){
  var W =Number(req.body.weight);
  //they come as text to make it number we add it in Number()
  var H =Number(req.body.height);
  var BMI=W/(H*H);
  res.send("Your BMI is "+BMI);
});



app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
