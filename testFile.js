// let str = "learn by";
// let arr = str.split(' ');
// arr.push("doing");
// console.log(arr);
// str = arr.join(' ');
// console.log(str);
// let obj = { 1: "One", 2: "Two" };
// console.log(obj[1]);

// let scale = 0;
// let a = 1;
// console.log(a / scale);
// a = -1;
// console.log(a / scale);
// a = 0;
// console.log(a / scale);
// a = -0;
// scale = 1;
// console.log(a / scale);

// const getSum = (a, b) => {
//     return a + b;
// }
// console.log(getSum(2, 4));


// var myFunc = function () {
//     console.log("function executed");
// }
// myFunc();

// let arr = [2, 5, 7];
// arr.forEach(function (arr, index) {
//     console.log(arr, " ", index);
// })

// let arr = [100, 23, 201];
// console.log(arr.sort(function (a, b) {
//     return (a - b);
// }));

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map(x => x * 2).filter(x => x > 5).reduce((acc, curr) => acc + curr);

// console.log(result);

// let alpha_numeric = "123.24";

// console.log((0 / Number(alpha_numeric)));

// function mostFrequent(text) {
//     let keyVals = {};
//     let mp = new Array(256);
//     for (let i = 0; i < mp.length; i++) {
//         mp[i] = 0;
//     }

//     for (let i = 0; i < text.length; i++) {
//         if (text.charAt(i) === ' ') {
//             continue;
//         }
//         mp[text.charCodeAt(i)]++;
//     }


//     let max = Number.MIN_SAFE_INTEGER;
//     let char;
//     for (let [val, idx] of mp.entries()) {
//         if (max < idx) {
//             max = idx;
//             char = String.fromCharCode(val);
//         }
//     }
//     console.log(mp);
//     console.log(char, " ", max);
// }

// mostFrequent('A cat with rabiestreatsa slothto know more about archeology.')


// function dateDifference(date) {
//     let givenDate = date.split("/");
//     console.log(givenDate);
//     givenDate = new Date(givenDate[0] + "/" + givenDate[1] + "/" + givenDate[2]);
//     console.log(givenDate.getTime());
//     let todayDate = new Date().getTime();
//     console.log(todayDate, "  ", givenDate.getTime());
//     let diffDays = Math.floor((todayDate - givenDate.getTime()) / (1000 * 60 * 60 * 24));
//     console.log(diffDays);
// }

// dateDifference('10/08/2023');

/* Comparator logics */
// const cars = [
//     { type: "Audi", year: 2019 },
//     { type: "Volvo", year: 2016 },
//     { type: "Saab", year: 2001 },
//     { type: "BMW", year: 2010 }
// ];


// cars.sort(function (a, b) {
//     let x = a.year;
//     let y = b.year;
//     console.log(x, "  ", y, x < y, " ", x > y);
//     if (x < y) { return -1; }
//     if (x > y) { return 1; }
//     return 0;
// });


// console.log(cars);

let Heap = require("collections/heap");

console.log(Heap);