/*
 *  Server code.
 *  
 *  Required packages:	express
 *  			express-handlebars
 *  			handlebars
 *  			socket.io
 *
 *  Our built-in 'package': engine.js. This is where our back-end code will be.
 *
 *  type "npm install [package-name]" to install the package
 *
 *  If you pull the entire repository from github, then all the packages should
 *  already be installed. It is on you, however, to ensure that you have
 *  npm on whatever computer that you are running on. If you run the code
 *  on the ENGR server, the npm tool is already installed.
 *
 *  Type: "npm start" to run the server, or node.js
 * 
 */



var express = require('express');
var app = express();
var server = require('http').Server(app);
var handlebars = require('express-handlebars');
var cubeEngine = require('./engine.js'); // This lets us use the functions that we have built on the back end.

var port = 50100; // When running the server, type "localhost:[port-number]" in your address bar to see the webpage.

var c = new cubeEngine();
console.log(c.solution());

/*
 *  Create socket connection to the client side JS. 
 *  Begin listening on port [port-number].
 */ 

var io = require('socket.io').listen(app.listen(port, function() {
    console.log('== Server is listening on port', port);
}));

/*
* Set up handlebars
*/

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*
 *  Socket handlers. Anytime the client emits a request, perform
 *  a socket function, and return.
 *
 */


/*  For every client that establishes a connection with us on ANY page in our website,
 *  we will be listening for the following (which is indicated by the socket.on functions)
 */
io.on('connection', function (socket) {
    var cube = new cubeEngine(); //The cube variable is our cube object.
    
    /*
    * The client has requested a new cube.
    * Emit a new cube to the client.
    */
    socket.on('newCube', function() {
        cube.reset();
        emitCube();
    })
    
    /*
    *  The client has requested to rotate the cube. Use back-end
    *  code to update the cube, and then emit the updated cube
    *  back to the client.
    */
    socket.on('rotateCube', function(content) {
        cube.rotateCube(content.direction);
        emitCube();
    })


    /*
    * Emit the updated Cube to the client.
    */
    function emitCube(){
        socket.emit('updateCube', cube);
    }

});
// End of socket functions.


/*
 *   The main page is set to TUTORIALS.HANDLEBARS
 */
app.get('/', function(req, res) {
	context = {style: "./tutorials.css"};
    	res.status(200).render('tutorials.handlebars', context);
});


/*
 *   Load each of the three UI pages if the user requests it.
 */

app.get('/tutorials', function(req, res) {
	context = {style: "./tutorials.css"};
    	res.status(200).render('tutorials.handlebars', context);
});

app.get('/cube', function(req, res) {
	context = {style: "./cube.css"};
    	res.status(200).render('cube.handlebars', context);
});

app.get('/letters', function(req, res) {
	context = {style: "./letters.css"};
    	res.status(200).render('letters.handlebars', context);
});

/*
*   Use the public folder for styling assets and javascript.
*/

app.use(express.static('public'));

/*
*  If the content that the user requests doesn't exist, send a 404 error.
*/


app.get('*', function(req, res) {
	res.status(404).render('404.handlebars');
});
