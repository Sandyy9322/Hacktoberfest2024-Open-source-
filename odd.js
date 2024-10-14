function isOdd(num) {
    return num % 2 !== 0;
}

// Test the function
const input = parseInt(prompt("Enter a number: "), 10);
if (isOdd(input)) {
    console.log(`${input} is an odd number.`);
} else {
    console.log(`${input} is not an odd number.`);
}
