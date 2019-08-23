/*
Reverse the provided string.
*/

function reverseString(str) {
  var arr = str.split('');
  var rev = arr.reverse();
  var strCopy = rev.join('');
  return strCopy;
}

reverseString("hello");
