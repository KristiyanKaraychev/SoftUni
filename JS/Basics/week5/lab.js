//1
// function readText(input) {

//     let iter = 0;

//     while (true) {

//         if (input[iter] === "Stop") {
//             break;
//         }

//         console.log(input[iter]);

//         iter++;

//     }
// }

// readText(["Sofia", "Berlin", "Moscow", "Athens", "Madrid", "London", "Paris", "Stop", "AfterStop"]);

//2
// function password(input) {

//     let name = input[0];
//     let pass = input[1];

//     let iter = 2;

//     while (iter < input.length) {

//         if (input[iter] === pass) {
//             console.log("Welcome " + name + "!");
//         }

//         iter++;
//     }
// }

// password(["Gosho", "secret", "secret"]);

//3
// function sumOfNums(input) {

//     let initialNum = input[0];
//     let sum = 0;
//     let iter = 1;

//     while (sum < initialNum) {

//         sum += Number(input[iter]);
//         iter++;
//     }

//     console.log(sum);
// }

// sumOfNums(["20", "1", "2", "3", "4", "5", "6"]);

//4
// function twoKplusOne(input) {

//     let iter = 1;

//     while (iter <= Number(input[0])) {

//         console.log(iter);
//         iter = iter * 2 + 1;
//     }
// }

// twoKplusOne(["31"]);

//5
// function balance(input) {

//     let total = 0;
//     let iter = 0;

//     while (iter < input.length) {
        
//         if (Number(input[iter]) >= 0) {
//             console.log("Increase: " + Number(input[iter]).toFixed(2));
//             total += Number(input[iter]);
//         } else if (input[iter] === "NoMoreMoney") {
//             break;
//         } else {
//             console.log("Invalid operation!");
//             break;
//         }
//         iter++;
//     }

//     console.log("Total: " + total.toFixed(2));
// }

// balance(["120", "45.55", "-150"]);

//6
// function maxNum(input) {

//     let biggest = Number(input[0]);
//     let iter = 1;

//     while (iter < input.length) {
        
//         if (input[iter] === "Stop") {
//             break;
//         }

//         let temp = Number(input[iter]);

//         if (temp > biggest) {
//             biggest = temp;
//         }

//         iter++;
//     }

//     console.log(biggest);
// }

// maxNum(["100","99","80","70","Stop"]);

//7
// function minNum(input) {

//     let smallest = Number(input[0]);
//     let iter = 1;

//     while (iter < input.length) {
        
//         if (input[iter] === "Stop") {
//             break;
//         }

//         let temp = Number(input[iter]);

//         if (temp < smallest) {
//             smallest = temp;
//         }

//         iter++;
//     }

//     console.log(smallest);
// }

// minNum(["-1", "-2", "Stop"]);

//8
function graduation(input) {

    let name = input[0];
    let average = 0;
    let fail_counter = 0;
    let year = 1;
    let iter = 1;

    while (iter < input.length) {
        
        if (Number(input[iter]) >= 4) {
            average += Number(input[iter]);
            year++;
        } else {
            fail_counter++;
        }

        if (fail_counter >= 2) {
            console.log(name + " has been excluded at " + year + " grade");
            break;
        }

        iter++;
    }

    if (fail_counter < 2) {
        average = average/12;
        console.log(name + " graduated. Average grade: " + average.toFixed(2));
    }
}

graduation(["Gosho", "5", "2", "5.5", "6", "3", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);


