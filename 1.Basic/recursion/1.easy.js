
/* Q1. Sum of first N number  */
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

function sumOfN(arr, idx) {

    if (idx === arr.length) {
        return 0;
    }

    return sumOfN(arr, idx + 1) + arr[idx];
}

/* Q2. Calculate N factorial */
// i/p: n=5
// o/p: 120
// Explanation : 5! = > (1*2*3*4*5)

function factorialN(num) {

    if (num === 0 || num === 1) {
        return 1;
    }
    return factorialN(num - 1) * num;
}

/* Q3. Revere array list  */
// i/p: [1,2,3,4,5]
// o/p: [5,4,3,2,1]

function reverseArrs(arr, opArr, idx) {

    /* 1. Return reverse  arrays in recursion */

    // if (arr.length === idx) {
    //     return [];
    // }

    // let sa = reverseArrs(arr, idx + 1);
    // sa.push(arr[idx]);
    // return sa;

    /*  Print reverse in recursion  */

    // if (arr.length === idx) {
    //     console.log(" Result : ", opArr);
    //     return;
    // }
    // let op = [arr[idx], ...opArr];
    // reverseArrs(arr, op, idx + 1);

}

/* Q4. Check if the given String is Palindrome or not */
// ip: madam | racecar
// op: true  | true

function checkIsPalindrome(ip, l, h) {
    if (l >= h) {
        return true;
    }

    if (ip.charAt(l) !== ip.charAt(h)) {
        return false;
    }
    return checkIsPalindrome(ip, l + 1, h - 1);
}

/* Q5. find Fibonacci of nth series */

function Nthfibonacci(ip) {

    // if (ip === 1 || ip === 0) {
    //     return ip;
    // }

    // return Nthfibonacci(ip - 1) + Nthfibonacci(ip - 2);

    /* Iterative approach */

    // let a = 0;
    // let b = 1;
    // let nthTerm = 0;
    // for (let i = 2; i <= ip; i++) {
    //     nthTerm = a + b;
    //     a = b;
    //     b = nthTerm;
    // }
    // return nthTerm;
}

/* Q6. Print all possible subsequence */
// i/p:"abc"
// o/p: a ab abc ac b bc c

function printSubsequence(ip, idx, op) {

    if (ip.length <= idx) {
        console.log(op);
        return;
    }
    op = op + ip.charAt(idx);
    printSubsequence(ip, idx + 1, op);
    op = op.substr(0, op.length - 1);
    printSubsequence(ip, idx + 1, op);

}

/* Q7. Return Subsequence  */
// i/p:"abc"
// o/p: a ab abc ac b bc c

function returnSubsequence(ip) {

    if (ip.length === 0) {
        return [""];
    }

    let sa = returnSubsequence(ip.substr(1, ip.length));

    let op1 = new Array(sa.length * 2);
    let k = 0;
    for (let i = 0; i < sa.length; i++) {
        op1[i] = sa[i];
        k++;
    }

    for (let i = 0; i < sa.length; i++) {
        op1[k] = ip.charAt(0) + sa[i];
        k++;
    }
    return op1;
}

/* Q8. Print All possible subsequence of arrays list */
// i/p: [2,3,4] 
// o/p: 2,3,4,(2,3),(3,4),(2,4),(2,3,4) 

function printAllPossSubsequence(ip, idx, op) {

    if (idx === ip.length) {
        console.log(op);
        return;
    }

    op.push(ip[idx]);
    printAllPossSubsequence(ip, idx + 1, op);
    op.pop(ip[idx]);
    printAllPossSubsequence(ip, idx + 1, op);
}

/* Q9. print All possible subsequence which equal to 'k'  */
// ip: [1,2,1]
// op: 

function printAllSubEqualToK(ip, idx, k, opArr, sum) {

    /* Print All possible subsequence */

    // if (idx === ip.length) {
    //     // console.log(k, "  ", sum);
    //     if (k === sum) {
    //         console.log(opArr);
    //         return;
    //     }
    //     return;
    // }
    // opArr.push(ip[idx]);
    // sum = sum + ip[idx];
    // printAllSubEqualToK(ip, idx + 1, k, opArr, sum);
    // sum = sum - opArr.pop();;
    // printAllSubEqualToK(ip, idx + 1, k, opArr, sum);

    /* Print only one subsequence  */

    if (idx === ip.length) {
        if (k === sum) {
            console.log(opArr);
            return true;
        }
        return false;
    }
    opArr.push(ip[idx]);
    sum = sum + ip[idx];

    if ((printAllSubEqualToK(ip, idx + 1, k, opArr, sum))) return true;

    sum = sum - opArr.pop();;


    if (printAllSubEqualToK(ip, idx + 1, k, opArr, sum)) return true;

    return false;
}

