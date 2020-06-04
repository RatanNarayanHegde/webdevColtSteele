var express = require("express");
var app = express();

app.set("view engine","ejs");


app.use(express.static("public"));

app.get("/",function(req,res){
	res.render("home");

})



app.get("/posts",function(req,res){
	var posts=[
		{title:"posts", author:"blah"},
		{title:"cats", author:"colt"},
		{title:"dogs", author:"karan"},
	];

	res.render("posts",{posts:posts});
});

app.get("/fallinlovewith/:thing",function(req,res){
	var thing =req.params.thing;
	res.render("love",{thingVar:thing});

});

app.listen(3000,function(){
	console.log("Server has started");
});