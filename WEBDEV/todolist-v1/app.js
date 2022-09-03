const express =require("express");
const bodyParser =require("body-parser");
const app =express();
const date=require(__dirname+"/date.ejs");
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//it takes by default that you create a views folder in which it searchs
//html files to be rendered
/*
we were using
res.sendFile(__dirname+"/file.html");
etc
*/
let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
  // var currentDay =today.getDay();
  // var day="";

  //
  // if(currentDay==1)day="Monday";
  //
  // if(currentDay==2)day="Tuesday";
  //
  // else if(currentDay==3)day="Wednesday";
  //
  // else if(currentDay==4)day="Thursday";
  //
  // else if(currentDay==5)day="Friday";
  //
  // else if(currentDay==6)day="Saturday";
  // else if(currentDay==0)day="Sunday";
//generally switch is used if thier arre more than 5 such conditions

app.get("/",function(req,res){

  let day=date.getDay();
res.render('list',{ListTitle:day,newListItems:items});

});

app.get("/work",function(req,res){
 res.render('list',{ListTitle:"Work",newListItems:workItems});

});

app.get("/about",function(req,res){
  res.render("about");
});

app.post("/",function(req,res){
//  console.log(req.body);
  let item=req.body.newItem;

  if(req.body.Submit === "Work"){
  workItems.push(item);
  res.redirect("/work");
  }
  else{
  items.push(item);
  res.redirect("/");
}
});

//post from list file takes input and here we recieve it using post
// to add it to list we need to use render
// however we use render only once for rest we redirect to "/"root , and when we
//render we declare all we are rendering
// and if make it a var it just keep replacing we need to make it array
// and in the list file we must make changes so it works with for loop with each
//li tag with new item



app.listen(3000,function(){
  console.log("Server started on port 3000");
});
