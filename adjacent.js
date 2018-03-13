
// Returns the adjacent edge to the edge that is given.
// No debugging yet for this function! We need it!
module.exports = function findAdj(face, position){
    var squareo;
    var faceo;
    if(face === "top"){
        squareo = "tm";         
        if(position === "tm"){
            faceo = "back";
        }
        else if(position === "mr"){
            faceo = "right";
        }
        else if(position === "ml"){
            faceo = "left";
        }
        else if(position === "bm"){
            faceo = "front";
        }
    }
    else{
        if(position === "tm"){
            faceo = "top";
        }
        else if(position === "bm"){
            faceo = "bottom";
        }
        if(face === "right"){
            squareo = "mr";
            if(position === "ml")
                faceo = "front";        
            else if (position === "mr"){
                squareo = "ml";
                faceo = "back";
            }
        }
        else if(face === "left"){
            squareo = "ml";
            if(position === "mr")
                faceo = "front";
            else if(position === "ml"){
                squareo = "mr";
                faceo = "back";
            }
        }
        else if(face === "front"){
            if(position === "mr"){
                squareo = "ml";
                faceo = "right";
            }
            else if(position === "ml"){
                squareo = "mr";
                faceo = "left";
            }
            else if(position === "tm")
                squareo = "bm";
            else
                squareo = "tm";
        }
        else if(face === "back"){
            if(position === "ml"){
                squareo = "mr";
                faceo = "right";
            }
            else if(position === "mr"){
                squareo = "ml";
                faceo = "left";
            }
            else if(position === "tm")
                squareo = "tm";
            else
                squareo = "bm";
        }
        else if(face === "bottom"){
            squareo = "bm";         
            if(position === "bm"){
                faceo = "back";
            }
            else if(position === "mr"){
                faceo = "right";
            }
            else if(position === "ml"){
                faceo = "left";
            }
            else if(position === "tm"){
                faceo = "front";
            }
        }
    }
    var wrapper = {
        facespot: faceo,
        squarespot: squareo
    };
    return wrapper;
}
