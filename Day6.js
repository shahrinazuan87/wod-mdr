/**
Largest Adjacent Product

Given an array of integers, find the pair of adjacent 
elements that has the largest product and return that product.

**/

var inputArray1 = [7,5,3,-3,4,-2];
var inputArray2 = [6,2,1,-2,8,-9];
var inputArray3 = [4,5,5,3,-4,-7];


function adjacentProduct(arr){
  var answer = 0;
  for(i=0; i<arr.length; i++){
    var a=0;
    var b=0;
    if( i == 0 ){
       a = arr[i] * arr[i + 1];
    }
    else if ( i == arr.length ){
       b = arr[i] * arr[i - 1];
    }
    else {
      a = arr[i] * arr[i + 1]; 
      b = arr[i] * arr[i - 1];
    }
    
    if(a > answer){
      answer = a;
    }
    if(b > answer){
      answer = b;
    }
  }
  return answer;
}

document.write(adjacentProduct(inputArray2));
