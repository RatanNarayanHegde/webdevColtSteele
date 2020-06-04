var express = require("express");
var app = express();

app.get("/",function (req,res) {
	// body...
	res.send("Hi there , welcome to my assignment");
});

app.get("/speak/:animal",function(req,res){
	var animal = req.params.animal;
	if(animal === "pig"){
		res.send("The "+animal+" says 'Oink'");
	}
	else if(animal ==="cow"){
		res.send("The "+animal+" says 'Mooo'");
	}
});

app.get("/repeat/:str/:num",function(req,res){
	var string=req.params.str;
	var str="";
	var num=req.params.num;
	for (var i = 0; i < num; i++) {
		str=str+" "+string+" ";
	}
	res.send(str);
});

app.get("*",function(req,res){
	res.send("Sorry Page not found ");
});

app.listen(3000,function () {
	// body...
	console.log("server Started");
});