/* Q10. find no of count of all possible subsequence */

function countAllPossSubsequence(ip, idx, k, opArr, sum) {

    if (idx === ip.length) {
        // console.log(k, "  ", sum);
        if (k === sum) {
            console.log(opArr);
            return 1;
        }
        return 0;
    }
    opArr.push(ip[idx]);
    sum = sum + ip[idx];

    let l = countAllPossSubsequence(ip, idx + 1, k, opArr, sum);

    sum = sum - opArr.pop();;
    let r = countAllPossSubsequence(ip, idx + 1, k, opArr, sum);
    return l + r;
}

/* Q11. Merge sort  */
// ip: [3,2,4,5,1,2,9]
// op: [1,2,2,3,4,5,9]

function mergeSort(arr, l, h) {
    if (l >= h) return;

    let m = Math.floor((l + h) / 2);

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, h);
    mergeArrays(arr, l, m, h);
}

/* Helper function for merge sort (Utility func) */
function mergeArrays(arr, l, m, h) {

    let n1 = (m - l) + 1;
    let n2 = (h - m);


    let lt = new Array(n1);
    let rt = new Array(n2);

    for (let i = 0; i < n1; i++) {
        lt[i] = arr[l + i];
    }

    for (let i = 0; i < n2; i++) {
        rt[i] = arr[m + 1 + i];
    }

    let i = 0, j = 0;
    let k = l;
    while (i < n1 && j < n2) {

        if (lt[i] < rt[j]) {
            arr[k] = lt[i];
            k++; i++;
        } else {
            arr[k] = rt[j];
            k++; j++;
        }
    }

    while (i < n1) {
        arr[k] = lt[i];
        i++; k++;
    }

    while (j < n2) {
        arr[k] = rt[j];
        j++; k++;
    }
    return;
}

/* Q12. Find all possible subset sum of array  */
// Input: [5,2,1]
// Output: 0,1,2,3,5,6,7,8

function allSubsetSum(ip, idx, sum, op) {

    if (idx === ip.length) {
        console.log(sum);
        op.push(sum);
        return;
    }

    sum += ip[idx];
    allSubsetSum(ip, idx + 1, sum, op);

    sum -= ip[idx];
    allSubsetSum(ip, idx + 1, sum, op);
}

/* Q13. find all possible subset of array */
// Input: [1,2,2]
// Output: [ [ ],[1],[1,2],[1,2,2],[2],[2,2] ]

function allSubsetOfArray(ip, idx, op, temp) {
    /* 1. Brute force approach solution */

    // if (idx === ip.length) {
    //     console.log(temp);
    //     op.push([...temp]);
    //     return;
    // }

    // temp.push(ip[idx]);
    // allSubsetOfArray(ip, idx + 1, op, temp);

    // temp.pop();
    // allSubsetOfArray(ip, idx + 1, op, temp);

    /* 2. Optimize based solution */

    // op.push([...temp]);

    // for (let i = idx; i < ip.length; i++) {

    //     if (idx !== i && ip[i] === ip[i - 1]) continue;

    //     temp.push(ip[i]);
    //     allSubsetOfArray(ip, i + 1, op, temp);
    //     temp.pop()
    // }

}

/* Q14. find all possible permutation */

function printPermutation(ip, temp, op, freq) {

    if (ip.length === temp.length) {
        op.push([...temp]);
        console.log(temp);
        return;
    }

    for (let i = 0; i < ip.length; i++) {
        console.log("perOrder +i", i);
        if (!freq[i]) {
            temp.push(ip[i]);
            freq[i] = true;
            printPermutation(ip, temp, op, freq)
            temp.pop();
            freq[i] = false;
            console.log("PostOrder +i", i);
        }
    }

}

let ip = [1, 2, 3];
let op = new Array();
let freq = [false, false, false];
console.log("All possible sum of subsets :", printPermutation(ip, [], op, freq));
console.log(op);