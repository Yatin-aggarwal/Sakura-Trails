const express = require("express");
const path = require("path")
const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
var favicon = require('serve-favicon');
const mongoURI = "mongodb://127.0.0.1:27017/login";
var bodyParser = require('body-parser');



const create = require('./Routes/create.js');
const verify = require('./Routes/verify.js');
const authorize = require('./controllers/authorize.js');


mongoose.connect(mongoURI);
app = express();
app.use(cookieParser());
app.use(favicon(path.join(__dirname,  '22.ico')));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./")); 
app.set("view engine", 'ejs');
app.use(express.json());
app.set("views",path.resolve("Views") );
app.use("/create",create);
app.use("/verify",verify);



app.get('/',(req,res)=>{
   if(authorize(req.cookies.token)==1){
      return  res.redirect("/home");
      }
   return res.render("Login");
})
app.get('/signup', (req,res)=>{
   return res.render("Signup");
}); 
app.get('/login',(req, res)=>{
    if(authorize(req.cookies.token)==1){
      return  res.redirect("/home");
      }
   return res.render("Login");
});
app.get('/home',(req,res)=>{
  if(authorize(req.cookies.token)==0){
   return res.redirect("/login");
  }
  else{
   return res.send("Welcome to home");
  }
});
app.get('/about',(req,res)=>{
   return  res.send("hi")
})
app.use((req,res)=>{
    return res.send("404 not found");
})
app.listen(8080, ()=>{
    "Webmail";
})

