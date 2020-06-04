var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
var middleware = require("../middleware");

//show index page
router.get("/",function(req,res){

	
	Campground.find({},function(err,allCampgrounds){
		if (err) {
			console.log(err);
		}
		else{
			res.render("campgrounds/index",{campgrounds:allCampgrounds,currentUser: req.user});
		}
	})
	
	
});


//add new campground
router.get("/new",middleware.isLoggedIn,function(req,res){
	res.render("campgrounds/new");
})

// create a new campground
router.post("/",middleware.isLoggedIn,function(req,res){
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var price		= req.body.price;
	var author ={
		id: req.user._id,
		username: req.user.username
	}
	var newCampground = {name: name, image: image,description:description,author:author,price:price};
	Campground.create(newCampground,function(err,campground){
		if(err){
			console.log(err);
		}
		else{
			console.log("Newly Created ");
			console.log(campground);
			res.redirect("/campgrounds");
		}
	
	});
});

//show a campground
router.get("/:id",function(req,res){
	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if (err) {
			console.log(err);
		}
		else{
			
			res.render("campgrounds/show",{campground:foundCampground});
		}
	})
	
});

//edit campground route
router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){

	
		Campground.findById(req.params.id , function(err, foundCampground){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
				res.render("campgrounds/edit",{campground: foundCampground});
		}
	})
	
});

//update campground

router.put("/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds/"+req.params.id);
		}
	})
})

//destroy route

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
	Campground.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect("/campgrounds");
		}
		else{
			res.redirect("/campgrounds");
			
		}
	})
})




module.exports = router;