/*
 *  This is where all Rubik's Cube functions and back-end code will reside.
 *  If you want a separate file for the face and square functions,
 *  you can create the appropriate .js file yourself.
 *
 *  This is for Phillip, Keenan, and Jesse to work on.
 */


/* TO DO LIST:
 *
 * 	1. Add validation features to the cube on the back-end (make sure we don't get any weird colors)
 * 	2. Add scramble feature to the cube
 *	3. Add solver feature to the cube - CURRENTLY BEING COMPLETED
 *	4. It might be more convenient to divide this file into multiple parts ~ 
 *	   should we do that? (as of Mar. 1, there are 330 lines).
 *	5. iOS support?
 *
 */

var adj = require('./adjacent.js');

// Write your functions and object declarations here.

class Square{
	// The square constructor needs a color.
	// Valid colors are:
	// 	"red", "blue", "white", "green", "yellow", and "orange"
	constructor(color){
		this.setColor(color);
		this.letter = "";
	}

	getColor(){
		return this.color;
	}
	
	setColor(color){
		this.color = color;
	}
	getLetter(){
		return this.letter;
	}
	setLetter(letter){
		this.letter = letter;
	}
}


class Face{

	/* The entire face, upon creation,
 	*  will be set to the same color
 	*  which is specified by the parameter.
 	*/
	constructor(color){
		this.tr = new Square(color);
		this.tm = new Square(color);
		this.tl = new Square(color);

		this.mr = new Square(color);
		this.mm = new Square(color);
		this.ml = new Square(color);

		this.br = new Square(color);
		this.bm = new Square(color);
		this.bl = new Square(color);

	}

	// self-explanatory.
	getFace(){
		return this;
	}

	/* This function will take the contents of the squares of 
 	*  the parameter, and move them into the current face object.
 	*  
	*/
	setFace(face){
		this.tr.setColor(face.getSquare("tr").getColor());
		this.tr.setLetter(face.getSquare("tr").getLetter());
		this.tm.setColor(face.getSquare("tm").getColor());
		this.tm.setLetter(face.getSquare("tm").getLetter());
		this.tl.setColor(face.getSquare("tl").getColor());
		this.tl.setLetter(face.getSquare("tl").getLetter());
		
		this.mr.setColor(face.getSquare("mr").getColor());
		this.mr.setLetter(face.getSquare("mr").getLetter());
		this.mm.setColor(face.getSquare("mm").getColor());
		this.mm.setLetter(face.getSquare("mm").getLetter());
		this.ml.setColor(face.getSquare("ml").getColor());
		this.ml.setLetter(face.getSquare("ml").getLetter());
		
		this.br.setColor(face.getSquare("br").getColor());
		this.br.setLetter(face.getSquare("br").getLetter());
		this.bm.setColor(face.getSquare("bm").getColor());
		this.bm.setLetter(face.getSquare("bm").getLetter());
		this.bl.setColor(face.getSquare("bl").getColor());
		this.bl.setLetter(face.getSquare("bl").getLetter());
	}

	/* This function will get the square
 	*  from the location specified. 
 	*/
	getSquare(loc){
		if(loc === "tr")
			return this.tr;

		else if(loc === "tm")
			return this.tm;

		else if(loc === "tl")
			return this.tl;
	
		else if(loc === "mr")
			return this.mr;

		else if(loc === "mm")
			return this.mm;

		else if(loc === "ml")
			return this.ml;
	
		else if(loc === "br")
			return this.br;

		else if(loc === "bm")
			return this.bm;

		else if(loc === "bl")
			return this.bl;
		else
			return null;
	}


	/*
 	*   Sets the color of a square on the face specified
 	*   by its location.
 	*/ 
	setSquare(loc, squ){
		if(loc === "tr")
		{
			this.tr.letter = squ.letter;
			this.tr.color = squ.color;
		}
		else if(loc === "tm")
		{
			this.tm.letter = squ.letter;
			this.tm.color = squ.color;
		}
		else if(loc === "tl")
		{
			this.tl.letter = squ.letter;
			this.tl.color = squ.color;
		}
		else if(loc === "mr")
		{
			this.mr.letter = squ.letter;
			this.mr.color = squ.color;
		}
		else if(loc === "mm")
		{
			this.mm.letter = squ.letter;
			this.mm.color = squ.color;
		}
		else if(loc === "ml")
		{
			this.ml.letter = squ.letter;
			this.ml.color = squ.color;
		}
		else if(loc === "br")
		{
			this.br.letter = squ.letter;
			this.br.color = squ.color;
		}
		else if(loc === "bm")
		{
			this.bm.letter = squ.letter;
			this.bm.color = squ.color;
		}
		else if(loc === "bl")
		{
			this.bl.letter = squ.letter;
			this.bl.color = squ.color;
		}
		else
			return null;
	}


