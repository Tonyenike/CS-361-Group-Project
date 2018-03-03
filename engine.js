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
 *	3. Add solver feature to the cube
 *	4. It might be more convenient to divide this file into multiple parts ~ 
 *	   should we do that? (as of Mar. 1, there are 330 lines).
 *	5. iOS support?
 *
 */



// Write your functions and object declarations here.

class Square{
	// The square constructor needs a color.
	// Valid colors are:
	// 	"red", "blue", "white", "green", "yellow", and "orange"
	constructor(color){
		this.setColor(color);
	}

	getColor(){
		return this.color;
	}
	
	setColor(color){
		this.color = color;
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
		this.tm.setColor(face.getSquare("tm").getColor());
		this.tl.setColor(face.getSquare("tl").getColor());
		
		this.mr.setColor(face.getSquare("mr").getColor());
		this.mm.setColor(face.getSquare("mm").getColor());
		this.ml.setColor(face.getSquare("ml").getColor());
		
		this.br.setColor(face.getSquare("br").getColor());
		this.bm.setColor(face.getSquare("bm").getColor());
		this.bl.setColor(face.getSquare("bl").getColor());
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
	setColor(loc, color){
		/*
 		*  This needs to be done still
		*/
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
		}
	}
}


module.exports = class Cube{
	// This is how the cube will be upon creation.
	constructor(){
		this.front  = new Face("red");
		this.back   = new Face("orange");
		this.right  = new Face("blue");		
		this.left   = new Face("green");
		this.bottom = new Face("yellow");
		this.top    = new Face("white");
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

	}
	solution(){
		// Should return a string of characters
		// that specify the solution to the cube in the
		// current state that it is in.
		//
		// Still needs to be done.
	}
	reset(){
		// Resets the Rubik's Cube to its
		// default position: solved
		//
		// Still needs to be done.
	}
}
