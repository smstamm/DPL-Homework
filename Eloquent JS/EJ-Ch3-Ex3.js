// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

function countBs(str) {
  if (typeof str !== "string") {
      console.log("Please enter a string");
  }
  var total = 0;
  for (var i = 0; i <= str.length -1; i++) {
    if (str.charAt(i) === "B") {
      total++;
    }
  }
  return total;
}

console.log(countBs("BBC"));


// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function. 

function countChar(str, charToCount) {
  if (typeof str !== "string") {
      console.log("Please enter a string");
  }
  var total = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === charToCount) {
      total++;
    }
  }
  return total;
}

console.log(countChar("kakkerlak", "k"));
