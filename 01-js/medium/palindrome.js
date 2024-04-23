/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

//malayalam
function isPalindrome(str) {
str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
for(let i=0;i<str.length/2-1;i++){

  if(str[i] !== str[str.length-i-1]){
    return false;
  }
}

  return true;
}

//console.log(isPalindrome('Eva, can I see bees in a cave?'));
// isPalindrome("masrdam");

module.exports = isPalindrome;
