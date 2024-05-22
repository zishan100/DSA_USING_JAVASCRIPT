/* 1. Quick sort algo.  */
// Intuition of quick sort.
// 1. First choose pivot as any index of array
// 2. Do partition of array to find new pivot index
// 3. Pivot index is new partition of array ( i.e pivot is only element that in correct position ) 
// 4. Repeat this partition process through recursive call

function quickSort(ipArr, lt, rt) {

    if (lt < rt) {
        let mid = partition(ipArr, lt, rt);

        // Mid idx is partition of array list
        quickSort(ipArr, lt, mid - 1);
        quickSort(ipArr, mid + 1, rt)
    }

}

/* Helper function for quickSort */

const partition = (arr, lt, rt) => {

    let pivot = arr[rt];
    let i = lt - 1;

    let temp;
    for (let j = lt; j <= rt - 1; j++) {

        if (arr[j] < pivot) {
            i++;
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    temp = arr[i + 1];
    arr[i + 1] = arr[rt];
    arr[rt] = temp;

    return i + 1;
}



/* 2. Comparator function is only need to sort when we have non-primitive data like ( array & object ) */

const arrayOfObj = [
    { type: "Audi", year: 2019 },
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

arrayOfObj.sort(function (a, b) {

    // Here is comparator logic to sort array object on basis of year
    // let x = a.year;
    // let y = b.year;

    // if (x < y) { return -1; }
    // if (x > y) { return 1; }
    // return 0;

    // Here is comparator logic to sort array object on basis of type field
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});