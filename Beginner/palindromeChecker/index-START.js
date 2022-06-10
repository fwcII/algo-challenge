/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // Code goes here
    let reversedText = text.toLowerCase('').split('').reverse('')
    return reversedText
}



module.exports = palindromeChecker;