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

				//******************* E letter pairs ********************
		if (string == "ea")
			document.getElementById("content-display").innerHTML = "EA games";
		if (string == "eb")
	 		document.getElementById("content-display").innerHTML = "elbow";
		if (string == "ec")
			document.getElementById("content-display").innerHTML = "Electricity";
		if (string == "ed")
			document.getElementById("content-display").innerHTML = "Edward";
		if (string == "ef")
			document.getElementById("content-display").innerHTML = "Elf";
		if (string == "eg")
			document.getElementById("content-display").innerHTML = "Egg";
		if (string == "eh")
			document.getElementById("content-display").innerHTML = "Eh?";
		if (string == "ei")
			document.getElementById("content-display").innerHTML = "Einstein";
		if (string == "ej")
			document.getElementById("content-display").innerHTML = "Eject";
		if (string == "ek")
			document.getElementById("content-display").innerHTML = "Eek";
		if (string == "el")
			document.getElementById("content-display").innerHTML = "Eel";
		if (string == "em")
			document.getElementById("content-display").innerHTML = "emo";
		if (string == "en")
			document.getElementById("content-display").innerHTML = "english";
		if (string == "eo")
			document.getElementById("content-display").innerHTML = "Eor";
		if (string == "ep")
			document.getElementById("content-display").innerHTML = "Emperor";
		if (string == "eq")
			document.getElementById("content-display").innerHTML = "Equals";
		if (string == "er")
			document.getElementById("content-display").innerHTML = "Emergency Room";
		if (string == "es")
			document.getElementById("content-display").innerHTML = "Espanol";
		if (string == "et")
			document.getElementById("content-display").innerHTML = "ET";
		if (string == "eu")
			document.getElementById("content-display").innerHTML = "Europe";
		if (string == "ev")
			document.getElementById("content-display").innerHTML = "Eevee";
		if (string == "ew")
			document.getElementById("content-display").innerHTML = "Ew";
		if (string == "ex")
			document.getElementById("content-display").innerHTML = "Ex";

			//******************* F letter pairs ********************
	if (string == "fa")
		document.getElementById("content-display").innerHTML = "Fan";
	if (string == "fb")
		document.getElementById("content-display").innerHTML = "Facebook";
	if (string == "fc")
		document.getElementById("content-display").innerHTML = "Face";
	if (string == "fd")
		document.getElementById("content-display").innerHTML = "Food";
	if (string == "fe")
		document.getElementById("content-display").innerHTML = "Fee";
	if (string == "fg")
		document.getElementById("content-display").innerHTML = "Fog";
	if (string == "fh")
		document.getElementById("content-display").innerHTML = "Firehose";
	if (string == "fi")
		document.getElementById("content-display").innerHTML = "Fire";
	if (string == "fj")
		document.getElementById("content-display").innerHTML = "Fudge";
	if (string == "fk")
		document.getElementById("content-display").innerHTML = "Fake";
	if (string == "fl")
		document.getElementById("content-display").innerHTML = "Fall";
	if (string == "fm")
		document.getElementById("content-display").innerHTML = "Fam";
	if (string == "fn")
		document.getElementById("content-display").innerHTML = "Fan";
	if (string == "fo")
		document.getElementById("content-display").innerHTML = "Foe";
	if (string == "fp")
		document.getElementById("content-display").innerHTML = "Flip";
	if (string == "fq")
		document.getElementById("content-display").innerHTML = "FAQ";
	if (string == "fr")
		document.getElementById("content-display").innerHTML = "Four";
	if (string == "fs")
		document.getElementById("content-display").innerHTML = "Fish";
	if (string == "ft")
		document.getElementById("content-display").innerHTML = "Foot";
	if (string == "fu")
		document.getElementById("content-display").innerHTML = "Fun";
	if (string == "fv")
		document.getElementById("content-display").innerHTML = "Favorite";
	if (string == "fw")
		document.getElementById("content-display").innerHTML = "Flower";
	if (string == "fx")
		document.getElementById("content-display").innerHTML = "Fox";

		//******************* G letter pairs ********************
if (string == "ga")
	document.getElementById("content-display").innerHTML = "Georgia";
if (string == "gb")
	document.getElementById("content-display").innerHTML = "Garbage";
if (string == "gc")
	document.getElementById("content-display").innerHTML = "GameCube";
if (string == "gd")
	document.getElementById("content-display").innerHTML = "God";
if (string == "ge")
	document.getElementById("content-display").innerHTML = "Geese";
