// Declare  variables: one of type int, one of type double, and one of type String.
// Read  lines of input from stdin(according to the sequence given in the Input Format section below) and initialize your variables.
// Use the  operator to perform the following operations:
// Print the sum of  plus your int variable on a new line.
// Print the sum of  plus your double variable to a scale of one decimal place on a new line.
// Concatenate  with the string you read as input and print the result on a new line.
let i = 4
let d = 4.0
let s = "HackerRank "
// Sample Output
// 16
// 8.0
// HackerRank is the best place to learn and practice coding!




//Node.js solution
console.log(i + parseFloat(readLine(int)));
console.log((d + parseFloat(readLine(double))).toFixed(1));
console.log(s + readLine(str));

let int = 12;
let double = 4.0;
let str = 'is the best place to learn and practice coding!';

//JS Solution 
console.log(i + int);
console.log(parseFloat(d + double).toFixed(1));
console.log(s + str);


// Code Challenge Explanation
// When we sum the integers  and, we get the integer.
// When we sum the floating - point numbers  and, we get.
// When we concatenate HackerRank with is the best place to learn and practice coding! , we get HackerRank is the best place to learn and practice coding!.
