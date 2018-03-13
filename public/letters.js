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
		console.log("Nothing was entered");
		document.getElementById("content-display").innerHTML = "Nothing was entered";

//****************** A letter pairs ************************
	if (string == "ab")
	document.getElementById("content-display").innerHTML = "Abacus";
	if (string == "ac")
		document.getElementById("content-display").innerHTML = "Ace";
	if (string == "ad")
		document.getElementById("content-display").innerHTML = "Advertisement";
	if (string == "ae")
		document.getElementById("content-display").innerHTML = "Aeroplane";
	if (string == "af")
		document.getElementById("content-display").innerHTML = "Afro";
	if (string == "ag")
		document.getElementById("content-display").innerHTML = "Agony";
	if (string == "ah")
		document.getElementById("content-display").innerHTML = "Adolf Hitler";
	if (string == "ai")
		document.getElementById("content-display").innerHTML = "Artificial Intelligence";
	if (string == "aj")
		document.getElementById("content-display").innerHTML = "Anjel";
	if (string == "ak")
		document.getElementById("content-display").innerHTML = "AK-47";
	if (string == "al")
		document.getElementById("content-display").innerHTML = "Alien";
	if (string == "am")
		document.getElementById("content-display").innerHTML = "Ambulance";
	if (string == "an")
		document.getElementById("content-display").innerHTML = "Ant";
	if (string == "ao")
		document.getElementById("content-display").innerHTML = "Aorta";
	if (string == "ap")
		document.getElementById("content-display").innerHTML = "Airplane";
	if (string == "aq")
		document.getElementById("content-display").innerHTML = "Aqua";
	if (string == "ar")
		document.getElementById("content-display").innerHTML = "Arrow";
	if (string == "as")
		document.getElementById("content-display").innerHTML = "Assassin";
	if (string == "at")
		document.getElementById("content-display").innerHTML = "Atlas";
	if (string == "au")
		document.getElementById("content-display").innerHTML = "Automobile";
	if (string == "av")
		document.getElementById("content-display").innerHTML = "Aviator";
	if (string == "aw")
		document.getElementById("content-display").innerHTML = "A&W Rootbeer";
	if (string == "ax")
		document.getElementById("content-display").innerHTML = "Axe";


