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