	/*
 	* We can spin the face either clockwise or
 	* counterclockwise
 	*/
	spinFace(direction){
		if(direction === "clockwise")
		{

			var temp1 = this.tr.getColor();
			var temp2 = this.tl.getColor();
			var temp3 = this.br.getColor();
			var temp4 = this.bl.getColor();

			this.tr.setColor(temp2);
			this.tl.setColor(temp4);
			this.br.setColor(temp1);
			this.bl.setColor(temp3);

			temp1 = this.tm.getColor();
			temp2 = this.ml.getColor();
			temp3 = this.mr.getColor();
			temp4 = this.bm.getColor();

			this.tm.setColor(temp2);
			this.ml.setColor(temp4);
			this.mr.setColor(temp1);
			this.bm.setColor(temp3);
			
            temp1 = this.tm.getLetter();
			temp2 = this.ml.getLetter();
			temp3 = this.mr.getLetter();
			temp4 = this.bm.getLetter();

			this.tm.setLetter(temp2);
			this.ml.setLetter(temp4);
			this.mr.setLetter(temp1);
			this.bm.setLetter(temp3);
            
            temp1 = this.tr.getLetter();
			temp2 = this.tl.getLetter();
			temp3 = this.br.getLetter();
			temp4 = this.bl.getLetter();

			this.tr.setLetter(temp2);
			this.tl.setLetter(temp4);
			this.br.setLetter(temp1);
			this.bl.setLetter(temp3);
		}
		else if(direction === "counterclockwise")
		{

			var temp1 = this.tr.getColor();
			var temp2 = this.tl.getColor();
			var temp3 = this.br.getColor();
			var temp4 = this.bl.getColor();

            this.tr.setColor(temp3);
			this.tl.setColor(temp1);
			this.br.setColor(temp4);
			this.bl.setColor(temp2);

			temp1 = this.tm.getColor();
			temp2 = this.ml.getColor();
			temp3 = this.mr.getColor();
			temp4 = this.bm.getColor();

			this.tm.setColor(temp3);
			this.ml.setColor(temp1);
			this.mr.setColor(temp4);
			this.bm.setColor(temp2);
			
			temp1 = this.tm.getLetter();
			temp2 = this.ml.getLetter();
			temp3 = this.mr.getLetter();
			temp4 = this.bm.getLetter();

			this.tm.setLetter(temp3);
			this.ml.setLetter(temp1);
			this.mr.setLetter(temp4);
			this.bm.setLetter(temp2);
			
            temp1 = this.tr.getLetter();
			temp2 = this.tl.getLetter();
			temp3 = this.br.getLetter();
			temp4 = this.bl.getLetter();

			this.tr.setLetter(temp3);
			this.tl.setLetter(temp1);
			this.br.setLetter(temp4);
			this.bl.setLetter(temp2);
		}
	}
}


