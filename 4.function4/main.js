// ## requirement 
    
// - Create a new main.js file and write a function that calculates how many words a string contains.

// ```
// function countWords(message){
//   // wirte your code here
// }
// countWords('Good morning, I love JavaScript.'); // should return 5
// ```

function countWords(message){
    if (message === undefined || message === null || message.length === 0) {
        return 0 // empty word is considered as palindrome
    }
    var charArray = message.split(" ")
    return charArray.length
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5