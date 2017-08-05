// Initial chapter 3 exercise for Meadowlark Travel Agency. 
// This is the 'app file'. 

"use strict"; 

var express = require('express'); 
var app = express(); 

// Setup the handlebars view engine. 
var handlebars = require('express-handlebars')
    .create ({ defaultLayout: 'main' }); 
app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars'); 

// Setting the port number, to 2112, and launching the process. 
app.set('port', process.env.PORT || 2112); 

app.use(express.static(__dirname + '/public'));


// two new routes. Routes must be above server codes. 
app.get('/', function(req, res){
    res.render('home'); 
}); 

// Put subpage routes *before* their page routes! 
// This works. 
app.get('/about/contact', function(req, res){
    res.render('contact'); 
}); 

app.get('/about', function(req, res){
    res.render('about'); 
}); 

// custom 404 page - Page Not Found. 
app.use(function(req, res){
    res.status(404);
    res.render('404'); 
}); 

// Custom 500 page - Server Error. 
app.use(function(req, res){
    res.status(500);
    res.render('500');  
}); 

// Listening for the open port. 
app.listen(app.get('port'), function() {
    console.log ('Express Started on http://localhost:' + app.get('port') + '. Press Ctrl+C to terminate!'); 
}); 