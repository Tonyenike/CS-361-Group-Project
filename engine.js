/*
 *  This is where all Rubik's Cube functions and back-end code will reside.
 *  If you want a separate file for the face and square functions,
 *  you can create the appropriate .js file yourself.
 *
 *  This is for Phillip, Keenan, and Jesse to work on.
 */


// Write your functions and object declarations here.


	// You'll put your public functions here so the server can call them and use them.

class Square{
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
	getFace(){
		return this;
	}
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
 	* We can spin the face either clockwise or
 	* counterclockwise
 	*/

	spinFace(direction){
		if(direction === "clockwise")
		{

			var temp1 = this.tr;
			var temp2 = this.tl;
			var temp3 = this.br;
			var temp4 = this.bl;

			this.tr = temp2;
			this.tl = temp4;
			this.br = temp1;
			this.bl = temp3;

			temp1 = this.tm;
			temp2 = this.ml;
			temp3 = this.mr;
			temp4 = this.bm;

			this.tm = temp2;
			this.ml = temp4;
			this.mr = temp1;
			this.bm = temp3;
		}
		else if(direction === "counterclockwise")
		{

			var temp1 = this.tr;
			var temp2 = this.tl;
			var temp3 = this.br;
			var temp4 = this.bl;

			this.tr = temp3;
			this.tl = temp1;
			this.br = temp4;
			this.bl = temp2;

			temp1 = this.tm;
			temp2 = this.ml;
			temp3 = this.mr;
			temp4 = this.bm;

			this.tm = temp3;
			this.ml = temp1;
			this.mr = temp4;
			this.bm = temp2;
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
	moveFace(source, dest){
		this.setFace(dest, this.getFace(source));		
	}
}
