var express 	= require("express"),
	mongoose 	= require("mongoose"),
	passport 	= require("passport"),
	bodyParser	= require("body-parser"),
	LocalStratergy = require("passport-local"),
	User 			= require("./models/user"),
	passportLocalMongoose = require("passport-local-mongoose");


mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost:27017/auth_demo", {useNewUrlParser: true});


var app= express();
app.set("view engine", "ejs");app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:true}));

app.use(require("express-session")({
	secret: "Rusty is the best and cutest dog in the world",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStratergy(User.authenticate()));


//==============
//Routes
//==============


app.get("/",function(req,res){
	res.render("home");
});

app.get("/secret",isLoggedIn,function(req,res){
	res.render("secret");
})

//Auth 
app.get("/register",function(req,res){
	res.render("register");
})

app.post("/register",function(req,res){
	req.body.username
	User.register(new User({username: req.body.username}),req.body.password,function(err,user){
		if(err){
			console.log(err);

		}
		else{
			passport.authenticate("local")(req, res,function(){
				res.redirect("/secret");
			})
		}
	});
 
})

app.get("/login",function(req,res){
	res.render("login");
})

app.post("/login", passport.authenticate("local",{
	successRedirect: "/secret",
	failureRedirect: "/login"
	}),function(req,res){

});

app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/")
})

function isLoggedIn(req, res , next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
}

app.listen(3000,function(){
	console.log("server started");
})