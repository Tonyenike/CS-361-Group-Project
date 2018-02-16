/*
 *  Server code.
 *
 *  Type: "npm start" to run the server.
 *
 */


var express = require('express');
var app = express();
var server = require('http').Server(app);
var handlebars = require('express-handlebars');
var port = 3000; // When running the server, use type "localhost:[port-number]" in your address bar to see the webpage.


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


/*
 *   The main page is set to TUTORIALS.HANDLEBARS
 */

app.get('/', function(req, res) {
	context = {style: "./tutorials.css"};
    	res.status(200).render('tutorials.handlebars', context);
});

 /*
 *   Use the public folder for styling assets and javascript.
 */

app.use(express.static('public'));

app.get('*', function(req, res) {
	res.status(404).render('404.handlebars');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

