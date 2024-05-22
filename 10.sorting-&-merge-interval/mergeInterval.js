/* 1. Merge Interval algorithms */
// Intuition 
// first we need to sort array on basis of start time interval
// Run single loop 
// check start time of 2nd Intervals is less or equal to end time of first intervals 
// If is intervals conflict then merge that intervals
// otherwise push that into output array 


function mergeIntervals(n, intervals) {


    /* 2. Better approach */
    // T.C: O(nlogn)
    // S.C: O(1)

    intervals.sort((a, b) => (a[0] - b[0]));
    let opArr = [];


    for (let i = 0; i < n; i++) {

        if (i == 0) {
            opArr.push(intervals[i]);
            continue;
        }

        let prevArr = opArr.pop();

        /* If there is overlapping b/w two intervals then merge        otherwise  
           insert intervals     
        */
        if (intervals[i][0] <= prevArr[1]) {
            let minStart = Math.min(intervals[i][0], prevArr[0]);
            let maxEnd = Math.max(intervals[i][1], prevArr[1]);
            opArr.push([minStart, maxEnd]);
        } else {
            opArr.push(prevArr);
            opArr.push(intervals[i]);
        }

    }

    return opArr;
}

