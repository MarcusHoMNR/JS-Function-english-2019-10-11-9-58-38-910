// ## requirement 
    
// - Create a new main.js file and write a function that does the following: determine whether a string is a palindrome string. (Palindrome, a string read from the beginning as well as from the end. For example, abcba is a palindrome string.)

// ```
// function palindrome(message){
//   // wirte your code here
// }
// palindrome('hello'); // should return false
// palindrome('abcba'); // should return true
// ```

function palindrome(message){
    if (message === undefined || message === null || message.length === 0) {
        return true // empty word is considered as palindrome
    }
    var charArray = message.split("")
    if (charArray.length % 2 === 0) { // even length
        for (let i = 0; i <= ((charArray.length) / 2) - 1; i++) {
            if (charArray[i] !== charArray[charArray.length-(i + 1)]) {
                return false
            }
        }
    } else { // odd
        for (let i = 0; i < ((charArray.length - 1) / 2); i++) {
            if (charArray[i] !== charArray[charArray.length-(i + 1)]) {
                return false
            }
        }
    }
    return true
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true

