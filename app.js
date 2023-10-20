// Requiring
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //adds a global middleware for serving static files from my express application. Public is the folder that holds my static files.
app.set("view engine", "ejs"); //allows me to use ejs
app.set("views", path.join(__dirname, "/views"));

// Root Route connected to local server
app.get("/", function (req, res) {
  res.render("home.ejs");
});

// app.get for pages
app
  .route("/about")
  .get(function (req, res) {
    res.render("about");
  })
  .post()
  .delete();

app
  .route("/contact")
  .get(function (req, res) {
    res.render("contact");
  })
  .post()
  .delete();

app
  .route("/order")
  .get(function (req, res) {
    res.render("order");
  })
  .post()
  .delete();

app
  .route("/cart")
  .get(function (req, res) {
    res.render("cart");
  })
  .post()
  .delete();

app
  .route("/menu")
  .get(function (req, res) {
    res.render("menu");
  })
  .post()
  .delete();

// Listener for connecting to local server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
