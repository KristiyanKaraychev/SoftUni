//1
// function numsPrint() {

//     for (let i = 1; i <= 100; i++) {

//         console.log(i);
//     }

// }

// numsPrint();

//2
// function nToOne(input) {

//     let startNum = Number(input[0]);

//     for (let i = startNum; i > 0; i--) {
//         console.log(i);
//     }

// }

// nToOne(["5"]);

//3
// function everyThirdNum(input) {

//     let lastNum = Number(input[0]);

//     for (let i = 1; i <= lastNum; i+=3) {
//         console.log(i);
//     }

// }

// everyThirdNum(["15"]);

//4
// function powerOfTwo(input) {

//     let pow = Number(input[0]);

//     for (let i = 0; i <= pow; i+=2) {
//         console.log(Math.pow(2,i));
//     }

// }

// powerOfTwo(["7"]);

//5
// function readString(input) {

//     let string = input[0];

//     for (let i = 0; i < string.length; i++) {
//         console.log(string[i]);
//     }

// }

// readString(["ice cream"]);

//6
// function sumVowel(input) {

//     let string = input[0];
//     let vowels = [["a",1],["e",2],["i",3],["o",4],["u",5]];
//     let sum = 0;

//     for (let i = 0; i < string.length; i++) {
        
//         for (let j = 0; j < vowels.length; j++) {
//             if (vowels[j][0] === string[i]) {
//                 sum = sum + Number(vowels[j][1]);
//             }
//         }
//     }

//     console.log(sum);
// }

// sumVowel(["bamboo"]);

//7
// function sumNum(input) {

//     let num = input[0];
//     let sum = 0;

//     for (let i = 0; i < num.length; i++) {
        
//         if (Number(num[i]) >= 0 && Number(num[i]) <= 9) {
//             sum += Number(num[i]);
//         }
//     }

//     console.log("The sum of the digits is:" + sum);
// }

// sumNum(["564891"]);

//8
// function numsDivByNine(input) {

//     let firstNum = Number(input[0]);
//     let lastNum = Number(input[1]);
//     let sum = 0;
//     let num_recode = [];

//     for (let i = firstNum; i <= lastNum; i++) {

//         if (i % 9 === 0) {
//             num_recode.push(i);
//             sum += i;
//         }
//     }

//     console.log("The sum: " + sum);

//     for (let i = 0; i < num_recode.length; i++) {
//         console.log(num_recode[i]);
//     }

// }

// numsDivByNine(["100", "200"]);