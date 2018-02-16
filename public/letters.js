/*
 *   Establish connection to the server.
 */

var socket = io.connect('http://localhost:3000');


/*
 *   Client side functionality here.
 *   We need to make some agreements and hash out some things on how
 *   socket functionalities will work before I proceed.
 */

document.getElementById("text-input").addEventListener("click", clearinput);

document.getElementById("word-gen").addEventListener("click", generatewords);


function clearinput(){
	document.getElementById("text-input").value = "";
}

function generatewords(){
	var string = document.getElementById("text-input").value;
	if(string == "")
		console.log("Nothing was entered")
}
