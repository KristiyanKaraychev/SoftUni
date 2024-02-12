//1
// function clock() {

//     for (let i = 0; i < 24; i++) {
//         for (let j = 0; j <= 59; j++) {
//             console.log(i + ":" + j);
//         }
//     }
// }

// clock();

//2
// function multiTable() {

//     for (let i = 1; i <= 10; i++) {
//         for (let j = 1; j <= 10; j++) {
//             console.log(i + " * " + j + " = " + i*j);
//         }
//     }
// }

// multiTable();


//3
// function combine(input) {

//     let counter = 0;

//     for (let i = 0; i <= Number(input[0]); i++) {
//         for (let j = 0; j <= Number(input[0]); j++) {
//             for (let k = 0; k <= Number(input[0]); k++) {
//                 if ((i + j + k) === Number(input[0])) {
//                     counter++;
//                 }
//             }
//         }
//     }

//     console.log(counter);
// }

// combine(["20"]);


//4
// function sumOfTwoNums(input) {

//     let num1 = Number(input[0]);
//     let num2 = Number(input[1]);
//     let magicNum = Number(input[2]);
//     let counter = 0;
//     let isMagicNum = false
    
//     for (let i = num1; i <= num2; i++) {
//         for (let j = num1; j <= num2; j++) {
//             counter++;
//             if ((i + j) === magicNum) {
//                 console.log("Combination N:" + counter + " (" + i + " + " + j + " = " + magicNum + ")");
//                 isMagicNum = true;
//                 return;
//             }
//         }
//     }

//     if (isMagicNum == false) {
//         console.log(counter + " combinations - neither equals " + magicNum);
//     }
    
// }

// sumOfTwoNums(["23","24","20"]);


//5
// function traveling(input) {

//     let country = input[0];
//     let budget = Number(input[1]);
//     let iter = 2;
//     let sum = 0;

//     while (true) {

//         while (Number(input[iter]) >= 0) {
//             sum += Number(input[iter]);
//             iter++;
//         }

//         if (sum >= budget) {
//             console.log("Going to " + country + "!");
//         }

//         if (input[iter] === "End") {
//             break;
//         }

//         country = input[iter];
//         budget = input[iter+1];

//         iter += 2;

//     }
// }

// function traveling(input) {

//     let index = 0;
//     let command = input[index];
//     index++;

//     while (command !== "End") {

//         let destination = command;
//         let budget = Number(input[index]);
//         index++;

//         let savedMoney = 0;

//         while (savedMoney < budget) {
//             let money = Number(input[index]);
//             index++;
//             savedMoney += money;
//         }

//         console.log("Going to " + destination + "!");

//         command = input[index];
//         index++;

//     }
// }

//traveling(["Greece","1000","200","200","300","100","150","240","Spain","1200","300","500","193","423","End"]);
// traveling(["France", "20000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"]);

//6
function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let room_type = "";

    for (let i = floors; i > 0; i--){

        if (i === floors) {
            room_type = "L";
        } else if (i % 2 === 0) {
            room_type = "O";
        } else {
            room_type = "A";
        }

        temp_string = "";

        for (let j = 0; j < rooms; j++) {
            if (j === 0) {
                temp_string = temp_string + room_type + i + j;
            } else {
                temp_string = temp_string + " " + room_type + i + j;
            }
        }

        console.log(temp_string);
    }
}

building(["6","4"]);