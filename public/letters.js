/*
 *   Establish connection to the server.
 */

var socket = io.connect('http://localhost:54500');


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
document.getElementById("content-display").innerHTML = "Hay";
if (string == "hb")
document.getElementById("content-display").innerHTML = "Hobo";
if (string == "hc")
document.getElementById("content-display").innerHTML = "Hic";
if (string == "hd")
document.getElementById("content-display").innerHTML = "Head";
if (string == "he")
document.getElementById("content-display").innerHTML = "He-Man";
if (string == "hf")
document.getElementById("content-display").innerHTML = "Half";
if (string == "hg")
document.getElementById("content-display").innerHTML = "Hag";
if (string == "hi")
document.getElementById("content-display").innerHTML = "Hi";
if (string == "hj")
document.getElementById("content-display").innerHTML = "Hedge";
if (string == "hk")
document.getElementById("content-display").innerHTML = "Hook";
if (string == "hl")
document.getElementById("content-display").innerHTML = "Hell";
if (string == "hm")
document.getElementById("content-display").innerHTML = "Ham";
if (string == "hn")
document.getElementById("content-display").innerHTML = "Han Solo";
if (string == "ho")
document.getElementById("content-display").innerHTML = "Hoe";
if (string == "hp")
document.getElementById("content-display").innerHTML = "Hip";
if (string == "hq")
document.getElementById("content-display").innerHTML = "Hiccup";
if (string == "hr")
document.getElementById("content-display").innerHTML = "Hair";
if (string == "hs")
document.getElementById("content-display").innerHTML = "Hose";
if (string == "ht")
document.getElementById("content-display").innerHTML = "Hat";
if (string == "hu")
document.getElementById("content-display").innerHTML = "Hummus";
if (string == "hv")
document.getElementById("content-display").innerHTML = "Hoverboard";
if (string == "hw")
document.getElementById("content-display").innerHTML = "How";
if (string == "hx")
document.getElementById("content-display").innerHTML = "Hex";

//******************* I letter pairs ********************
if (string == "ia")
document.getElementById("content-display").innerHTML = "Iowa";
if (string == "ib")
document.getElementById("content-display").innerHTML = "Ibis";
if (string == "ic")
document.getElementById("content-display").innerHTML = "Ice";
if (string == "id")
document.getElementById("content-display").innerHTML = "ID";
if (string == "ie")
document.getElementById("content-display").innerHTML = "IE";
if (string == "if")
document.getElementById("content-display").innerHTML = "Eiffel Tower";
if (string == "ig")
document.getElementById("content-display").innerHTML = "Iguana";
if (string == "ih")
document.getElementById("content-display").innerHTML = "IHOP";
if (string == "ij")
document.getElementById("content-display").innerHTML = "Inject";
if (string == "ik")
document.getElementById("content-display").innerHTML = "Ike";
if (string == "il")
document.getElementById("content-display").innerHTML = "Ill";
if (string == "im")
document.getElementById("content-display").innerHTML = "Image";
if (string == "in")
document.getElementById("content-display").innerHTML = "Intel";
if (string == "io")
document.getElementById("content-display").innerHTML = "Ion";
if (string == "ip")
document.getElementById("content-display").innerHTML = "IPod";
if (string == "iq")
document.getElementById("content-display").innerHTML = "IQ";
if (string == "ir")
document.getElementById("content-display").innerHTML = "IRS";
if (string == "is")
document.getElementById("content-display").innerHTML = "Island";
if (string == "it")
document.getElementById("content-display").innerHTML = "IT (clown)";
if (string == "iu")
document.getElementById("content-display").innerHTML = "IOU";
if (string == "iv")
document.getElementById("content-display").innerHTML = "Ivy";
if (string == "iw")
document.getElementById("content-display").innerHTML = "Inch Worm";
if (string == "ix")
document.getElementById("content-display").innerHTML = "Ibex";

