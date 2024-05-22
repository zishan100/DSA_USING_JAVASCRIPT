/* Q1. Count distinct element in window */
// i/p: 6 3
//      1 2 1 3 4 3
// o/p: 2 3 3 2


function countDistinctElements(n, b, arr) {

    /* Brute force approach */
    // T.C:
    // S.C:



    /* Better approach to optimize */
    // T.C: O(n) 
    // S.C: O(n) take n extra space to count of distinct element in window

    let hm = new Map();

    let i = 0, j = 0;
    let distArr = [];
    while (j < n) {

        if (!hm.has(arr[j]))
            hm.set(arr[j], 1);
        else {
            hm.set(arr[j], hm.get(arr[j]) + 1);
        }

        if ((j - i + 1) < b) {
            j++;
        } else if (j - i + 1 === b) {

            distArr.push(hm.size);

            if (hm.get(arr[i]) == 1) {
                hm.delete(arr[i]);
            } else {
                hm.set(arr[i], hm.get(arr[i]) - 1);
            }
            i++; j++;
        }
    }

    return distArr;
}

