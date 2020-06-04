var express = require("express");
var app=express();

app.get("/",function (req,res) {
	// body...
	res.send("HI There!!");
});

app.get("/bye",function (req,res) {
	// body...
	res.send("Good Bye");
});

app.get("/cat",function (req,res) {
	// body...
	res.send("Meow Meow");
});

app.get("/r/:subReddit",function(req,res){
	var subReddit = req.params.subReddit;
	res.send("Welcome to "+subReddit+" subreddit");
});

app.get("*",function(req,res) {
	res.send("You are a star!!");
});

app.listen(3000,function(){
	console.log("server has started");
});