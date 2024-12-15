// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    const lowerStr = str.toLowerCase();

    const uniqueLetters = new Set(lowerStr);

    return uniqueLetters.size === lowerStr.length;
  }

//   function isIsogram(str){
// 	return new Set(str.toUpperCase()).size == str.length;
// }