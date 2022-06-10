/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here
        let max = 0,
            maxChar = "";
        text.split("").forEach(function (letters) {
            if (text.split(letters).length >= max) {

                max = text.split(letters).length;

                maxChar = letters;

                console.log(letters)
                console.log(maxChar)
            }
        });
        return maxChar;
    };

module.exports = maxRecurringChar;