if (string == "gf")
	document.getElementById("content-display").innerHTML = "Goofy";
if (string == "gh")
	document.getElementById("content-display").innerHTML = "Ghost";
if (string == "gi")
	document.getElementById("content-display").innerHTML = "GI Joe";
if (string == "gj")
	document.getElementById("content-display").innerHTML = "Guage";
if (string == "gk")
	document.getElementById("content-display").innerHTML = "Geek";
if (string == "gl")
	document.getElementById("content-display").innerHTML = "Goal";
if (string == "gm")
	document.getElementById("content-display").innerHTML = "Gem";
if (string == "gn")
	document.getElementById("content-display").innerHTML = "Gun";
if (string == "go")
	document.getElementById("content-display").innerHTML = "Go";
if (string == "gp")
	document.getElementById("content-display").innerHTML = "Gap";
if (string == "gq")
	document.getElementById("content-display").innerHTML = "Guacamole";
if (string == "gr")
	document.getElementById("content-display").innerHTML = "Gar";
if (string == "gs")
	document.getElementById("content-display").innerHTML = "Gas";
if (string == "gt")
	document.getElementById("content-display").innerHTML = "Git";
if (string == "gu")
	document.getElementById("content-display").innerHTML = "Gum";
if (string == "gv")
	document.getElementById("content-display").innerHTML = "Gavel";
if (string == "gw")
	document.getElementById("content-display").innerHTML = "Gown";
if (string == "gx")
	document.getElementById("content-display").innerHTML = "Gawks";

	//******************* H letter pairs ********************
if (string == "ha")
document.getElementById("content-display").innerHTML = "day";
if (string == "hb")
document.getElementById("content-display").innerHTML = "dab";
if (string == "hc")
document.getElementById("content-display").innerHTML = "dice";
if (string == "hd")
document.getElementById("content-display").innerHTML = "dededede";
if (string == "he")
document.getElementById("content-display").innerHTML = "daffy duck";
if (string == "hf")
document.getElementById("content-display").innerHTML = "dog";
if (string == "hg")
document.getElementById("content-display").innerHTML = "dollhouse";
if (string == "hi")
document.getElementById("content-display").innerHTML = "die";
if (string == "hj")
document.getElementById("content-display").innerHTML = "DJ";
if (string == "hk")
document.getElementById("content-display").innerHTML = "Donkey Kong";
if (string == "hl")
document.getElementById("content-display").innerHTML = "doll";
if (string == "hm")
document.getElementById("content-display").innerHTML = "dam";
if (string == "hn")
document.getElementById("content-display").innerHTML = "dan";
if (string == "ho")
document.getElementById("content-display").innerHTML = "donut";
if (string == "hp")
document.getElementById("content-display").innerHTML = "dip";
if (string == "hq")
document.getElementById("content-display").innerHTML = "Dairy Queen";
if (string == "hr")
document.getElementById("content-display").innerHTML = "Doctor";
if (string == "hs")
document.getElementById("content-display").innerHTML = "Nintendo DS";
if (string == "ht")
document.getElementById("content-display").innerHTML = "dot";
if (string == "hu")
document.getElementById("content-display").innerHTML = "dude";
if (string == "hv")
document.getElementById("content-display").innerHTML = "DVD";
if (string == "hw")
document.getElementById("content-display").innerHTML = "dew";
if (string == "hx")
document.getElementById("content-display").innerHTML = "ducks";

//******************* I letter pairs ********************
if (string == "ia")
document.getElementById("content-display").innerHTML = "day";
if (string == "ib")
document.getElementById("content-display").innerHTML = "dab";
if (string == "ic")
document.getElementById("content-display").innerHTML = "dice";
if (string == "id")
document.getElementById("content-display").innerHTML = "dededede";
if (string == "ie")
document.getElementById("content-display").innerHTML = "daffy duck";
if (string == "if")
document.getElementById("content-display").innerHTML = "dog";
if (string == "ig")
document.getElementById("content-display").innerHTML = "dollhouse";
if (string == "ih")
document.getElementById("content-display").innerHTML = "die";
if (string == "ij")
document.getElementById("content-display").innerHTML = "DJ";
if (string == "ik")
document.getElementById("content-display").innerHTML = "Donkey Kong";
if (string == "il")
document.getElementById("content-display").innerHTML = "doll";
if (string == "im")
document.getElementById("content-display").innerHTML = "dam";
if (string == "in")
document.getElementById("content-display").innerHTML = "dan";
if (string == "io")
document.getElementById("content-display").innerHTML = "donut";
if (string == "ip")
document.getElementById("content-display").innerHTML = "dip";
if (string == "iq")
document.getElementById("content-display").innerHTML = "Dairy Queen";
if (string == "iir")
document.getElementById("content-display").innerHTML = "Doctor";
if (string == "is")
document.getElementById("content-display").innerHTML = "Nintendo DS";
if (string == "it")
document.getElementById("content-display").innerHTML = "dot";
if (string == "iu")
document.getElementById("content-display").innerHTML = "dude";
if (string == "iv")
document.getElementById("content-display").innerHTML = "DVD";
if (string == "iw")
document.getElementById("content-display").innerHTML = "dew";
if (string == "ix")
document.getElementById("content-display").innerHTML = "ducks";