//******************* J letter pairs ********************
if (string == "ja")
document.getElementById("content-display").innerHTML = "Jay";
if (string == "jb")
document.getElementById("content-display").innerHTML = "Jab";
if (string == "jc")
document.getElementById("content-display").innerHTML = "Jace";
if (string == "jd")
document.getElementById("content-display").innerHTML = "Jade";
if (string == "je")
document.getElementById("content-display").innerHTML = "Jesus";
if (string == "jf")
document.getElementById("content-display").innerHTML = "JIFF";
if (string == "jg")
document.getElementById("content-display").innerHTML = "Jaguar";
if (string == "jh")
document.getElementById("content-display").innerHTML = "Jabba Hut";
if (string == "ji")
document.getElementById("content-display").innerHTML = "Jigsaw";
if (string == "jk")
document.getElementById("content-display").innerHTML = "Joker";
if (string == "jl")
document.getElementById("content-display").innerHTML = "Jail";
if (string == "jm")
document.getElementById("content-display").innerHTML = "Jam";
if (string == "jn")
document.getElementById("content-display").innerHTML = "Jeans";
if (string == "jo")
document.getElementById("content-display").innerHTML = "Joe";
if (string == "jp")
document.getElementById("content-display").innerHTML = "Jeep";
if (string == "jq")
document.getElementById("content-display").innerHTML = "jQuery";
if (string == "jr")
document.getElementById("content-display").innerHTML = "Jar";
if (string == "js")
document.getElementById("content-display").innerHTML = "Jester";
if (string == "jt")
document.getElementById("content-display").innerHTML = "Jet";
if (string == "ju")
document.getElementById("content-display").innerHTML = "Juice";
if (string == "jv")
document.getElementById("content-display").innerHTML = "Javelin";
if (string == "jw")
document.getElementById("content-display").innerHTML = "Jaw";
if (string == "jx")
document.getElementById("content-display").innerHTML = "Jacks";

//******************* K letter pairs ********************
if (string == "ka")
document.getElementById("content-display").innerHTML = "Kangaroo";
if (string == "kb")
document.getElementById("content-display").innerHTML = "Kabob";
if (string == "kc")
document.getElementById("content-display").innerHTML = "KFC";
if (string == "kd")
document.getElementById("content-display").innerHTML = "Kid";
if (string == "ke")
document.getElementById("content-display").innerHTML = "Key";
if (string == "kf")
document.getElementById("content-display").innerHTML = "Kiff";
if (string == "kg")
document.getElementById("content-display").innerHTML = "Keg";
if (string == "kh")
document.getElementById("content-display").innerHTML = "Khan";
if (string == "ki")
document.getElementById("content-display").innerHTML = "Kite";
if (string == "kj")
document.getElementById("content-display").innerHTML = "Kylie Jenner";
if (string == "kl")
document.getElementById("content-display").innerHTML = "Kill";
if (string == "km")
document.getElementById("content-display").innerHTML = "Kim";
if (string == "kn")
document.getElementById("content-display").innerHTML = "Knight";
if (string == "ko")
document.getElementById("content-display").innerHTML = "Koala";
if (string == "kp")
document.getElementById("content-display").innerHTML = "Keep";
if (string == "kq")
document.getElementById("content-display").innerHTML = "Kumquat";
if (string == "kr")
document.getElementById("content-display").innerHTML = "Korea";
if (string == "ks")
document.getElementById("content-display").innerHTML = "Kiss";
if (string == "kt")
document.getElementById("content-display").innerHTML = "Kit";
if (string == "ku")
document.getElementById("content-display").innerHTML = "KuKluxKlan";
if (string == "kv")
document.getElementById("content-display").innerHTML = "Kevin";
if (string == "kw")
document.getElementById("content-display").innerHTML = "Kiwi";
if (string == "kx")
document.getElementById("content-display").innerHTML = "Kix";