//******************** B letter pairs ****************
	if (string == "ba")
			document.getElementById("content-display").innerHTML = "bay";
	if (string == "bc")
			document.getElementById("content-display").innerHTML = "bic (lighter)";
	if (string == "bd")
			document.getElementById("content-display").innerHTML = "bed";
	if (string == "be")
		document.getElementById("content-display").innerHTML = "bee";
	if (string == "bf")
		document.getElementById("content-display").innerHTML = "beef";
	if (string == "bg")
		document.getElementById("content-display").innerHTML = "bag";
	if (string == "bh")
		document.getElementById("content-display").innerHTML = "beehive";
	if (string == "bi")
		document.getElementById("content-display").innerHTML = "bird";
	if (string == "bj")
		document.getElementById("content-display").innerHTML = "badge";
	if (string == "bk")
		document.getElementById("content-display").innerHTML = "book";
	if (string == "bl")
		document.getElementById("content-display").innerHTML = "ball";
	if (string == "bm")
		document.getElementById("content-display").innerHTML = "bomb";
	if (string == "bn")
		document.getElementById("content-display").innerHTML = "banana";
	if (string == "bo")
		document.getElementById("content-display").innerHTML = "boo";
	if (string == "bp")
		document.getElementById("content-display").innerHTML = "beep";
	if (string == "bq")
		document.getElementById("content-display").innerHTML = "bbq";
	if (string == "br")
		document.getElementById("content-display").innerHTML = "bar";
	if (string == "bs")
		document.getElementById("content-display").innerHTML = "bus";
	if (string == "bt")
		document.getElementById("content-display").innerHTML = "boot";
	if (string == "bu")
		document.getElementById("content-display").innerHTML = "buzzard";
	if (string == "bv")
		document.getElementById("content-display").innerHTML = "beaver";
	if (string == "bw")
		document.getElementById("content-display").innerHTML = "bow";
	if (string == "bx")
		document.getElementById("content-display").innerHTML = "box";

		//******************* C letter pairs ********************
	if (string == "ca")
		document.getElementById("content-display").innerHTML = "carrot";
	if (string == "cb")
		document.getElementById("content-display").innerHTML = "cab";
	if (string == "cd")
		document.getElementById("content-display").innerHTML = "compact Disc";
	if (string == "ce")
		document.getElementById("content-display").innerHTML = "celery";
	if (string == "cf")
		document.getElementById("content-display").innerHTML = "cuff";
	if (string == "cg")
		document.getElementById("content-display").innerHTML = "cog";
	if (string == "ch")
		document.getElementById("content-display").innerHTML = "cheese";
	if (string == "ci")
		document.getElementById("content-display").innerHTML = "city";
	if (string == "cj")
		document.getElementById("content-display").innerHTML = "cage";
	if (string == "ck")
		document.getElementById("content-display").innerHTML = "cake";
	if (string == "cl")
		document.getElementById("content-display").innerHTML = "clown";
	if (string == "cm")
		document.getElementById("content-display").innerHTML = "camera";
	if (string == "cn")
		document.getElementById("content-display").innerHTML = "can";
	if (string == "co")
		document.getElementById("content-display").innerHTML = "coffee";
	if (string == "cp")
		document.getElementById("content-display").innerHTML = "cop";
	if (string == "cq")
		document.getElementById("content-display").innerHTML = "croquet";
	if (string == "cr")
		document.getElementById("content-display").innerHTML = "car";
	if (string == "cs")
		document.getElementById("content-display").innerHTML = "castle";
	if (string == "ct")
		document.getElementById("content-display").innerHTML = "cat";
	if (string == "cu")
		document.getElementById("content-display").innerHTML = "cue";
	if (string == "cv")
		document.getElementById("content-display").innerHTML = "cave";
	if (string == "cw")
		document.getElementById("content-display").innerHTML = "cow";
	if (string == "cx")
		document.getElementById("content-display").innerHTML = "chex";

		//******************* D letter pairs ********************
	if (string == "da")
		document.getElementById("content-display").innerHTML = "day";
	if (string == "db")
		document.getElementById("content-display").innerHTML = "dab";
	if (string == "dc")
		document.getElementById("content-display").innerHTML = "dice";
	if (string == "de")
		document.getElementById("content-display").innerHTML = "dededede";
	if (string == "df")
		document.getElementById("content-display").innerHTML = "daffy duck";
	if (string == "dg")
		document.getElementById("content-display").innerHTML = "dog";
	if (string == "dh")
		document.getElementById("content-display").innerHTML = "dollhouse";
	if (string == "di")
		document.getElementById("content-display").innerHTML = "die";
	if (string == "dj")
		document.getElementById("content-display").innerHTML = "DJ";
	if (string == "dk")
		document.getElementById("content-display").innerHTML = "Donkey Kong";
	if (string == "dl")
		document.getElementById("content-display").innerHTML = "doll";
	if (string == "dm")
		document.getElementById("content-display").innerHTML = "dam";
	if (string == "dn")
		document.getElementById("content-display").innerHTML = "dan";
	if (string == "do")
		document.getElementById("content-display").innerHTML = "donut";
	if (string == "dp")
		document.getElementById("content-display").innerHTML = "dip";
	if (string == "dq")
		document.getElementById("content-display").innerHTML = "Dairy Queen";
	if (string == "dr")
		document.getElementById("content-display").innerHTML = "Doctor";
	if (string == "ds")
		document.getElementById("content-display").innerHTML = "Nintendo DS";
	if (string == "dt")
		document.getElementById("content-display").innerHTML = "dot";
	if (string == "du")
		document.getElementById("content-display").innerHTML = "dude";
	if (string == "dv")
		document.getElementById("content-display").innerHTML = "DVD";
	if (string == "dw")
		document.getElementById("content-display").innerHTML = "dew";
	if (string == "dx")
		document.getElementById("content-display").innerHTML = "ducks";

}
