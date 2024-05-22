
/* Q1. Count no of digits  */
// Input: N = 12345
// Output: 5
// Explanation: N has 5 digits

function countDigits(ip) {

    let countDigit = 0;

    while (ip > 0) {
        ip = Math.floor(ip / 10);
        countDigit++;
    }
    return countDigit;
}

/* Q2. Reverse number   */
// i/p : 12345
// o/p : 54321

function reverseNumber(ip) {

    let noOfDigit = countDigits(ip);
    let unitVal = Math.pow(10, noOfDigit - 1);
    let output = 0;
    while (ip > 0) {
        let rem = (ip % 10);
        ip = Math.floor(ip / 10);
        output += rem * unitVal;
        unitVal = unitVal / 10;
    }

    return output;
}

/* Q3. Is given is Palindrome or not ?  */
// Input: x = 121
// Output: true

function IsPalindromeNumber(x) {
    if (x < 0) {
        return false;
    }

    let ip = x;
    let op = 0;
    let countNo = countDigits(x);
    let unitVal = Math.pow(10, countNo - 1);

    while (ip > 0) {
        let rem = (ip % 10);
        ip = Math.floor(ip / 10);
        op += unitVal * rem;
        unitVal = unitVal / 10;
    }
    return op === x;
}

/* Q4. Is  given number is Armstrong or not ? */
// Input:153 
// Output: Yes, it is an Armstrong Number
// Explanation: 1^3 + 5^3 + 3^3 = 153

function armstrongNumber(ip) {

    if (ip < 0) {
        return false;
    }

    let tempVal = ip;
    let countDgt = countDigits(ip);
    let op = 0;
    while (tempVal > 0) {
        let rem = tempVal % 10;
        tempVal = Math.floor(tempVal / 10);
        op += Math.pow(rem, countDgt);
    }

    return op === ip;
}