//******************* L letter pairs ********************
if (string == "la")
document.getElementById("content-display").innerHTML = "Lala";
if (string == "lb")
document.getElementById("content-display").innerHTML = "Lobster";
if (string == "lc")
document.getElementById("content-display").innerHTML = "Lace";
if (string == "ld")
document.getElementById("content-display").innerHTML = "Ladder";
if (string == "le")
document.getElementById("content-display").innerHTML = "Leopard";
if (string == "lf")
document.getElementById("content-display").innerHTML = "Leaf";
if (string == "lg")
document.getElementById("content-display").innerHTML = "Lego";
if (string == "lh")
document.getElementById("content-display").innerHTML = "Lighthouse";
if (string == "li")
document.getElementById("content-display").innerHTML = "Light";
if (string == "lj")
document.getElementById("content-display").innerHTML = "Lebron James";
if (string == "lk")
document.getElementById("content-display").innerHTML = "Lock";
if (string == "lm")
document.getElementById("content-display").innerHTML = "Lamb";
if (string == "ln")
document.getElementById("content-display").innerHTML = "London";
if (string == "lo")
document.getElementById("content-display").innerHTML = "Low";
if (string == "lp")
document.getElementById("content-display").innerHTML = "Lip";
if (string == "lq")
document.getElementById("content-display").innerHTML = "Liquor";
if (string == "lr")
document.getElementById("content-display").innerHTML = "Lore";
if (string == "ls")
document.getElementById("content-display").innerHTML = "Lasso";
if (string == "lt")
document.getElementById("content-display").innerHTML = "Loot";
if (string == "lu")
document.getElementById("content-display").innerHTML = "Lute";
if (string == "lv")
document.getElementById("content-display").innerHTML = "Love";
if (string == "lw")
document.getElementById("content-display").innerHTML = "Law";
if (string == "lx")
document.getElementById("content-display").innerHTML = "Laxative";

//******************* M letter pairs ********************
if (string == "ma")
document.getElementById("content-display").innerHTML = "Ma";
if (string == "mb")
document.getElementById("content-display").innerHTML = "Mob";
if (string == "mc")
document.getElementById("content-display").innerHTML = "Mace";
if (string == "md")
document.getElementById("content-display").innerHTML = "Mud";
if (string == "me")
document.getElementById("content-display").innerHTML = "Me";
if (string == "mf")
document.getElementById("content-display").innerHTML = "Muffin";
if (string == "mg")
document.getElementById("content-display").innerHTML = "Magnet";
if (string == "mh")
document.getElementById("content-display").innerHTML = "Mohawk";
if (string == "mi")
document.getElementById("content-display").innerHTML = "Mii";
if (string == "mj")
document.getElementById("content-display").innerHTML = "Michael Jackson";
if (string == "mk")
document.getElementById("content-display").innerHTML = "Mike";
if (string == "ml")
document.getElementById("content-display").innerHTML = "Mole";
if (string == "mn")
document.getElementById("content-display").innerHTML = "Man";
if (string == "mo")
document.getElementById("content-display").innerHTML = "Momo";
if (string == "mp")
document.getElementById("content-display").innerHTML = "Map";
if (string == "mq")
document.getElementById("content-display").innerHTML = "Match";
if (string == "mr")
document.getElementById("content-display").innerHTML = "Mermaid";
if (string == "ms")
document.getElementById("content-display").innerHTML = "Moss";
if (string == "mt")
document.getElementById("content-display").innerHTML = "Mat";
if (string == "mu")
document.getElementById("content-display").innerHTML = "Mummy";
if (string == "mv")
document.getElementById("content-display").innerHTML = "Movie";
if (string == "mw")
document.getElementById("content-display").innerHTML = "Mew";
if (string == "mx")
document.getElementById("content-display").innerHTML = "Max";

