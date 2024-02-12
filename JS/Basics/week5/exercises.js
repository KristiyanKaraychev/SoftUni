//1
// function library(input) {

//     let book_needed = input[0];
//     let iter = 1;
//     let bookFound = false;

//     while (input[iter] !== "No More Books") {
//         if (input[iter] === book_needed) {
//             bookFound = true;
//             break;
//         }
//         iter++
//     }

//     if (bookFound == true) {
//         console.log(`You checked ${iter-1} books and found it.`);
//     } else {
//         console.log(`The book you search is not here!\nYou checked ${iter-1} books.`);
//     }
// }

// library(["Troy","Stronger","Life Style","Troy"]);

//2
// function exam(input) {

//     let grades = input[0];
//     let poor_grades = 0 ;
//     let iter = 1;
//     let last_prob = "";
//     let avg_score = 0;

//     while (input[iter] !== "Enough") {
        
//         if (iter % 2 === 0) {
//             avg_score += Number(input[iter]);
//             if (Number(input[iter]) <= 4) {
//                 poor_grades++;
//             }
//         } else {
//             last_prob = input[iter];
//         }
        
//         if (poor_grades == grades) {
//             console.log(`You need a break, ${poor_grades} poor grades.`);
//             return;
//         }

//         iter++
//     }

//     console.log(`Average score: ${(avg_score/((iter-1)/2)).toFixed(2)}\nNumber of problems: ${(iter-1)/2}\nLast problem: ${last_prob}`);
// }

// exam(["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"]);

//3
// function vacation(input) {

//     let money_needed = Number(input[0]);
//     let money_have = Number(input[1]);
//     let spend_count = 0;

//     for (let i = 2; i < input.length; i++) {
//         if (i % 2 !== 0) {
//             switch (input[i-1]) {
//                 case "save":
//                     spend_count = 0;
//                     money_have += Number(input[i]);

//                     if (money_have >= money_needed) {
//                         console.log(`You saved the money for ${(i-1)/2} days.`);
//                         return;
//                     }
//                     break;
//                 case "spend":
//                     spend_count++;

//                     if (spend_count == 5) {
//                         console.log(`You can't save the money.\n${(i-1)/2}`);
//                         return;
//                     }

//                     money_have -= Number(input[i]);

//                     if (money_have < 0) {
//                         money_have = 0;
//                     }
                    
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
// }

// vacation(["250","150","spend","50","spend","50","save","100","save","100"]);

//4
// function walking(input) {

//     let goal = 10000;
//     let steps = 0;
//     let iter = 0;

//     while (steps < goal) {

//         if (input[iter] === "Going home") {
//             steps += Number(input[iter+1]);
//             break;
//         } else {
//             steps += Number(input[iter]);
//         }

//         iter++;
//     }

//     if (steps >= goal) {
//         console.log(`Goal reached! Good job!\n${steps - goal} steps over the goal!`);
//     } else {
//         console.log(`${goal - steps} more steps to reach goal.`);
//     }

// }

// walking(["125", "250", "4000", "30", "2678", "4682"]);

//5
// function coins(input) {

//     let change = Number(input[0]);
//     let numCoins = 0;
//     let iter = 0;

//     while (change > 0) {
//         change = change.toFixed(2);
//         switch (true) {
//             case change >= 2:
//                 numCoins += Math.floor(change / 2);
//                 change -= 2 * Math.floor(change / 2);
//                 break;
//             case change >= 1 && change < 2:
//                 numCoins += 1;
//                 change -= 1;
//                 break;
//             case change >= 0.50 && change < 1:
//                 numCoins += 1;
//                 change -= 0.50;
//                 break;
//             case change >= 0.20 && change < 0.50:
//                 numCoins += Math.floor(change / 0.20);
//                 change -= 0.20 * Math.floor(change / 0.20);
//                 break;
//             case change >= 0.1 && change < 0.20:
//                 numCoins += Math.floor(change / 0.10);
//                 change -= 0.10 * Math.floor(change / 0.10);
//                 break;
//             case change >= 0.05 && change < 0.10:
//                 numCoins += Math.floor(change / 0.05);
//                 change -= 0.05 * Math.floor(change / 0.05);
//                 break;
//             case change >= 0.02 && change < 0.05:
//                 numCoins += Math.floor(change / 0.02);
//                 change -= 0.02 * Math.floor(change / 0.02);
//                 break;
//             case change >= 0.01 && change < 0.02:
//                 numCoins += Math.floor(change / 0.01);
//                 change -= 0.01 * Math.floor(change / 0.01);
//                 break;
//             default:
//                 break;
//         } 

//         iter++;
//     }

//     console.log(numCoins);

// }

// coins(["1.23"]);

//6
// function cake(input) {

//     let length = Number(input[0]);
//     let width = Number(input[1]);
//     let area = length * width;
//     let numCoins = 0;
//     let iter = 2;

//     while (area > 0) {
        
//         if (input[iter] === "STOP") {
//             break;
//         } else {
//             area -= Number(input[iter]);
//         }

//         iter++;
//     }

//     if (area > 0) {
//         console.log(`${area} pieces are left.`);
//     } else {
//         console.log(`No more cake left! You need ${Math.abs(area)} pieces more.`);
//     }
    

// }

// cake(["10","2","2","4","6","STOP"]);

//7
// function moving(input) {

//     let width = Number(input[0]);
//     let length = Number(input[1]);
//     let height = Number(input[2]);

//     let area = length * width * height;
//     let iter = 3;

//     while (area > 0) {
        
//         if (input[iter] === "Done") {
//             break;
//         } else {
//             area -= Number(input[iter]);
//         }

//         iter++;
//     }

//     if (area > 0) {
//         console.log(`${area} Cubic meters left.`);
//     } else {
//         console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`);
//     }
    

// }

// moving(["10","1","2","4","6","Done"]);