//******************* J letter pairs ********************
if (string == "ja")
document.getElementById("content-display").innerHTML = "day";
if (string == "jb")
document.getElementById("content-display").innerHTML = "dab";
if (string == "jc")
document.getElementById("content-display").innerHTML = "dice";
if (string == "jd")
document.getElementById("content-display").innerHTML = "dededede";
if (string == "je")
document.getElementById("content-display").innerHTML = "daffy duck";
if (string == "jf")
document.getElementById("content-display").innerHTML = "dog";
if (string == "jg")
document.getElementById("content-display").innerHTML = "dollhouse";
if (string == "jh")
document.getElementById("content-display").innerHTML = "die";
if (string == "ji")
document.getElementById("content-display").innerHTML = "DJ";
if (string == "jk")
document.getElementById("content-display").innerHTML = "Donkey Kong";
if (string == "jl")
document.getElementById("content-display").innerHTML = "doll";
if (string == "jm")
document.getElementById("content-display").innerHTML = "dam";
if (string == "jn")
document.getElementById("content-display").innerHTML = "dan";
if (string == "jo")
document.getElementById("content-display").innerHTML = "donut";
if (string == "jp")
document.getElementById("content-display").innerHTML = "dip";
if (string == "jq")
document.getElementById("content-display").innerHTML = "Dairy Queen";
if (string == "jr")
document.getElementById("content-display").innerHTML = "Doctor";
if (string == "js")
document.getElementById("content-display").innerHTML = "Nintendo DS";
if (string == "jt")
document.getElementById("content-display").innerHTML = "dot";
if (string == "ju")
document.getElementById("content-display").innerHTML = "dude";
if (string == "jv")
document.getElementById("content-display").innerHTML = "DVD";
if (string == "jw")
document.getElementById("content-display").innerHTML = "dew";
if (string == "jx")
document.getElementById("content-display").innerHTML = "ducks";

//******************* K letter pairs ********************
if (string == "ka")
document.getElementById("content-display").innerHTML = "";
if (string == "kb")
document.getElementById("content-display").innerHTML = "dab";
if (string == "kc")
document.getElementById("content-display").innerHTML = "dice";
if (string == "kd")
document.getElementById("content-display").innerHTML = "dededede";
if (string == "ke")
document.getElementById("content-display").innerHTML = "daffy duck";
if (string == "kf")
document.getElementById("content-display").innerHTML = "dog";
if (string == "kg")
document.getElementById("content-display").innerHTML = "dollhouse";
if (string == "kh")
document.getElementById("content-display").innerHTML = "die";
if (string == "ki")
document.getElementById("content-display").innerHTML = "DJ";
if (string == "kj")
document.getElementById("content-display").innerHTML = "Donkey Kong";
if (string == "kl")
document.getElementById("content-display").innerHTML = "doll";
if (string == "km")
document.getElementById("content-display").innerHTML = "dam";
if (string == "kn")
document.getElementById("content-display").innerHTML = "dan";
if (string == "ko")
document.getElementById("content-display").innerHTML = "donut";
if (string == "kp")
document.getElementById("content-display").innerHTML = "dip";
if (string == "kq")
document.getElementById("content-display").innerHTML = "Dairy Queen";
if (string == "kr")
document.getElementById("content-display").innerHTML = "Doctor";
if (string == "ks")
document.getElementById("content-display").innerHTML = "Nintendo DS";
if (string == "kt")
document.getElementById("content-display").innerHTML = "dot";
if (string == "ku")
document.getElementById("content-display").innerHTML = "dude";
if (string == "kv")
document.getElementById("content-display").innerHTML = "DVD";
if (string == "kw")
document.getElementById("content-display").innerHTML = "dew";
if (string == "kx")
document.getElementById("content-display").innerHTML = "ducks";
}
