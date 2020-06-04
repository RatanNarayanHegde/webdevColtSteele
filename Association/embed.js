var mongoose = require("mongoose");


mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/blog_demo", {useNewUrlParser: true});

//post
var postSchema = new mongoose.Schema({
	title:String,
	content:String
});

var Post = mongoose.model("Post",postSchema);


// User
var userSchema = new mongoose.Schema({
	email:String,
	name: String,
	posts:[postSchema]
});

var User = mongoose.model("User",userSchema);





var newUserr = new User({
	email:"qwertyef@brown.edu",
	name:"Hermoine Granger"
});

newUserr.posts.push({
	title:"Harry Potter",
	content:"I used to like Harry potter but now i dont anymore"
});

newUserr.save(function(err,user){
	if(err){
		console.log(err);
	}
	else{
		console.log(user);
	}
})


var newPost = new Post({
	title:"Reflectons on apples",
	content:"They are very delicious"
});

newPost.save(function(err,post){
	if(err){
		console.log(err);
	}
	else{
		console.log(post);
	}
});

User.findOne({name:"Hermoine Granger"},function(err,user){
	if(err){
		console.log(err);
	}
	else{
		//console.log(user);
		user.posts.push({
			title:"Other Classics",
			content:"Lord of the rings , the hobbit"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}
			else{
				console.log(user);
			}
		});
	}
})
