// reverse string functionality
function reverseString(word)
{
  const wordArray = word.split('');
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join('');
  return reversedWord;
}

function isPalindrome(word) {  
  //   copy the string to another newly declared variable
  //   reverse characters in the string character and  assign  it to a new variable
  //   compare reversed variable to original
  //   return the boolean value
  let reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  Add your pseudocode here
  create a function that accepts a single string argument
    convert string arg to lowercase
    copy the string to another newly declared variable
    reverse characters in the string character and  assign  it to a new variable
    compare reversed variable to original
    return the boolean value

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
