var mongoose = require("mongoose");

var Post = require("./models/posts");

var User = require("./models/user")

mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true});

//post



// User

/*User.create({
	email:"bob@gmail.com",
	name:"Bob Belcher"
});*/

Post.create({
	title:"How to discipline 56",
	content:"Setadfadsf sdaf asdf  e motivated"

},function(err,post){
	User.findOne({email:"bob@gmail.com"},function(err,foundUser){
		if(err){
			console.log(err);
		}
		else{
			foundUser.posts.push(post);
			foundUser.save(function(err,data){
				if(err){
					console.log(err);
				}
				else{
					console.log(data);
				}
			})
		}
	})
});

/*User.findOne({email:"bob@gmail.com"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
});*/