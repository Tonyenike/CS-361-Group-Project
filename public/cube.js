/*
 *   Establish connection to the server.
 */

var socket = io.connect('http://localhost:3000');


/*
 *   Client side functionality here.
 *   We need to make some agreements and hash out some things on how
 *   socket functionalities will work before I proceed.
 */

// For demonstration purposes, when the scrambler button is pressed: 

document.getElementById("scrambler").addEventListener("click", function(){

// Set the top right square of the front face to red.
setcolor("red", "front", "tr");
// Set the whole back face to green.
setfacecolor("green", "back");

// Set the left face to have a row of orange squares on the top, four yellow squares in the bottom-right,
// and the last two squares to be red.
var face = {
	tr: "orange",
	tm: "orange",
	tl: "orange",

	mr: "yellow",
	mm: "yellow",
	ml: "red",

	br: "yellow",
	bm: "yellow",
	bl: "red",
}

setface(face, "left");

});



/*
 *  FUNCTION: setcolor
 *
 *  Functionality: set the color of a square of a face
 *  on the cube. It will change only a single square and set it to that color.
 *
 *  INPUT PARAMETERS:
 *
 *  face = "front", "back", "left", "right", "top", "bottom" Anything else and it won't do anything.
 *  square = "tr" "tm" "tl" "mr" "mm" "ml" "br" "bm" "bl"
 *   	     *tr means Top Right, mm means Middle Middle, etc.
 *  color = "red" "blue" "green" "orange" "yellow" "white"
 *
 */

function setcolor(color, face, square){

	var faceo

	if(face === "front"){
		faceo = "face-front";
	}

	else if(face === "back"){
		faceo = "face-back";
	}

	else if(face === "right"){
		faceo = "face-right";
	}
	
	else if(face === "left"){
		faceo = "face-left";
	}

	else if(face === "bottom"){
		faceo = "face-bottom";
	}
	
	else if(face === "top"){
		faceo = "face-top";
	}

	else{
		console.log("=== Error: face parameter for setcolor() is not valid");
		return;
	}

	var yo = "#";
	yo += square;

	document.getElementById(faceo).querySelector(yo).style.backgroundColor = color;

	if(face === "front"){
		document.getElementById("modelcube").querySelector(yo).style.backgroundColor = color;
	}

	return;
}


/*
 *  FUNCTION: setfacecolor
 *
 *  This function sets all of the squares of a face
 *  to a single color. The parameters for face & color
 *  are the same as above.
 */

function setfacecolor(color, face){

	setcolor(color, face, "tr");
	setcolor(color, face, "tm");
	setcolor(color, face, "tl");
	
	setcolor(color, face, "mr");
	setcolor(color, face, "mm");
	setcolor(color, face, "ml");

	setcolor(color, face, "br");
	setcolor(color, face, "bm");
	setcolor(color, face, "bl");
}


/*
 *  FUNCTION: setface
 *
 *  This function takes in a FACE OBJECT/WRAPPER. This object specifies
 *  the colors of all the squares within the face, and this function sets
 *  all of the colors to the squares of the face as appropriate.
 *
 *  The position field specifies which face is being set on the cube, i.e.:
 *  "front", "back", "left", "right", "top", "bottom"
 */


function setface(face, position){

	setcolor(face.tr, position, "tr");
	setcolor(face.tm, position, "tm");
	setcolor(face.tl, position, "tl");

	setcolor(face.mr, position, "mr");
	setcolor(face.mm, position, "mm");
	setcolor(face.ml, position, "ml");

	setcolor(face.br, position, "br");
	setcolor(face.bm, position, "bm");
	setcolor(face.bl, position, "bl");
}
