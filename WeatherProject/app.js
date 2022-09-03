const express =require("express");
const https =require("https");
const bodyParser=require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  //as we are working for many places we need to show according to user places
  res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){

  const query=req.body.cityname;
  const appid="1f9abcaa1fb8dc2d0e4b0e6637ddba44";
  const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid+"&units=metric";
 https.get(url,function(response){
  console.log(response.statusCode);
  response.on("data",function(data){
    const weatherData =JSON.parse(data);
    //data we get is in hexadecimal code the JSON converts it into text
 const place=weatherData.name;
 const desc=weatherData.weather[0].description;
 const tem=weatherData.main.temp;
 const icon =weatherData.weather[0].icon;
 const weatherId=weatherData.weather[0].id;
 const imageURL= "http://openweathermap.org/img/wn/"+icon+"@2x.png";
 const des="<p>"+place+" will have "+desc+"</p>";
 const val="<h1>In "+place+" temperature will be "+tem+" Celcius</h1>";
 res.write(des);
 res.write(val);
 res.write("<img src="+imageURL+">");
 res.send();
});
});
});
  // const object = {
  //   name : "Angela",
  //   favouriteFood: "Ramen"
  // }
// console.log(JSON.stringify(object));
// //makes the well defined object into JSON code
  // res.send("Server is up and running");
  //cant have more than one send
  //here we send the data back to client browser
  //but their can be multiple res.write()

app.listen(3000,function(){

  console.log("Server is running at local host 3000");
});
