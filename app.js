
// Requiring 
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public')); 
app.set('view engine', 'ejs'); //allows me to use ejs

// Root Route connected to local server
app.get('/', function(req, res){
    res.sendFile(__dirname + "/home.html");
});

// app.get for pages
app.get('/header', function(req,res){
    res.render('header');
});

app.get('/footer', function(req,res){
    res.render('footer');
});

app.get('/about', function(req,res){
    res.render('about');
});

app.get('/contact', function(req,res){
    res.render('contact');
});

app.get('/order', function(req,res){
    res.render('order');
});

app.get('/cart', function(req,res){
    res.render('cart');
});










// Listener for connecting to local server
app.listen(3000, function(){
    console.log("Server started on port 3000")
  })
  