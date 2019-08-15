/*
Largest length in a sentence Return the length of 
the longest word in the provided sentence.

“The quick brown fox jumped run over the lazy dog” - 5
"Welcome to Asia Developer Academy" - 9
*/

var string2 = "The quick brown fox jumped run over the lazy dog";

var string1 = "Welcome to Asia Developer Academy";

function longestSentence(string){
  var answer = 0;
  var splittedString = string.split(" ");
  
  // cari & return string yg paling pnjg;
  for(i=0; i<splittedString.length; i++){
      if(splittedString[i].length >= answer){
        answer = splittedString[i].length;
      }        
  }  
  return answer;    
}

document.write(longestSentence(string1));
