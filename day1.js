
var x=3;
var y=5;
// var z;
// var text = "";
for (i = 1; i <= 100; i++) {
  if(i % x == 0 && i % y == 0) {
     document.write("FizzBuzz<br>");
   }
  else if ( i % y == 0) {
    document.write("Buzz<br>");
  }
  else if ( i % x == 0) {
    document.write("Fizz<br>");
  }
  else {
    document.write(i + "<br>");
  }
}
