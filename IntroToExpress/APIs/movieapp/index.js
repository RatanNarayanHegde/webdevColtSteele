var express = require("express");
var app = express();
var request = require("request");

app.get("/",function(req,res){
	res.render("search");
});

app.set("view engine","ejs");
app.get("/results",function(req,res){
	var title = req.query.title;
	request("http://www.omdbapi.com/?apikey=f42153da&s="+title,function(error,response,body){
		if(!error && response.statusCode == 200){
			var parsedData = JSON.parse(body);
			res.render("results",{data :parsedData});
		}
	})

});

app.listen(3000,function(){
	console.log("Movie server started");
})