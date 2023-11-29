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

// About Page
app
  .route("/about")
  .get(function (req, res) {
    res.render("about");
  })
  .post();

// Custom Order Page
app
  .route("/custom-order")
  .get(function (req, res) {
    res.render("custom-order");

    // const inputs = document.querySelectorAll(".input");

    // function focusFunc() {
    //   let parent = this.parentNode;
    //   parent.classList.add("focus");
    // }

    // function blurFunc() {
    //   let parent = this.parentNode;
    //   if (this.value == "") {
    //     parent.classList.remove("focus");
    //   }
    // }

    // inputs.forEach((input) => {
    //   input.addEventListener("focus", focusFunc);
    //   input.addEventListener("blur", blurFunc);
    // });
  })
  .post();

// Checkout Page
app
  .route("/cart")
  .get(function (req, res) {
    res.render("cart");
  })
  .post();

// Menu Page
app
  .route("/menu")
  .get(function (req, res) {
    res.render("menu");
  })
  .post();

// Product Page
app
  .route("/product-order")
  .get(function (req, res) {
    res.render("product-order");
  })
  .post();

// Listener for connecting to local server
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
