
/*
 *  integration.js
 *
 *
 * Write any integration tests here to test our backend code!
 * 'node integration.js' to run the tests.
 *
 */

var cubeEngine = require('./engine.js'); // This lets us use the functions that we have built on the back-end.

/*
 *  Styling points for unit testing!
 *  Only works on *NIX operating systems though.
 *  Run this on the ENGR server for best results.
 *
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



function int_test1()
{
	// This test checks to see if the reset works after rotating
	var cube = new cubeEngine(); //The cube variable is our cube object.

	console.log("");	
	console.log(FgCyan +  "=== Beginning Integration test 1 ===" + Reset);
	console.log("-----------------------------");

	console.log("=== rotating the cube left");
    cube.rotateCube("left");
	console.log("=== resetting the cube");
    cube.reset();
	console.log("=== rotating the cube right");
    cube.rotateCube("right");

	var rotface = cube.getFace("right");

	var midrotcol = rotface.getSquare("mm").getColor();


	console.log("=== right square is now:", midrotcol);

	var stat;
	//Assertion
	if(midrotcol === "red")
	{
		stat = FgGreen + "SUCCESS" + Reset;
	}
	else
		stat = FgRed + "FAILURE" + Reset;
	console.log(FgYellow + "=== TEST STATUS:" +  Reset, stat);
	console.log("");
}

function int_test2()
{
	// This test checks to see if rotating multiple times works
	var cube = new cubeEngine(); //The cube variable is our cube object.

	console.log("");	
	console.log(FgCyan +  "=== Beginning Integration test 2 ===" + Reset);
	console.log("-----------------------------");

	var rotface = cube.getFace("right");
	
    console.log("=== rotating the cube left");
    cube.rotateCube("left");
	console.log("=== rotating the cube up");
    cube.rotateCube("up");
	console.log("=== rotating the cube clockwise");
    cube.rotateCube("clockwise");

	var hotface = cube.getFace("right");

	var midrotcol = rotface.getSquare("mm").getColor();
	var midhotcol = hotface.getSquare("mm").getColor();
    
    ("=== checking to see that the right face is still equal...");


	var stat;
	//Assertion
	if(midrotcol === midhotcol)
	{
		stat = FgGreen + "SUCCESS" + Reset;
	}
	else
		stat = FgRed + "FAILURE" + Reset;
	console.log(FgYellow + "=== TEST STATUS:" +  Reset, stat);
	console.log("");
}

function int_test3()
{

}


function int_test4()
{

}



console.log("");
console.log(FgCyan + "=== Beginning Unit Testing ===" + Reset);
console.log("------------------------------");

int_test1();
int_test2();
int_test3();
int_test4();

console.log("");
console.log(FgCyan + "=== End of Testing ===" + Reset);
console.log("----------------------");
console.log("");
