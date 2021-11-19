// ## requirement 
    
// - Create a new main.js file and write a function that outputs the incoming argument string alphabetically.

// ```
// function alphabetSort(message){
//   // wirte your code here
// }
// alphabetSort('hello'); // should return 'ehllo'
// ```

function alphabetSort(message){
    if (message === undefined || message === null || message.length === 0) {
        return null
    }

    var charArray = message.split("")
    charArray.sort();
    return charArray.join("")

}
console.log(alphabetSort('hello')); // should return 'ehllo'