//******************* N letter pairs ********************
if (string == "na")
document.getElementById("content-display").innerHTML = "North America";
if (string == "nb")
document.getElementById("content-display").innerHTML = "Knob";
if (string == "nc")
document.getElementById("content-display").innerHTML = "Neice";
if (string == "nd")
document.getElementById("content-display").innerHTML = "Needle";
if (string == "ne")
document.getElementById("content-display").innerHTML = "Neon";
if (string == "nf")
document.getElementById("content-display").innerHTML = "Nerf";
if (string == "ng")
document.getElementById("content-display").innerHTML = "Nag";
if (string == "nh")
document.getElementById("content-display").innerHTML = "Neigh";
if (string == "ni")
document.getElementById("content-display").innerHTML = "Knee";
if (string == "nj")
document.getElementById("content-display").innerHTML = "Ninja";
if (string == "nk")
document.getElementById("content-display").innerHTML = "Nike";
if (string == "nl")
document.getElementById("content-display").innerHTML = "Nail";
if (string == "nm")
document.getElementById("content-display").innerHTML = "Nemo";
if (string == "no")
document.getElementById("content-display").innerHTML = "No";
if (string == "np")
document.getElementById("content-display").innerHTML = "Nipple";
if (string == "nq")
document.getElementById("content-display").innerHTML = "Nacho";
if (string == "nr")
document.getElementById("content-display").innerHTML = "Near";
if (string == "ns")
document.getElementById("content-display").innerHTML = "Nose";
if (string == "nt")
document.getElementById("content-display").innerHTML = "net";
if (string == "nu")
document.getElementById("content-display").innerHTML = "Nut";
if (string == "nv")
document.getElementById("content-display").innerHTML = "Nvidia";
if (string == "nw")
document.getElementById("content-display").innerHTML = "Newt";
if (string == "nx")
document.getElementById("content-display").innerHTML = "Nixon";

//******************* O letter pairs ********************
if (string == "oa")
document.getElementById("content-display").innerHTML = "Oar";
if (string == "ob")
document.getElementById("content-display").innerHTML = "Object";
if (string == "oc")
document.getElementById("content-display").innerHTML = "Octopus";
if (string == "od")
document.getElementById("content-display").innerHTML = "Oddish";
if (string == "oe")
document.getElementById("content-display").innerHTML = "Oboe";
if (string == "of")
document.getElementById("content-display").innerHTML = "Off";
if (string == "og")
document.getElementById("content-display").innerHTML = "Ogre";
if (string == "oh")
document.getElementById("content-display").innerHTML = "Oh";
if (string == "oi")
document.getElementById("content-display").innerHTML = "Oil";
if (string == "oj")
document.getElementById("content-display").innerHTML = "Orange Juice";
if (string == "ok")
document.getElementById("content-display").innerHTML = "Ok";
if (string == "ol")
document.getElementById("content-display").innerHTML = "Olive";
if (string == "om")
document.getElementById("content-display").innerHTML = "Omega";
if (string == "on")
document.getElementById("content-display").innerHTML = "On";
if (string == "op")
document.getElementById("content-display").innerHTML = "Oprah";
if (string == "oq")
document.getElementById("content-display").innerHTML = "Ocho";
if (string == "or")
document.getElementById("content-display").innerHTML = "Orca";
if (string == "os")
document.getElementById("content-display").innerHTML = "Ostrich";
if (string == "ot")
document.getElementById("content-display").innerHTML = "Otter";
if (string == "ou")
document.getElementById("content-display").innerHTML = "Ouija";
if (string == "ov")
document.getElementById("content-display").innerHTML = "Oven";
if (string == "ow")
document.getElementById("content-display").innerHTML = "Owl";
if (string == "ox")
document.getElementById("content-display").innerHTML = "Ox";


//******************* P letter pairs ********************
if (string == "pa")
document.getElementById("content-display").innerHTML = "Pa";
if (string == "pb")
document.getElementById("content-display").innerHTML = "Pub";
if (string == "pc")
document.getElementById("content-display").innerHTML = "Pac Man";
if (string == "pd")
document.getElementById("content-display").innerHTML = "Pad";
if (string == "pe")
document.getElementById("content-display").innerHTML = "Pee";
if (string == "pf")
document.getElementById("content-display").innerHTML = "Poof";
if (string == "pg")
document.getElementById("content-display").innerHTML = "Pig";
if (string == "ph")
document.getElementById("content-display").innerHTML = "Phoenix";
if (string == "pi")
document.getElementById("content-display").innerHTML = "Pie";
if (string == "pj")
document.getElementById("content-display").innerHTML = "Pajamas";
if (string == "pk")
document.getElementById("content-display").innerHTML = "Pikachu";
if (string == "pl")
document.getElementById("content-display").innerHTML = "Pill";
if (string == "pm")
document.getElementById("content-display").innerHTML = "Pom pom";
if (string == "pn")
document.getElementById("content-display").innerHTML = "Pen";
if (string == "po")
document.getElementById("content-display").innerHTML = "Poo";
if (string == "pq")
document.getElementById("content-display").innerHTML = "Patch";
if (string == "pr")
document.getElementById("content-display").innerHTML = "Pear";
if (string == "ps")
document.getElementById("content-display").innerHTML = "PlayStation";
if (string == "pt")
document.getElementById("content-display").innerHTML = "Pot";
if (string == "pu")
document.getElementById("content-display").innerHTML = "Pumpkin";
if (string == "pv")
document.getElementById("content-display").innerHTML = "Pave";
if (string == "pw")
document.getElementById("content-display").innerHTML = "Paw";
if (string == "px")
document.getElementById("content-display").innerHTML = "Pixie";

