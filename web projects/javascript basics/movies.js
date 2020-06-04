var movies = [
	{
		name: "In Bruges",
		rating: 5,
		seen: false
	},
	{
		name: "Frozen",
		rating: 4.5,
		seen: true
	},
	{
		name: "Mad Max Fury",
		rating: 5,
		seen: true
	},
	{
		name: "Good Times",
		rating: 3.5,
		seen: false
	}


]
movies.forEach(function(movie){
	if(movie.seen){
		console.log("You have seen \""+movie.name+"\" - "+movie.rating+" stars")
	}
	else{
		console.log("You have not seen \""+movie.name+"\" - "+movie.rating+" stars")
	}
})

var body = document.querySelector("body");
var isBlue = false;


setInterval(function(){
	if(isBlue){
		body.style.background = "white";
	}
	else{
		body.style.background = "#3498db";
	}
	isBlue = !isBlue;
},1000);