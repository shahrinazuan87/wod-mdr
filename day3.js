/*​A prime number (or a prime) is a natural number greater
than 1 that has no positive divisorsother than 1 and itself. 
Print all the prime number between 1-1000 */

function isPrime(num){
  if(num%2 == 0){
    return false;
  }
  
 for(i=3; i<num; i+=2){ 
    if(num%i == 0){
      return false;
    }
   }
  return true;
 }

for(i=1; i<=1000; i++){
  if(isPrime(i) == true){
    document.write(i + "<br>");
  }
}
