/*
Sum of even fibonacci

Each new term in the Fibonacci sequence 
is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 
terms will be

1,1,2,3,5,8,13,21,34,55,89,...

find the sum of the even-valued terms for all 
Fibonacci number less than 1000
*/

var count1 = 0;
var count2 = 1;
var result = 1;
var total = 0;

for(i=0; count2<1000; i++) {
  document.write(result + ", ");
  result = count1 + count2;
  count1 = count2;
  count2 = result;  
  
  if( result % 2 == 0){
    total = total + result;  
   }
}

document.write("<br>" + "The sum of the even-valued terms for 
all Fibonacci number less than 1000 is " + total);







