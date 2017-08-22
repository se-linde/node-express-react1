// Initial chapter 3 exercise for Meadowlark Travel Agency. 
// This is the 'app file'. 

// "use strict"; 

(function () {
   'use strict';
   // this function is strict...
}());

var express = require('express'); 
var fortune = require('./lib/fortune.js'); 

var app = express(); 

// Setup the handlebars view engine. 
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main', 
    helpers: {
        section: function(name, options){
            if (!this._sections) this._sections = {}; 
            this._sections[name] = options.fn(this);
            return null;
        }
    }
}); 



app.engine('handlebars', handlebars.engine); 
app.set('view engine', 'handlebars'); 

// Setting the port number, to 2112, and launching the process. 
app.set('port', process.env.PORT || 2112); 

// Declaring the static middleware.
app.use(express.static(__dirname + '/public'));

// Set 'showTests' context property, if the querystring contains 'test=1'. 
// Testing in Mocha, Chai. 

app.use(function(req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && 
        req.query.test === '1';
    next(); 
});

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
    res.render('about', {fortune: fortune.getFortune(), 
    pageTestScript: 'qa/tests-about.js'             
    }); 
}); 

// tour pages
app.get('/tours/hood-river', function(req, res) {
   res.render('tours/hood-river');  
});

app.get('/tours/hood-river', function(req, res) {
   res.render('tours/hood-river');  
});

app.get('/tours/hood-river', function(req, res) {
   res.render('tours/hood-river');  
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