
/* Q1. Find minimum in rotated sorted array */
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
function findMin(nums) {

    /* 1st Approach  */
    // first we need to sort the array of element
    // Once sorted done then return first index of arrays

    /* T.C: O(nlogn)  */
    /* S.C: O(1) */

    /* 2nd Approach */
    // find minumum element in distinct sorted array 
    /* T.C: O(logn) */
    /* S.C: O(1) */

    let l = 0, h = nums.length - 1;

    while (l < h) {
        let m = Math.floor((l + h) / 2);
        if (nums[m] > nums[h]) {
            l = m + 1;
        } else
            h = m;

    }

    return nums[l]

};


/* Q2. Find single element in sorted array */
// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2

function singleNonDuplicate(nums) {

    /* 1st Approach  */
    /* T.C: O(n) + O(m) ==> O(n) */
    /* S.C: O(m) */

    // first we take extra space to maintain count of element(hash_map)
    // Iterate to object & checking if object keys is equal '1' then return op   

    // let charCount = {};
    // let op = -1;
    // for(let i=0;i<nums.length;i++){

    //     charCount[nums[i]] = ( charCount[nums[i]]+1 || 1 );  
    // }

    // for(let keys in charCount){

    //     if(charCount[keys] === 1){
    //        op = keys
    //        break;     
    //     }   
    // }
    // return op;

    /* 2nd Approach */

    /* T.C: O(n) */
    /* S.C: O(1) */

    // if( nums.length ===1 || nums[0]!==nums[1]){
    //     return nums[0];
    // }

    // for(let i=1;i<nums.length;i++){
    //     if((i+1) < nums.length && (nums[i-1]!==nums[i] && nums[i]!== nums[i+1])){
    //         return nums[i];  
    //     }  
    // }  

    // return nums[nums.length-1]!==nums[nums.length-2] ? nums[nums.length-1] : -1;

    /* 3rd Approach */

    /* T.C: O(logn) */
    /* S.C: O(1) */

    if (nums.length === 1 || nums[0] !== nums[1]) {
        return nums[0];
    }

    let l = 0, h = nums.length - 1;

    while (l <= h) {
        let m = Math.floor((l + h) / 2);

        if (m % 2 === 0) {

            if (nums[m] === nums[m + 1]) {
                l = +m + 1;
            } else {
                if (nums[m - 1] !== nums[m] && nums[m] !== nums[m + 1]) {
                    return nums[m];
                } else {
                    h = +m - 1;
                }
            }
        } else {
            if (nums[m] === nums[m + 1]) {
                h = +m - 1;
            } else {
                if (nums[m] !== nums[m - 1] && nums[m] !== nums[m + 1]) {
                    return nums[m];
                } else {
                    l = +m + 1;
                }
            }
        }


    }
    return -1;
};


/* Q3. Find peak element in array */
// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.

function findPeakElement(nums) {
    /* 1st Approach */
    // 1. 1st we need to iterate each element of array
    // 2. In each iteration need to check current ele is greater than 
    //    neightbour ele If yes return that current idx 
    /* T.C: O(n) */
    /* S.C: O(1) */

    /* 2nd Approach */
    /* T.C : O(logn) */
    /* S.C : O(1)  */

    let l = 0, h = nums.length - 1;

    if (nums.length === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[h - 1] < nums[h]) return h;

    l = 1, h = nums.length - 2;

    while (l <= h) {
        let m = Math.floor((l + h) / 2);

        if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
            return m;
        }

        if (nums[m - 1] < nums[m]) {
            l = m + 1;
        } else {
            h = m - 1;
        }
    }
    return -1;
};