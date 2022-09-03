// const a=2;
// //used in making containers
// const fs=require("fs");
// fs.copyFileSync("file1.txt","file2.txt");


var superheroes =require("superheroes");
var mySuperHeroName = superheroes.random();
var supervillains=require("supervillains");
var mySuperVillainName = supervillains.random();
console.log(mySuperHeroName +" VS "+mySuperVillainName);