//******************* Q letter pairs ********************
if (string == "qa")
document.getElementById("content-display").innerHTML = "Quartz";
if (string == "qb")
document.getElementById("content-display").innerHTML = "Quarterback";
if (string == "qc")
document.getElementById("content-display").innerHTML = "Quick";
if (string == "qd")
document.getElementById("content-display").innerHTML = "Quad";
if (string == "qe")
document.getElementById("content-display").innerHTML = "Queen";
if (string == "qf")
document.getElementById("content-display").innerHTML = "Quaffle";
if (string == "qg")
document.getElementById("content-display").innerHTML = "Quagmire";
if (string == "qh")
document.getElementById("content-display").innerHTML = "Quiche";
if (string == "qi")
document.getElementById("content-display").innerHTML = "Quill";
if (string == "qj")
document.getElementById("content-display").innerHTML = "Squeegee";
if (string == "qk")
document.getElementById("content-display").innerHTML = "Quake";
if (string == "ql")
document.getElementById("content-display").innerHTML = "Quail";
if (string == "qm")
document.getElementById("content-display").innerHTML = "Quantum Mechanics";
if (string == "qn")
document.getElementById("content-display").innerHTML = "Harley Quinn";
if (string == "qo")
document.getElementById("content-display").innerHTML = "QuiGon Jinn";
if (string == "qp")
document.getElementById("content-display").innerHTML = "Quip";
if (string == "qr")
document.getElementById("content-display").innerHTML = "QR Code";
if (string == "qs")
document.getElementById("content-display").innerHTML = "Quicksilver";
if (string == "qt")
document.getElementById("content-display").innerHTML = "Quit";
if (string == "qu")
document.getElementById("content-display").innerHTML = "Quarry";
if (string == "qv")
document.getElementById("content-display").innerHTML = "Quiver";
if (string == "qw")
document.getElementById("content-display").innerHTML = "Qwerty";
if (string == "qx")
document.getElementById("content-display").innerHTML = "Quicksand";

//******************* R letter pairs ********************
if (string == "ra")
document.getElementById("content-display").innerHTML = "Racoon";
if (string == "rb")
document.getElementById("content-display").innerHTML = "Root Beer";
if (string == "rc")
document.getElementById("content-display").innerHTML = "Race Car";
if (string == "rd")
document.getElementById("content-display").innerHTML = "Rod";
if (string == "re")
document.getElementById("content-display").innerHTML = "Reaver";
if (string == "rf")
document.getElementById("content-display").innerHTML = "Raft";
if (string == "rg")
document.getElementById("content-display").innerHTML = "Rug";
if (string == "rh")
document.getElementById("content-display").innerHTML = "Rhino";
if (string == "ri")
document.getElementById("content-display").innerHTML = "Rice";
if (string == "rj")
document.getElementById("content-display").innerHTML = "RJ45";
if (string == "rk")
document.getElementById("content-display").innerHTML = "Rake";
if (string == "rl")
document.getElementById("content-display").innerHTML = "Rail";
if (string == "rm")
document.getElementById("content-display").innerHTML = "RAM";
if (string == "rn")
document.getElementById("content-display").innerHTML = "Rain";
if (string == "ro")
document.getElementById("content-display").innerHTML = "Rook";
if (string == "rp")
document.getElementById("content-display").innerHTML = "Rope";
if (string == "rq")
document.getElementById("content-display").innerHTML = "Rich";
if (string == "rs")
document.getElementById("content-display").innerHTML = "Rose";
if (string == "rt")
document.getElementById("content-display").innerHTML = "Rat";
if (string == "ru")
document.getElementById("content-display").innerHTML = "Ruby";
if (string == "rv")
document.getElementById("content-display").innerHTML = "RV";
if (string == "rw")
document.getElementById("content-display").innerHTML = "Raw";
if (string == "rx")
document.getElementById("content-display").innerHTML = "T-Rex";

