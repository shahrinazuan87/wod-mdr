/**
Vowel Counter
Write a JavaScript function to count the number of vowels in a given string
**/

var example1 = "Vowel Counter";
var example2 = "Asian Developer Academy";
var example3 = "Apps For Early Education Center";

function vowelCount(string){
  var characterVowels = 0; 
  var string1 = string.toLowerCase();
  
  for(i=0; i<string1.length; i++){
    if(string1.charAt(i) ==  'a' || string1.charAt(i) == 'o' || string1.charAt(i) == 'u' || string1.charAt(i) == 'e' || string1.charAt(i) == 'i' ){
      characterVowels++;
    }
  }  
  return characterVowels;
}

document.write(vowelCount(example2));
