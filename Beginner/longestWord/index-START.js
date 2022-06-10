/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function longestWord(text) {
    // Code goes here
    // function that returns longest word in sentence
    // return as a single string
    // split the sentence 
    //lopp through the length of each word
    // return word with longest length

    let newText = text.split(' ')
    let longest = ''

    for (let i = 0; i < newText.length; i++) {
        if (newText[i].length > longest.length) {
            longest = newText[i]
        }
    }
    return longest
}





module.exports = longestWord