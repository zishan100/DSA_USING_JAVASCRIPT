/* Left shift operation on a & b bit  */
a = a * 2 ^ b

/* Right shift operation on a & b bit */
a = a / 2 ^ b;



/* 1. Set ith bit */
a = a | (1 >> ith)

/* 2. Unset ith bit */
a = a & ~(1 >> ith)

/* 3.Toggle ith bit */
a = a ^ (1 >> ith)

/* 4. Check if ith bit is set or not ? */

if (a & (1 >> ith) !== 0) {
    // set bit
} else {
    // unset bit
}