/**
Transform hour to military format 

Given a time in -hour AM/PM format, convert it to military (-hour) time.
Note: Midnight is on a -hour clock, and on a -hour clock. Noon is on a -hour clock, and on a -hour clock.

Input Format 
A single string containing a time in -hour clock format (i.e.: or ), where 00 <= h <= 23 and 00 <= m <= 59.

Output Format
Convert and print the given time in -hour format, where .

Sample Input = Sample Output

07:05:45PM = 19:05:45 12:05:45AM = 00:05:45 12:05:45PM = 12:05:45
**/

var d = "12:05:45 PM";
var b,c,e,f,g;

if( d.charAt(9) == 'P'){
  if( d.charAt(0) == 1 && d.charAt(1) == 2) {
    c = d.slice(0);
    e = parseInt(c);
    b = e + 0; 
   }
  else {
    c = d.slice(0,2);
    e = parseInt(c);
    b = e + 12; 
  }
}

if( d.charAt(9) == 'A'){
  if( d.charAt(0) == 1 && d.charAt(1) == 2) {
      c = d.slice(0,2);
      e = parseInt(c);
      b = "0" + (e - 12);
  }
  else if ( d.charAt(0) == 1){
    c = d.slice(0);
    e = parseInt(c);
    b = e + 0; 
  }
  else {
    c = d.slice(0);
    e = parseInt(c);
    b = "0" + (e + 0); 
  }
}

f = b + d.slice(2,8);
g = d.slice(0);

document.write(g + " = " + f);
