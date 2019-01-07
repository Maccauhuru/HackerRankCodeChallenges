// Task
// Given an integer, , perform the following conditional actions:

// If is odd, print Weird
// If is even and in the inclusive range of to, print Not Weird
// If is even and in the inclusive range of to, print Weird
// If is even and greater than, print Not Weird
// Complete the stub code provided in your editor to print whether or not is weird.


const main = () => {
    const N = parseInt(readLine(), 10);
    console.log((N % 2 != 0 || N % 2 == 0 && N >= 5 && N <= 20) ? 'Weird' : 'Not Weird')
}