//******************* S letter pairs ********************
if (string == "sa")
document.getElementById("content-display").innerHTML = "Say";
if (string == "sb")
document.getElementById("content-display").innerHTML = "Sub";
if (string == "sc")
document.getElementById("content-display").innerHTML = "Sac";
if (string == "sd")
document.getElementById("content-display").innerHTML = "Sad";
if (string == "se")
document.getElementById("content-display").innerHTML = "See";
if (string == "sf")
document.getElementById("content-display").innerHTML = "Safe";
if (string == "sg")
document.getElementById("content-display").innerHTML = "Segway";
if (string == "sh")
document.getElementById("content-display").innerHTML = "Ship";
if (string == "si")
document.getElementById("content-display").innerHTML = "Sigh";
if (string == "sj")
document.getElementById("content-display").innerHTML = "Sage";
if (string == "sk")
document.getElementById("content-display").innerHTML = "Skeleton";
if (string == "sl")
document.getElementById("content-display").innerHTML = "Sail";
if (string == "sm")
document.getElementById("content-display").innerHTML = "Sam";
if (string == "sn")
document.getElementById("content-display").innerHTML = "Sun";
if (string == "so")
document.getElementById("content-display").innerHTML = "Sofa";
if (string == "sp")
document.getElementById("content-display").innerHTML = "Soap";
if (string == "sq")
document.getElementById("content-display").innerHTML = "Squirrel";
if (string == "sr")
document.getElementById("content-display").innerHTML = "Star";
if (string == "st")
document.getElementById("content-display").innerHTML = "Sit";
if (string == "su")
document.getElementById("content-display").innerHTML = "Sue";
if (string == "sv")
document.getElementById("content-display").innerHTML = "Save";
if (string == "sw")
document.getElementById("content-display").innerHTML = "Saw";
if (string == "sx")
document.getElementById("content-display").innerHTML = "Sex";

//******************* T letter pairs ********************
if (string == "ta")
document.getElementById("content-display").innerHTML = "TA";
if (string == "tb")
document.getElementById("content-display").innerHTML = "Tub";
if (string == "tc")
document.getElementById("content-display").innerHTML = "Taco";
if (string == "td")
document.getElementById("content-display").innerHTML = "Toad";
if (string == "te")
document.getElementById("content-display").innerHTML = "Tee";
if (string == "tf")
document.getElementById("content-display").innerHTML = "Taffy";
if (string == "tg")
document.getElementById("content-display").innerHTML = "Tag";
if (string == "th")
document.getElementById("content-display").innerHTML = "Thor";
if (string == "ti")
document.getElementById("content-display").innerHTML = "Tie";
if (string == "tj")
document.getElementById("content-display").innerHTML = "Trojan Horse";
if (string == "tk")
document.getElementById("content-display").innerHTML = "Tack";
if (string == "tl")
document.getElementById("content-display").innerHTML = "Tail";
if (string == "tm")
document.getElementById("content-display").innerHTML = "Tim";
if (string == "tn")
document.getElementById("content-display").innerHTML = "TNT";
if (string == "to")
document.getElementById("content-display").innerHTML = "Toe";
if (string == "tp")
document.getElementById("content-display").innerHTML = "Toilet Paper";
if (string == "tq")
document.getElementById("content-display").innerHTML = "Taquitos";
if (string == "tr")
document.getElementById("content-display").innerHTML = "Tire";
if (string == "ts")
document.getElementById("content-display").innerHTML = "Tassle";
if (string == "tu")
document.getElementById("content-display").innerHTML = "Tutu";
if (string == "tv")
document.getElementById("content-display").innerHTML = "TV";
if (string == "tw")
document.getElementById("content-display").innerHTML = "Tow Truck";
if (string == "tx")
document.getElementById("content-display").innerHTML = "Tuxedo";

