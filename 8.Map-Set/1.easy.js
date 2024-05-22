/* Q1. First unique integer in array list */
// i/p : 5
//       7 6 1 6 1
// o/p: 7

function firstUniqueInteger(n, arr) {

    /* Better approach */
    // T.C: O(n)
    // S.C: O(n) 

    let hm = new Map();

    /* Maintain count of each integer */
    for (const val of arr) {
        if (!hm.has(val)) {
            hm.set(val, 1);
        } else {
            hm.set(val, hm.get(val) + 1);
        }
    }


    for (const val of arr) {

        if (hm.get(val) == 1) {
            return val;
        }

    }
    return -1;
}

/* Q2. Find all anagram pattern in string */
// i/p: bacdgabcda abcd
// o/p:3
//     0 5 6

function findAllAnagramsInAString(s, p) {

    /* Better approach to solve   */
    // T.C: O(n) because its iterate over 256 size of array
    // S.C: O(1) ( Because its can't go beyoud 256 size ) 

    if (p.length > s.length) {
        return [];
    }


    let op = [];
    let str = new Array(256);
    let pat = new Array(256);

    str.fill(0);
    pat.fill(0);

    let sLen = s.length;
    let pLen = p.length;

    for (let i = 0; i < pLen; i++) {
        str[s.charCodeAt(i)]++;
    }

    for (let i = 0; i < pLen; i++) {
        pat[p.charCodeAt(i)]++
    }

    if (compareTwoStr(str, pat)) {
        op.push(0);
    }


    for (let idx = 1; idx <= sLen - pLen; idx++) {

        str[s.charCodeAt(idx - 1)]--;

        str[s.charCodeAt(idx + pLen - 1)]++;

        if (compareTwoStr(str, pat)) {
            op.push(idx);
        }

    }


    return op;


}

const compareTwoStrHelper = function (s, p) {


    for (let i = 0; i < 256; i++) {

        if (s[i] !== p[i]) {
            return false;
        }
    }

    return true;
}


/* Q3. find length of longest palindrome */
// i/p: bbde
// o/p: 3
// The possible 3 size palindrome strings are :- beb and bdb

function longestPalindrome(n, str) {

    /* Better approach */
    /* Intuition */
    // 1. frist count freq of each character
    // 2. Add freq of even occur character & 
    //  along with add (odd-1) occur character
    // if atleast one odd character then add 1 to final result     

    // T.C: O(n)
    // S.C: O(k) where k is size of map to maintain freq of each character 

    let hm = new Map();
    let lenOfPalin = 0;
    let oddChar = false;

    for (const s of str) {

        if (!hm.has(s)) hm.set(s, 1);
        else hm.set(s, hm.get(s) + 1);
    }


    for (const [keys, val] of hm.entries()) {

        if (val % 2 != 0)
            oddChar = true;

        if (val % 2 == 0) {
            lenOfPalin += val;
        } else {
            lenOfPalin += (val - 1);
        }

    }

    return oddChar ? lenOfPalin + 1 : lenOfPalin;
}