module.exports = class Cube{
	// This is how the cube will be upon creation.
	constructor(){
		this.front  = new Face("red");
		this.back   = new Face("orange");
		this.right  = new Face("green");		
		this.left   = new Face("blue");
		this.bottom = new Face("white");
		this.top    = new Face("yellow");
		var ss = new Square("yellow");
		ss.setLetter("A");
		this.top.setSquare("tl", ss);
		this.top.setSquare("tm", ss);

		ss.setLetter("B");
		this.top.setSquare("tr", ss);
		this.top.setSquare("mr", ss);

		ss.setLetter("C");
		this.top.setSquare("br", ss);
		this.top.setSquare("bm", ss);

		ss.setLetter("D");
		this.top.setSquare("bl", ss);
		this.top.setSquare("ml", ss);

		ss = new Square("red");
		ss.setLetter("E");
		this.front.setSquare("tl", ss);
		this.front.setSquare("tm", ss);

		ss.setLetter("F");
		this.front.setSquare("tr", ss);
		this.front.setSquare("mr", ss);

		ss.setLetter("G");
		this.front.setSquare("br", ss);
		this.front.setSquare("bm", ss);

		ss.setLetter("H");
		this.front.setSquare("bl", ss);
		this.front.setSquare("ml", ss);

		ss = new Square("blue");
		ss.setLetter("I");
		this.left.setSquare("tl", ss);
		this.left.setSquare("tm", ss);

		ss.setLetter("J");
		this.left.setSquare("tr", ss);
		this.left.setSquare("mr", ss);

		ss.setLetter("K");
		this.left.setSquare("br", ss);
		this.left.setSquare("bm", ss);

		ss.setLetter("L");
		this.left.setSquare("bl", ss);
		this.left.setSquare("ml", ss);

		ss = new Square("green");
		ss.setLetter("M");
		this.right.setSquare("tl", ss);
		this.right.setSquare("tm", ss);

		ss.setLetter("N");
		this.right.setSquare("tr", ss);
		this.right.setSquare("mr", ss);

		ss.setLetter("O");
		this.right.setSquare("br", ss);
		this.right.setSquare("bm", ss);

		ss.setLetter("P");
		this.right.setSquare("bl", ss);
		this.right.setSquare("ml", ss);

		ss = new Square("orange");
		ss.setLetter("Q");
		this.back.setSquare("tl", ss);
		this.back.setSquare("tm", ss);

		ss.setLetter("R");
		this.back.setSquare("tr", ss);
		this.back.setSquare("mr", ss);

		ss.setLetter("S");
		this.back.setSquare("br", ss);
		this.back.setSquare("bm", ss);

		ss.setLetter("T");
		this.back.setSquare("bl", ss);
		this.back.setSquare("ml", ss);

		ss = new Square("white");
		ss.setLetter("U");
		this.bottom.setSquare("tl", ss);
		this.bottom.setSquare("tm", ss);

		ss.setLetter("V");
		this.bottom.setSquare("tr", ss);
		this.bottom.setSquare("mr", ss);

		ss.setLetter("W");
		this.bottom.setSquare("br", ss);
		this.bottom.setSquare("bm", ss);

		ss.setLetter("X");
		this.bottom.setSquare("bl", ss);
		this.bottom.setSquare("ml", ss);

	}

	// Returns the face object based on the position
	// specified by the parameter.
	getFace(pos){
		if(pos === "front")
			return this.front;

		else if(pos === "back")
			return this.back;

		else if(pos === "left")
			return this.left;

		else if(pos === "right")
			return this.right;
	
		else if(pos === "top")
			return this.top;

		else if(pos === "bottom")
			return this.bottom;
	}
	setFace(pos, face){
		if(pos === "front")
			this.front.setFace(face);

		else if(pos === "back")
			this.back.setFace(face);

		else if(pos === "left")
			this.left.setFace(face);

		else if(pos === "right")
			this.right.setFace(face);

		else if(pos === "top")
			this.top.setFace(face);

		else if(pos === "bottom")
			this.bottom.setFace(face);
	}

	/* Moves the contents of one face on the cube
	*  to another face. For example, moveFace("front", "left")
	*  will move copy all of the contents of the front face
	*  and move them into the left face. the left face is
	*  now an exact copy of the front face.
	*/
	moveFace(source, dest){
		this.setFace(dest, this.getFace(source));		
	}

	/* This is a complex function. The options are:
 	*	"up", "down", "left", "right" "clockwise", "counterclockwise"
 	*
 	*  All rotations are taken from the perspective of facing
 	*  the front cube. For example, a "left" rotation would move the front face
 	*  to the left, the right face to the front, the back face to the right, and the
 	*  left face to the back. The top and bottom would be flipped clockwise
 	*  and counterclockwise, respectively.
 	*
 	*  We currently have no UI functionality to support clockwise and
 	*  counterclockwise movements, but they can be replicated by performing
 	*  a series of three movements. 
 	*
 	*  For counterclockwise	: Up, right, down
 	*  For clockwise	: Up, left,  down
 	*
 	*/ 
	rotateCube(direction){
		if(direction === "up")
		{
			this.top.spinFace("clockwise");
			this.top.spinFace("clockwise");
			this.back.spinFace("clockwise");
			this.back.spinFace("clockwise");


			var tempFace = new Face("red"); 	 // The color here is irrelevant
			tempFace.setFace(this.getFace("front")); // Make a copy of the front face
			this.moveFace("bottom", "front");	 
			this.moveFace("back", "bottom");	 
			this.moveFace("top", "back");		 
			this.setFace("top", tempFace);		 

			this.right.spinFace("clockwise");
			this.left.spinFace("counterclockwise");
		}		
		else if(direction === "down")
		{
			this.bottom.spinFace("clockwise");
			this.bottom.spinFace("clockwise");
			this.back.spinFace("clockwise");
			this.back.spinFace("clockwise");

			var tempFace = new Face("red"); 	 // The color here is irrelevant
			tempFace.setFace(this.getFace("front")); // Make a copy of the front face
			this.moveFace("top", "front");		 
			this.moveFace("back", "top");		 
			this.moveFace("bottom", "back");	 
			this.setFace("bottom", tempFace);	 
	
			this.left.spinFace("clockwise");
			this.right.spinFace("counterclockwise");
		}		
		else if(direction === "left")
		{
			var tempFace = new Face("red"); 	 // The color here is irrelevant
			tempFace.setFace(this.getFace("front")); // Make a copy of the front face
			this.moveFace("right", "front");	 // Copy the right face onto the front face
			this.moveFace("back", "right");		 // Copy the back face onto the right face
			this.moveFace("left", "back");		 // Copy the left face onto the back face
			this.setFace("left", tempFace);		 // Use the copy to put onto the left face

			this.top.spinFace("clockwise");
			this.bottom.spinFace("counterclockwise");
		}		
		else if(direction === "right")
		{
			var tempFace = new Face("red"); 	 // The color here is irrelevant
			tempFace.setFace(this.getFace("front")); // Make a copy of the front face
			this.moveFace("left", "front");
			this.moveFace("back", "left");
			this.moveFace("right", "back");
			this.setFace("right", tempFace);	

			this.top.spinFace("counterclockwise");
			this.bottom.spinFace("clockwise");
		}		
		else if(direction === "clockwise")
		{
			this.rotateCube("up");
			this.rotateCube("left");
			this.rotateCube("down");
			
		}		
		else if(direction === "counterclockwise")
		{
			this.rotateCube("up");
			this.rotateCube("right");
			this.rotateCube("down");
		}		
	}
	scramble(){

		// This needs to be done.
		// Talk to Keenan about specifics

	}


	solution(){
		// Should return a string of characters
		// that specify the solution to the cube in the
		// current state that it is in.
		//
		// Still needs to be done.
        
        // First: We need to figure out the lettering scheme.
        // This will always be determined by the default position.
        //
        // I suppose, if we have time, we could add a feature to let
        // the user choose the lettering scheme by changing which color
        // is at the top/front etc.
        
        var ltop    = "yellow";
        var lright  = "green";
        var lleft   = "blue";
        var lback   = "orange";
        var lbottom = "white";
        var lfront  = "red";
        
        // Solve the edges of the cube.
        return this.solveedges(ltop, lright, lleft, lback, lbottom, lfront);
        // Still need someone to solve corners here.
    }


    /*
    *  This grandiose function will output a string of letters,
    *  which corresponds to the solution of exclusively 
    *  the edges of the cube, if memorized blindfolded
    *  using the exact letter scheme provided below and starting buffer piece.
    *
    */
    solveedges(ltop, lright, lleft, lback, lbottom, lfront){

        var letteringscheme = [

                [ltop,     lback, "A"],
                [ltop,    lright, "B"],
                [ltop,    lfront, "C"],
                [ltop,     lleft, "D"],

                [lleft,     ltop, "E"],
                [lleft,   lfront, "F"],
                [lleft,  lbottom, "G"],
                [lleft,    lback, "H"],

                [lfront,    ltop, "I"],
                [lfront,  lright, "J"],
                [lfront, lbottom, "K"],
                [lfront,   lleft, "L"],

                [lright,    ltop, "M"],
                [lright,   lback, "N"],
                [lright, lbottom, "O"],
                [lright,  lfront, "P"],

                [lback,     ltop, "Q"],
                [lback,    lleft, "R"],
                [lback,  lbottom, "S"],
                [lback,   lright, "T"],

                [lbottom, lfront, "U"],
                [lbottom, lright, "V"],
                [lbottom,  lback, "W"],
                [lbottom,  lleft, "X"]

        ];

        // Then, the user *could* specify which piece they want to be their
        // buffer. I am not sure how we go about doing this.

        /*
        * NOTE THAT THE HELPER FUNCTIONS FINDEDGE AND ADJ 
        * ARE HERE TO HELP YOU IMPLEMENT THIS FUNCTION!
        */


        // Let us assume for now, that we are using the following lettering scheme:
        // https://teachkidsengineering.com/solve-rubiks-cube-blindfolded/
        // and that the default buffer piece is B-M, the yellow-green edge.

        var bufferedge1 = "yellow";
        var bufferedge2 = "green";

        var restoreDown = 0;
        var restoreLeft = 0;

        for(var i = 0; i < 4 && this.getFace("top").getSquare("mm").getColor() !== bufferedge1; i++){
            this.rotateCube("up");
            restoreDown++;
        }
        for(var i = 0; i < 4 && this.getFace("top").getSquare("mm").getColor() !== bufferedge1; i++){
            this.rotateCube("right");
            restoreLeft++;
        }

        for(var i = 0; i < 4 && this.getFace("right").getSquare("mm").getColor() !== bufferedge2; i++){
            this.rotateCube("right");
            restoreLeft++;
        }

        var solutionstring = "";
        var buffertemp1 = bufferedge1;
        var buffertemp2 = bufferedge2;

        var squarespots = [
            "tm",
            "mr",
            "bm",
            "ml"
        ];

        var facespots = [
            "top",
            "left",
            "front",
            "right",
            "back",
            "bottom"
        ];
        
        var facespot;
        var squarespot;

        var doy

        // 24 is the maximum number of moves to solve the edges, if they were all out of place AND flipped.
        // (12 edges * 2 moves per edge = 24 moves)
        for(var i = 0; i < 24; i++){
            // If we have the correct square in the buffer slot,
            // check to see if we have other squares that need to be shot first.
           if((bufferedge1 === buffertemp1 && bufferedge2 === buffertemp2) || 
              (bufferedge1 === buffertemp2 && bufferedge2 === buffertemp1)){
                // In the second scenario of the if statement, we actually KNOW that the cube
                // isn't be solved, but we need to find another edge to shoot to. Our solvededges()
                // function will return to us a new edge for us to shoot to.
                var content = this.solvededges();
                // The edges are solved. Return satisfied.
                if(content.status === "Good")
                    return solutionstring;
                // The edges are not solved. Shoot the buffer to someplace else.
                else{
                    buffertemp1 = this.getFace(content.facespot).getSquare(content.squarespot).getColor();
                    var doi = adj(content.facespot, content.squarespot);
                    buffertemp2 = this.getFace(doi.facespot).getSquare(doi.squarespot).getColor();
                    for(var j = 0; j < 24; j++){
                        if(content.facespot === facespots[j % 4] &&
                           content.squarespot === squarespots[(j - (j % 4)) / 4])
                        solutionstring = solutionstring + letteringscheme[j][2];
                    }
                }         
            }
            doy = true;
            // Shoot the square in the buffer slot to its correct spot.
            for(var j = 0; j < 24 && doy; j++){
                // Look for the place in the cube to shoot to. Once we find it, add its letter component to the solution string.
                if(buffertemp1 === letteringscheme[j][0] && buffertemp2 === letteringscheme[j][1]){
                    solutionstring = solutionstring + letteringscheme[j][2]; // Add the letter to the solution string
                    squarespot = squarespots[j % 4];
                    facespot = facespots[(j - (j % 4)) / 4];
                    doy = false;
                }
            }
            var context = adj(facespot, squarespot); // Find the adjacent square of the edge.
            buffertemp1 = this.getFace(facespot).getSquare(squarespot).getColor(); // Load color 1 into our buffertemp
            buffertemp2 = this.getFace(context.facespot).getSquare(context.squarespot).getColor(); // Load color 2 into our buffertemp
        }
        for(var i = 0; i < restoreDown; i++){
            this.rotateCube("down");
        }
        for(var i = 0; i < restoreLeft; i++){
            this.rotateCube("left");
        }
        return solutionstring;
	}


	// Resets the Rubik's Cube to its
	// default position: solved
	reset(){
		this.front  = new Face("red");
		this.back   = new Face("orange");
		this.right  = new Face("green");		
		this.left   = new Face("blue");
		this.bottom = new Face("white");
		this.top    = new Face("yellow");
		var ss = new Square("yellow");
		ss.setLetter("A");
		this.top.setSquare("tl", ss);
		this.top.setSquare("tm", ss);

		ss.setLetter("B");
		this.top.setSquare("tr", ss);
		this.top.setSquare("mr", ss);

		ss.setLetter("C");
		this.top.setSquare("br", ss);
		this.top.setSquare("bm", ss);

		ss.setLetter("D");
		this.top.setSquare("bl", ss);
		this.top.setSquare("ml", ss);

		ss = new Square("red");
		ss.setLetter("E");
		this.front.setSquare("tl", ss);
		this.front.setSquare("tm", ss);

		ss.setLetter("F");
		this.front.setSquare("tr", ss);
		this.front.setSquare("mr", ss);

		ss.setLetter("G");
		this.front.setSquare("br", ss);
		this.front.setSquare("bm", ss);

		ss.setLetter("H");
		this.front.setSquare("bl", ss);
		this.front.setSquare("ml", ss);

		ss = new Square("blue");
		ss.setLetter("I");
		this.left.setSquare("tl", ss);
		this.left.setSquare("tm", ss);
        console.log(this.left.tm);

		ss.setLetter("J");
		this.left.setSquare("tr", ss);
		this.left.setSquare("mr", ss);

		ss.setLetter("K");
		this.left.setSquare("br", ss);
		this.left.setSquare("bm", ss);

		ss.setLetter("L");
		this.left.setSquare("bl", ss);
		this.left.setSquare("ml", ss);

		ss = new Square("green");
		ss.setLetter("M");
		this.right.setSquare("tl", ss);
		this.right.setSquare("tm", ss);

		ss.setLetter("N");
		this.right.setSquare("tr", ss);
		this.right.setSquare("mr", ss);

		ss.setLetter("O");
		this.right.setSquare("br", ss);
		this.right.setSquare("bm", ss);

		ss.setLetter("P");
		this.right.setSquare("bl", ss);
		this.right.setSquare("ml", ss);

		ss = new Square("orange");
		ss.setLetter("Q");
		this.back.setSquare("tl", ss);
		this.back.setSquare("tm", ss);

		ss.setLetter("R");
		this.back.setSquare("tr", ss);
		this.back.setSquare("mr", ss);

		ss.setLetter("S");
		this.back.setSquare("br", ss);
		this.back.setSquare("bm", ss);

		ss.setLetter("T");
		this.back.setSquare("bl", ss);
		this.back.setSquare("ml", ss);

		ss = new Square("white");
		ss.setLetter("U");
		this.bottom.setSquare("tl", ss);
		this.bottom.setSquare("tm", ss);

		ss.setLetter("V");
		this.bottom.setSquare("tr", ss);
		this.bottom.setSquare("mr", ss);

		ss.setLetter("W");
		this.bottom.setSquare("br", ss);
		this.bottom.setSquare("bm", ss);

		ss.setLetter("X");
		this.bottom.setSquare("bl", ss);
		this.bottom.setSquare("ml", ss);

	}
    solvededges(){

        var squarespots = [
            "bm",
            "ml",
            "tm",
            "mr"
        ];

        var facespots = [
            "left",
            "front",
            "back",
            "bottom",
            "right",
            "top"
        ];

        var stat = "Good";        

        for(var i = 0; i < 6; i++){
            var col = this.getFace(facespots[i]).getSquare("mm").getColor();
            for(var j = 0; j < 4; j++){
                if(this.getFace(facespots[i]).getSquare(squarespots[j]).getColor() !== col){
                    stat = "Bad";
                    var wrapper = {
                        status: stat,
                        facespot: facespots[i],
                        squarespot: squarespots[j]
                    };
                    return wrapper;
                }   
            }
        }
        var wrapper = {
            status: stat,
        };
        return wrapper;
    }
}

