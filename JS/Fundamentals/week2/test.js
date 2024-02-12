// function functionOne() {
//     let number = 10;
// }

// function functionTwo() {
//     console.log(number);
// }

// functionOne();
// functionTwo();

// let num1 = "1";
// let num2 = "2";

// console.log(num1, num2);

// arr1 = [1,2,3];
// arr2 = [4,5];

// arr1 = arr1 + arr2;
// console.log(arr1);

// console.log(arr1.length);

// arr1 = [1,2,3];
// arr2 = arr1;
// // arr2 = arr1.slice();

// arr2.push(4);

// console.log(arr1);
// console.log(arr2);

// const beasts = ['ant', '', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// // Expected output: 1

// // Start from index 2
// console.log(beasts.indexOf()));
// // Expected output: 4

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// let arr1 = [1,2,3,4,5];

// let arr2 = arr1.slice(0,3);
// let iter = arr2.length;
// let temp_arr = [];

// for (let i = 0; i < iter; i++) {
//     temp_arr.push(arr2.pop());
// }

// console.log(temp_arr);

// test123();

// function test123() {
//     console.log("test");
// }

// console.log(test123);

// var test123 = function() {
//     console.log("test");
// }

// console.log(x);

// var x;

// test123();

// function test123() {

//     console.log("b");

//     innerFunc();

//     function innerFunc() {
//         console.log("a");
//     }

//     console.log("c");
// }

let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i <= arr.length/2; i ++) {
//     console.log(i);
// }

let arr2 = arr.map(function (n) {
    return n % 2 === 0;
});

console.log(arr);
console.log(arr2);

arr2 = arr.filter((n) => n % 2 === 0);

console.log(arr2);
console.log(arr2.indexOf(4));
