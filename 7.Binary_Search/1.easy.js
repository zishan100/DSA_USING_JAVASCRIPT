
/* Q1. Floor & ceil in sorted array */
// Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
// Result: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

function findFloorAndCeil(ip, x) {
    /* 1st Approach */
    /* T.C : O(nlogn) */
    /* S.C : O(1) */

    let ceilVal = findCeil(ip, x);
    let floorVal = findFloor(ip, x);
    return `ceilVal : ${ceilVal} & floorVal : ${floorVal} `
}

function findCeil(ip, x) {

    let l = 0, h = ip.length - 1;
    let ceil = -1;
    while (l <= h) {

        let m = Math.ceil((l + h) / 2);

        if (ip[m] <= x) {
            l = m + 1;
            ceil = ip[m];
        } else {
            h = m - 1;
        }
    }
    return ceil;
}

function findFloor(ip, x) {
    let l = 0, h = ip.length - 1;
    let floor = -1;
    while (l <= h) {

        let m = Math.ceil((l + h) / 2);

        if (x <= ip[m]) {
            h = m - 1;
            floor = ip[m];
        } else {
            l = m + 1;
        }
    }
    return floor;
}


/* Q2. find first & last occurrence of sorted array  */
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

function searchRange(ip, x) {
    /* 1st Approach */
    /* T.C : O(nlogn) */
    /* S.C : O(1) */

    let lstOccur = lastOccurrance(ip, x);
    let firstOccur = firstOccurrance(ip, x);
    return [firstOccur, lstOccur];
}

function firstOccurrance(ip, tar) {

    let l = 0, h = ip.length - 1;
    let idx = -1;
    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (ip[m] === tar) {
            idx = m;
            h = m - 1;
        }
        else if (ip[m] < tar) l = m + 1;
        else
            h = m - 1;

    }

    return idx;
}

function lastOccurrance(ip, tar) {

    let l = 0, h = ip.length - 1;
    let idx = -1;
    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (ip[m] === tar) {
            idx = m;
            l = m + 1;
        }
        else if (ip[m] < tar) l = m + 1;
        else
            h = m - 1;

    }

    return idx;
}

/* Q3. Count Occurrences in Sorted Array */
// Input: N = 7,  X = 3 , array[] = [2, 2 , 3 , 3 , 3 , 3 , 4]
// Output: 4
// Explanation: 3 is occurring 4 times in the given array so it is our answer.

function countOccurrance(ip, tar) {

    /* 1st Approach */
    // 1. In previous question we had find first & last occurrance of repeated element
    // 2. Get index of 1st & last repeated element of arr 
    // 3. Do difference of last & 1st index ( Please follow previous solutions )

    /* T.C : O(nlogn) */
    /* S.C:  O(1) */

    /* 2nd Approach */
    /* T.C : O(n) */
    /* S.C : O(1) */

    let repeatCount = 0;

    for (let i = 0; i < ip.length; i++) {
        if (tar === ip[i]) {
            repeatCount++;
        }
    }

    return repeatCount;
}

/* Q4. How many time sorted array rotated  ? */
// Input Format: arr = [4,5,6,7,0,1,2,3]
// Result: 4


function findKRotation(nums) {

    /* 1st Approach */
    // find minimum element of array & maintain index variable
    // Once done with finding smallest element then return index of array 

    /* T.C : O(n) */
    /* S.C : O(1) */


    /* 2nd Approach */

    /* T.C: O(nlogn) */
    /* S.C: O(1) */

    let l = 0, h = nums.length - 1;
    let minVal = Number.MAX_SAFE_INTEGER;
    let index = -1;

    while (l < h) {
        let m = Math.floor((l + h) / 2);

        // if array is alraedy sorted then this cond execute
        if (nums[l] <= nums[h]) {

            if (nums[l] < minVal) {
                index = l;
                minval = nums[l];
            }
            break;
        }

        // if left side sorted 
        if (nums[l] <= nums[m]) {

            if (nums[l] < minVal) {
                index = l;
                minVal = nums[l];
            }
            // eliminate left side of array

            l = m + 1;
        } else {
            if (nums[m] < minVal) {
                index = m;
                minVal = nums[m];
            }
            // elininate right side of array
            h = m - 1;
        }
    }

    return index;
}

/* Q5. Find square root using binary search */
// Input Format: n = 36
// Result: 6
// Explanation: 6 is the square root of 36.

function findSqrtOfNo(ip) {

    /* 1st Approach */
    // Here we using brute force approach to find sqrt of n
    // T.C: O(n)
    // let ans = 1;

    // for (let i = 2; i <= ip; i++) {
    //     let sqVal = i * i;
    //     if (sqVal <= ip) {
    //         ans = i;
    //     } else {
    //         break;
    //     }
    // }
    // console.log("Sqrt value :", ans);

    /* 2nd Approach */
    // Here we applying binary search to find sqrt of n 
    /* T.C: O(logn) */

    let l = 1
    let h = ip;
    let ans = 1;

    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        let sqrt = m * m;
        if (sqrt === ip) {
            return m;
        } else if (sqrt < ip) {
            ans = m;
            l = m + 1;
        } else
            h = m - 1;

    }

    return ans;
}
