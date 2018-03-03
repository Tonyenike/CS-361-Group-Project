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

/*
 *  Styling points for unit testing!
 */

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"
 
FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"
 
BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"



function unit_test1()
{
	// This test checks to see if the moveFace function is working
	// as expected.
	var cube = new cubeEngine(); //The cube variable is our cube object.

	console.log("");	
	console.log(FgCyan +  "=== Beginning Unit test 1 ===" + Reset);
	console.log("-----------------------------");

	cube.moveFace("top", "bottom");
	console.log("=== setting the bottom face to be equal to the top face");

	var topface = cube.getFace("top");
	var botface = cube.getFace("bottom");

	var midbotcol = botface.getSquare("mm").getColor();
	var midtopcol = topface.getSquare("mm").getColor();


	console.log("=== bottom square is now:", midbotcol);
	console.log("=== top square is now:", midtopcol);

	var stat;
	//Assertion
	if(midbotcol === midtopcol)
	{
		stat = FgGreen + "SUCCESS" + Reset;
	}
	else
		stat = FgRed + "FAILURE" + Reset;
	console.log(FgYellow + "=== TEST STATUS:" +  Reset, stat);
	console.log("");
}


function unit_test2()
{
	// This test checks to see if the rotateCube function is working
	// as expected. This test uses the "up" direction.
	var cube = new cubeEngine(); //The cube variable is our cube object.
	
	console.log("");	
	console.log(FgCyan + "=== Beginning Unit test 2 ===" + Reset);
	console.log("-----------------------------");


	var frontface = cube.getFace("front");
	var midfrontcol = frontface.getSquare("mm").getColor();

	console.log("=== front face is color:", midfrontcol);
	

	cube.rotateCube("up");
	console.log("=== rotating the cube up");
	
	var topface = cube.getFace("top");
	var midtopcol = topface.getSquare("mm").getColor();
	
	console.log("=== top face is color:", midtopcol);

	var stat;
	//Assertion
	if(midtopcol === midfrontcol)
	{
		stat = FgGreen + "SUCCESS" + Reset;
	}
	else
		stat = FgRed + "FAILURE" + Reset;
	console.log(FgYellow + "=== TEST STATUS:" + Reset, stat);
	console.log("");
}

function unit_test3()
{

	/*
 	*
 	*  Add more testing here!
 	*
 	*/

}

console.log("");
console.log(FgCyan + "=== Beginning Unit Testing ===" + Reset);
console.log("------------------------------");

unit_test1();
unit_test2();
unit_test3();

console.log("");
console.log(FgCyan + "=== End of Testing ===" + Reset);
console.log("----------------------");
console.log("");
