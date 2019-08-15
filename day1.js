/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbersdivisible by 5 (and not 3), print "Buzz" instead and"FizzBuzz" 
for numbers that are divisible byboth 3 and 5
*/

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
