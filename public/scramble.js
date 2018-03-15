/*
 *   Establish connection to the server.
 */

var socket = io.connect('http://localhost:54500');

/*
 *   Client side functionality here.
 *   We need to make some agreements and hash out some things on how
 *   socket functionalities will work before I proceed.
 */
 document.getElementById("reveal").addEventListener("click", showhide);

 function showhide(){
   var x = document.getElementById("solution");
   if (x.style.display === "none"){
     x.style.display = "block";
   }
   else{
     x.style.display = "none";
   }
 }
