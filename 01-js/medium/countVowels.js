/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  //forOf is for value forIn is for index
  for(const letter of str){
    console.log(letter)
    if(letter === 'a' || letter === "e" || letter === "i" || letter === "o" || letter ==="u"){
      count += 1;
    }
  }

  return count;
}

function countVowelsMethod(str) {
  let count = 0;
  str = str.toLowerCase();

  const vowels = new Set(['a','e','i','o','u']);

  for(const letter of str){
   if(vowels.has(letter))
    count++;
  }
 
  return count;
}

// countVowels("AEaeihgdfsou")
//countVowelsMethod("AEaeihgdfsou")

module.exports = countVowels;