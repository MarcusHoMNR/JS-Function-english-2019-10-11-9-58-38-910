// ## requirement 
    
// - Create a new main. Js file, write a function, implement the following function: a string output in reverse order.

// ```
// function reverseString(message){
//   // wirte your code here
// }
// reverseString('hello'); // should return 'olleh'
// ```

function reverseString(message){
    if (message === undefined || message === null || message.length === 0) {
        return null
    }
    var charArray = message.split("");
    charArray.reverse()
    return charArray.join("")
}
console.log(reverseString('hello')); // should return 'olleh'
