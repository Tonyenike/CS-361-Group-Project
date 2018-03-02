/*
 *  test.js
 *
 *
 * Write any unit tests here to test our backend code!
 * I have written one as a quick example. Type
 * 'node test.js' to run the tests.
 *
 */

var cubeEngine = require('./engine.js'); // This lets us use the functions that we have built on the back-end.


function unit_test1()
{
	var cube = new cubeEngine(); //The cube variable is our cube object.

	console.log("");	
	console.log("=== Beginning Unit test 1 ===");
	console.log("-----------------------------");

	cube.moveFace("top", "bottom");

	var topface = cube.getFace("top");
	var botface = cube.getFace("bottom");

	var midbotcol = botface.getSquare("mm").getColor();
	var midtopcol = topface.getSquare("mm").getColor();


	console.log("=== Bottom square is now: ", midbotcol);
	console.log("=== Top square is now: ", midtopcol);

	if(midbotcol === midtopcol)
	{
		console.log("=== Test success. Colors match.");
	}
	else
		console.log("=== Test failure. Colors do not match.");
	console.log("");
}


function unit_test2()
{

	// Add more tests here as we need them

}


unit_test1();
