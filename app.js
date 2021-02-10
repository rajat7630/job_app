var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var session = require("express-session");
var mongoose = require("mongoose");
var User = require("./db_schama/user_schema");
mongoose.connect("mongodb://localhost/job_search_app", { useUnifiedTopology: true, useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
	secret: 'job application',
	resave: true,
	saveUninitialized: false
}));
app.get("/", function (req, res) {
	res.redirect("/job_search");
});

app.get("/job_search", function (req, res) {
	res.render("home.ejs");
});

app.get("/job_search/login", function (req, res) {
	res.render("form.ejs");

});

app.post("/job_search/login", async (req, res) => {
	console.log(req.body)
	try {
		let user = await User.findOne({
			email
		});
		if (!user) {

			res.redirect("/job_search/login");
		}
		res.redirect("/job_search");
	}
	catch (e) {
		console.log(e);
		res.redirect("/job_search/login");
	}
	res.redirect("/job_search");
})

app.get("/job_search/signup", function (req, res) {
	res.render("form2.ejs");
});
app.post("/job_search/signup", function (req, res) {
	// res.render("form2.ejs");
	console.log(req.body);
	var userData = {
		email: req.body.email,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	}
	//use schema.create to insert data into the db
	User.create(userData, function (err, user) {
		if (err) {
			return next(err)
		} else {
			return res.redirect('/profile');
		}
	});
	res.redirect("/job_search/login");
});

app.get("/job_search/skillquiz", function (req, res) {
	res.render("skill.ejs");
});

app.get("/job_search/home", function (req, res) {
	res.render("home2.ejs");
})

app.post("/job_search", function (req, res) {
	res.render("home2.ejs");
});

app.listen(8000, function () {
	console.log("Server has started!");
})
