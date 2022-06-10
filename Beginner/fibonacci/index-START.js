/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    // Code goes here
    let num1 = 0
    let num2 = 1
    let counter = 1

while (counter <= n) {
    let sum = 0
    sum = num1 + num2
    num1 = num2
    num2 = sum

    counter++
} 
return num2
}

module.exports = fibonacci