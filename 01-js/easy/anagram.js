/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  if(str1.length !== str2.length)return false;

  str1=str1.toLowerCase()
  str2=str2.toLowerCase()

  //convert string to array,sort arry,convert array to string
  let string1 = str1.split('').sort().join('');
  let string2 = str2.split('').sort().join('');
  console.log("STR",string1,string2);

  for(let i=0;i<string1.length;i++){
      console.log(string1[i],string2[i])
      if(string1[i] !== string2[i]){
        return false;
      }
  }
  return true;
}



module.exports = isAnagram;