//******************* U letter pairs ********************
if (string == "ua")
document.getElementById("content-display").innerHTML = "USA";
if (string == "ub")
document.getElementById("content-display").innerHTML = "Umbreon";
if (string == "uc")
document.getElementById("content-display").innerHTML = "Unicorn";
if (string == "ud")
document.getElementById("content-display").innerHTML = "Udder";
if (string == "ue")
document.getElementById("content-display").innerHTML = "Wee";
if (string == "uf")
document.getElementById("content-display").innerHTML = "UFO";
if (string == "ug")
document.getElementById("content-display").innerHTML = "Uggs";
if (string == "uh")
document.getElementById("content-display").innerHTML = "Uhaul";
if (string == "ui")
document.getElementById("content-display").innerHTML = "UI";
if (string == "uj")
document.getElementById("content-display").innerHTML = "Judge";
if (string == "uk")
document.getElementById("content-display").innerHTML = "Ukelele";
if (string == "ul")
document.getElementById("content-display").innerHTML = "Ulcer";
if (string == "um")
document.getElementById("content-display").innerHTML = "Umbrella";
if (string == "un")
document.getElementById("content-display").innerHTML = "UNO";
if (string == "uo")
document.getElementById("content-display").innerHTML = "U of O";
if (string == "up")
document.getElementById("content-display").innerHTML = "Up";
if (string == "uq")
document.getElementById("content-display").innerHTML = "Umpqua";
if (string == "ur")
document.getElementById("content-display").innerHTML = "Urine";
if (string == "us")
document.getElementById("content-display").innerHTML = "Use";
if (string == "ut")
document.getElementById("content-display").innerHTML = "Utility";
if (string == "uv")
document.getElementById("content-display").innerHTML = "UV light";
if (string == "uw")
document.getElementById("content-display").innerHTML = "Underwater";
if (string == "ux")
document.getElementById("content-display").innerHTML = "User Experience";

//******************* V letter pairs ********************
if (string == "va")
document.getElementById("content-display").innerHTML = "Vapor";
if (string == "vb")
document.getElementById("content-display").innerHTML = "Volleyball";
if (string == "vc")
document.getElementById("content-display").innerHTML = "Vacuum";
if (string == "vd")
document.getElementById("content-display").innerHTML = "Video";
if (string == "ve")
document.getElementById("content-display").innerHTML = "Vent";
if (string == "vf")
document.getElementById("content-display").innerHTML = "Venus Flytrap";
if (string == "vg")
document.getElementById("content-display").innerHTML = "Vegas";
if (string == "vh")
document.getElementById("content-display").innerHTML = "VHS";
if (string == "vi")
document.getElementById("content-display").innerHTML = "Visor";
if (string == "vj")
document.getElementById("content-display").innerHTML = "Virgil";
if (string == "vk")
document.getElementById("content-display").innerHTML = "Viking";
if (string == "vl")
document.getElementById("content-display").innerHTML = "Vial";
if (string == "vm")
document.getElementById("content-display").innerHTML = "Vampire";
if (string == "vn")
document.getElementById("content-display").innerHTML = "Van";
if (string == "vo")
document.getElementById("content-display").innerHTML = "Volvo";
if (string == "vp")
document.getElementById("content-display").innerHTML = "Vape";
if (string == "vq")
document.getElementById("content-display").innerHTML = "Ventriloquist";
if (string == "vr")
document.getElementById("content-display").innerHTML = "VR";
if (string == "vs")
document.getElementById("content-display").innerHTML = "Vase";
if (string == "vt")
document.getElementById("content-display").innerHTML = "Vet";
if (string == "vu")
document.getElementById("content-display").innerHTML = "Vulture";
if (string == "vw")
document.getElementById("content-display").innerHTML = "Vow";
if (string == "vx")
document.getElementById("content-display").innerHTML = "Vaxine";

