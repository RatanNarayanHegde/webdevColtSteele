var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name:"Clouds Rest ",
		image:"https://images.unsplash.com/photo-1579911092621-fd9212a786c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium. Sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Lacus viverra vitae congue eu consequat ac felis donec et. In tellus integer feugiat scelerisque varius. Sem nulla pharetra diam sit. Id nibh tortor id aliquet lectus. Accumsan tortor posuere ac ut consequat semper viverra nam. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Est ultricies integer quis auctor elit."
	},
	{
		name:"Brown Mountains ",
		image:"https://images.unsplash.com/photo-1579706783492-081a217cd55e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium. Sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Lacus viverra vitae congue eu consequat ac felis donec et. In tellus integer feugiat scelerisque varius. Sem nulla pharetra diam sit. Id nibh tortor id aliquet lectus. Accumsan tortor posuere ac ut consequat semper viverra nam. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Est ultricies integer quis auctor elit."
	},
	{
		name:"Smokey Volcano",
		image:"https://images.unsplash.com/photo-1579623430776-9ca237d80b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=60",
		description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim eu turpis egestas pretium. Sit amet purus gravida quis blandit. Auctor urna nunc id cursus metus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Lacus viverra vitae congue eu consequat ac felis donec et. In tellus integer feugiat scelerisque varius. Sem nulla pharetra diam sit. Id nibh tortor id aliquet lectus. Accumsan tortor posuere ac ut consequat semper viverra nam. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Est ultricies integer quis auctor elit.Fusce ut placerat orci nulla pellentesque dignissim enim. Augue interdum velit euismod in. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Et leo duis ut diam quam. Non consectetur a erat nam at lectus"
	}
]

function seedDB(){

	//Remove all campgrounds
	Campground.deleteMany({},function(err){
		/*if(err){
			console.log(err);
		}
		else{
			console.log("removed campgrounds");
			data.forEach(function(seed){
				Campground.create(seed,function(err,campground){
					if(err){
						console.log(err);
					}
					else{
						console.log("campground added");
						//create a comment
						Comment.create(
						{
							text: "This place is great , but I wish there was internet",
							author: "Joker"
						},function(err,comment){
							if(err){
								console.log(err);
							}
							else{
								campground.comments.push(comment);
								campground.save();
								console.log("Created a new comment")
							}

						})
					}
				})
			})
		}*/
	});


	
}

module.exports = seedDB;

