var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express= require("express");
var app= express();

//mongoose.connect("mongodb://localhost/job_search_app");
//app.set("view engine","ejs");
//app.use(express.static(public));
//app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
	res.redirect("/job_search");
});

app.get("/job_search",function(req,res){
	res.render("home.ejs");
});

app.get("/job_search/login",function(req,res){
	res.render("form.ejs");
});

app.get("/job_search/signup",function(req,res){
	res.render("form2.ejs");
});

app.get("/job_search/skillquiz",function(req,res){
	res.render("skill.ejs");
});

app.get("/job_search/home",function(req,res){
	res.render("home2.ejs");
})

app.post("/job_search",function(req,res){
	res.render("home2.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Server has started!");
})
