
/* Q1. wave sort  */
// input:  6 
//         1 5 1 1 6 4
// output: 1 4 1 5 1 6 

function waveSort(arr, n) {

    // 1. Brute force approach
    // T.C:
    // S.C: 

    arr.sort((a, b) => a - b);

    let i = 0, j;

    let newArr = [];
    while (i < mid && j < n) {

        newArr.push(arr[i]);
        newArr.push(arr[j]);
        i++; j++;
    }

    if (n % 2 !== 0) {
        newArr.push(arr[arr.length - 1]);
    }

    return newArr;

    // 2. Aproach 2 
    // T.C : O(n)
    // S.C: O(1)

    // for(let i=0;i<n-1;i++){

    //     let curr = arr[i];
    //     let next = arr[i+1]; 

    //     // In even position idx curr is greater than next then swap
    //     // In odd position idx curr is lesser than next then swap 
    //     if( (i%2 == 0 && curr > next  ) || ( i%2!==0  && curr<next ) ){
    //         let temp = arr[i];
    //         arr[i] = arr[i+1];
    //         arr[i+1] = temp;
    //     } 
    // }

    // return arr;

}


/* Q2. Find next greatest element of Integer */
// Input: n = "534976"
// Output: "536479"

function nextGreaterElementWithSameSetOfDigits(n) {

    // 1. Brute force approach
    //  T.C: O(n) + O(nlogn) ==> O(n) 
    //  S.C: O(n)

    // let digitStr = n.toString();
    // let numbers = [];
    // for(let i=0;i<digitStr.length;i++){
    //     numbers[i] = Number(digitStr[i]);  
    // }

    // if( digitStr.length == 1  ) return -1;

    // let set = new Set(numbers);

    // if( set.size == 1){
    //     return -1;
    // }

    // // Traversing from rightmost element
    // let i=0;
    // for(i=numbers.length-1;i>=1;i--){
    //     if( numbers[i-1] < numbers[i]){
    //         break; 
    //     }  
    // }

    // if( (i==1 && numbers[i-1] >= numbers[i] ) || 
    //     (i==0 && numbers[i]>=numbers[i+1]) ){
    //     return -1;
    // }

    // let x = numbers[i-1];
    // let smallIdx = i;

    // // Finding Smaller value indexs b/w i to n 
    // for(let j=i+1;j<numbers.length;j++){

    //      if( numbers[j] > x  && numbers[j] < numbers[smallIdx]  ){
    //          smallIdx = j;
    //      }   
    // }

    // // Swap value of ith idx & jth idx

    // let temp = numbers[i-1];
    // numbers[i-1] = numbers[smallIdx];
    // numbers[smallIdx] = temp;

    // // sorting
    // let newNumbers = numbers.splice(i,numbers.length+1);
    // newNumbers.sort();

    // let newDigitStr='';
    // for(let j=0;j<i;j++){
    //    newDigitStr+=numbers[j]; 
    // }
    // for(let j=0;j<newNumbers.length;j++){
    //    newDigitStr+=newNumbers[j];   
    // }

    // return Number(newDigitStr)

    // 2. Better approach to optimize
    // T.C: O(n) 
    // S.C: O(1)

    let digitStr = n.toString();
    let numbers = [];
    for (let i = 0; i < digitStr.length; i++) {
        numbers[i] = Number(digitStr[i]);
    }

    let lenNums = numbers.length;

    /* Checking len of digit is 1 ( 1,2,5)  */
    if (lenNums == 1) return -1;

    /* Checking digit is identical (111 , 9999 ,888) then also return -1 */
    let sets = new Set(numbers);

    if (sets.size == 1) return -1;

    /* Start Traversing from rightmost element to get smallest vals */

    let i = 0;
    for (i = lenNums - 1; i > 0; i--) {

        if (numbers[i] > numbers[i - 1]) break;
    }


    /* Checking if digit in decending order ( 321 , 4321 , 6543) */


    if (i == 0 && numbers[i] >= numbers[i + 1]) return -1;

    /* Again start traverse from rightmost element to find first greater 
       element in comparision with smallest vals then swap it  
    */

    for (let j = lenNums - 1; j >= i; j--) {

        if (numbers[i - 1] < numbers[j]) {

            let temp = numbers[i - 1];
            numbers[i - 1] = numbers[j];
            numbers[j] = temp;

            break;
        }

    }

    numbers = numbers.slice(0, i).concat(numbers.slice(i, lenNums).reverse())

    // console.log(numbers.join(''));
    return Number(numbers.join(''))
}

/* Q3. Count sort (In string) */
// Input : abcdeedcba
// Output:aabbccddee

function countSort(n, str) {

    /* 1. Approach one */
    // T.C: O(n)  
    // S.C: O(n) taken k size extra space for unique character

    let freqArr = new Array(26);

    freqArr.fill(0);

    let charCode = 0;

    /* Maintain freq of character count */
    for (let i = 0; i < n; i++) {
        charCode = str.charCodeAt(i) - 'a'.charCodeAt(0);
        freqArr[charCode]++;
    }

    let opArr = '';

    for (let i = 0; i < freqArr.length; i++) {

        while (freqArr[i] > 0) {
            charCode = String.fromCharCode(i + 97);
            opArr += charCode;
            freqArr[i]--;
        }
    }
    return opArr;
}

