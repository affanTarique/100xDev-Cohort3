//Assignment #1: Write a function sum that finds the sum of two numbers.
function sum(a, b) {
    return a + b;
}

// Example usage:
console.log(sum(5, 3)); // Output: 8
console.log(sum(5, 2));
console.log(sum(5, 8));
console.log(sum(5, 6));


//side-quest
console.log(sum("4", "7"));

//Assignment #2: Write a function called canVote 
//that returns true or false if the age of a user is > 18.

function canVote(age) {
    return age > 18;
}

// Example usage:
console.log(canVote(20)); // Output: true
console.log(canVote(17)); // Output: false

let myAge = 21; 
console.log(canVote(myAge)); // Output: true (since 21 > 18)

let affanAge = 19; 
console.log(canVote(affanAge)); // Output: true (since 19 > 18)

let friendAge = 17;
console.log(canVote(friendAge)); 