//******************* W letter pairs ********************
if (string == "wa")
document.getElementById("content-display").innerHTML = "Whale";
if (string == "wb")
document.getElementById("content-display").innerHTML = "Web";
if (string == "wc")
document.getElementById("content-display").innerHTML = "Witch";
if (string == "wd")
document.getElementById("content-display").innerHTML = "Weed";
if (string == "we")
document.getElementById("content-display").innerHTML = "We";
if (string == "wf")
document.getElementById("content-display").innerHTML = "Waffle";
if (string == "wg")
document.getElementById("content-display").innerHTML = "Wig";
if (string == "wh")
document.getElementById("content-display").innerHTML = "Whiskers";
if (string == "wi")
document.getElementById("content-display").innerHTML = "Wii";
if (string == "wj")
document.getElementById("content-display").innerHTML = "Wedge";
if (string == "wk")
document.getElementById("content-display").innerHTML = "Wok";
if (string == "wl")
document.getElementById("content-display").innerHTML = "Wall";
if (string == "wm")
document.getElementById("content-display").innerHTML = "Woman";
if (string == "wn")
document.getElementById("content-display").innerHTML = "Window";
if (string == "wo")
document.getElementById("content-display").innerHTML = "Wolf";
if (string == "wp")
document.getElementById("content-display").innerHTML = "Whip";
if (string == "wq")
document.getElementById("content-display").innerHTML = "Watch";
if (string == "wr")
document.getElementById("content-display").innerHTML = "War";
if (string == "ws")
document.getElementById("content-display").innerHTML = "Wasabi";
if (string == "wt")
document.getElementById("content-display").innerHTML = "Water";
if (string == "wu")
document.getElementById("content-display").innerHTML = "Wukong";
if (string == "wv")
document.getElementById("content-display").innerHTML = "Wave";
if (string == "wx")
document.getElementById("content-display").innerHTML = "Wax";

//******************* x letter pairs ********************
if (string == "xa")
document.getElementById("content-display").innerHTML = "Antman";
if (string == "xb")
document.getElementById("content-display").innerHTML = "Beast";
if (string == "xc")
document.getElementById("content-display").innerHTML = "Cyclops";
if (string == "xd")
document.getElementById("content-display").innerHTML = "Disney XD";
if (string == "xe")
document.getElementById("content-display").innerHTML = "Electric Eel";
if (string == "xf")
document.getElementById("content-display").innerHTML = "Phantom of the Opera";
if (string == "xg")
document.getElementById("content-display").innerHTML = "Gambit";
if (string == "xh")
document.getElementById("content-display").innerHTML = "Helicopter";
if (string == "xi")
document.getElementById("content-display").innerHTML = "Iceman";
if (string == "xj")
document.getElementById("content-display").innerHTML = "Jubilee";
if (string == "xk")
document.getElementById("content-display").innerHTML = "Ghengis Kahn";
if (string == "xl")
document.getElementById("content-display").innerHTML = "Lord of the Ring";
if (string == "xm")
document.getElementById("content-display").innerHTML = "Magneto";
if (string == "xn")
document.getElementById("content-display").innerHTML = "Night Crawler";
if (string == "xo")
document.getElementById("content-display").innerHTML = "Ororo Munro";
if (string == "xp")
document.getElementById("content-display").innerHTML = "Windows XP";
if (string == "xq")
document.getElementById("content-display").innerHTML = "Quicksilver";
if (string == "xr")
document.getElementById("content-display").innerHTML = "Rogue";
if (string == "xs")
document.getElementById("content-display").innerHTML = "Spiderman";
if (string == "xt")
document.getElementById("content-display").innerHTML = "Terminator";
if (string == "xu")
document.getElementById("content-display").innerHTML = "Unicorn";
if (string == "xv")
document.getElementById("content-display").innerHTML = "Xavier";
if (string == "xw")
document.getElementById("content-display").innerHTML = "Wolverine";

// else
// document.getElementById("content-display").innerHTML = "Error...";

}
