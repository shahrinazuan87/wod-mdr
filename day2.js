/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character. 
The characters should form a chess board. Passing this string to console.log should showsomething like this:

# # # # # 
 # # # #
# # # # # 
 # # # #
# # # # #
 # # # #
# # # # #

*/

var j;
var i;
var x = "#";
var y = "&nbsp";
for(i=1; i<=8; i++){
  for(j=1; j<=8; j++){
    if ( (i+j) % 2 == 0 ){
        document.write(x);
        }
    else {
     document.write(y); 
    }
  }    
  document.write("<br>");
}
