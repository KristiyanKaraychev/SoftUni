//1
// function endIn7() {

//     let num = 1000;

//     for (let i = 0; i <= 1000; i++) {
//         if (i % 10 === 7){
//             console.log(i);
//         }
//     }
// }

// endIn7();

//2
// function multi(input) {

//     let num = Number(input[0]);

//     for (let i = 1; i <= 10; i++) {
//         console.log(`${i} * ${num} = ${i * num}`);
//     }
// }

// multi(["5"]);

//3
// function histogram(input) {

//     let nums = Number(input[0]);
//     p1 = 0;
//     p2 = 0;
//     p3 = 0;
//     p4 = 0;
//     p5 = 0;

//     for (let i = 1; i <= nums; i++) {
//         let numX = Number(input[i]);

//         if (numX < 200) {
//             p1 += 1;
//         } else if (numX >= 200 && numX <= 399) {
//             p2 += 1;
//         } else if (numX >= 400 && numX <= 599) {
//             p3 += 1;
//         } else if (numX >= 600 && numX <= 799) {
//             p4 += 1;
//         } else if (numX >= 800) {
//             p5 += 1;
//         }
//     }

//     p1 = (p1 / nums * 100).toFixed(2);
//     p2 = (p2 / nums * 100).toFixed(2);
//     p3 = (p3 / nums * 100).toFixed(2);
//     p4 = (p4 / nums * 100).toFixed(2);
//     p5 = (p5 / nums * 100).toFixed(2);

//     console.log(`${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%`);

// }

// histogram(["3","1","2","999"]);

//4
// function clevelLily(input) {

//     let age = Number(input[0]);
//     let machine = Number(input[1]);
//     let toy = Number(input[2]);

//     let cash = 10;
//     let incr = 1;
//     let total = 0;

//     for (let i = 1; i <= age; i++) {
//         if (i % 2 === 0) {
//             cash = 10 * incr;
//             total = total + cash - 1;
//             incr++;
//         } else {
//             total += toy;
//         }
//     }

//     if (total >= machine) {
//         console.log(`Yes! ${(total - machine).toFixed(2)}`);
//     } else {
//         console.log(`No! ${(machine - total).toFixed(2)}`);
//     }
    
// }

// clevelLily(["21","1570.98","3"]);

//5
// function salary(input) {

//     let tabs = Number(input[0]);
//     let salary_total = Number(input[1]);

//     for(let i = 2; i <= input.length; i++) {
//         switch (input[i]) {
//             case "Facebook":
//                 salary_total = salary_total - 150;
//                 break;
//             case "Instagram":
//                 salary_total = salary_total - 100;
//                 break;
//             case "Reddit":
//                 salary_total = salary_total - 50;
//                 break;
//             default:
//                 break;
//         }
//     }

//     if (salary_total <= 0) {
//         console.log(`You have lost your salary.`);
//     } else {
//         console.log(salary_total);
//     }
    
// }

// salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);

//6
// function oscars(input) {

//     let name = input[0];
//     let points = Number(input[1]);
//     let graders = Number(input[2]);
//     let points_needed = 1250.5;
//     let isWinner = false;
//     let temp_name = 0;

//     for(let i = 4; i <= (3 + graders * 2); i+=2) {

//         points = points + ((input[i-1].length * input[i]) / 2);

//         if (points > points_needed) {
//             console.log(`Congratulations, ${name} got a nominee for leading role with ${(points).toFixed(1)}!`);
//             isWinner = true;
//             break;
//         }
//     }

//     if (isWinner == false) {
//         console.log(`Sorry, ${name} you need ${(points_needed - points).toFixed(1)} more!`);
//     }
// }

// oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);

//7
// function trekking(input) {

//     let groups = Number(input[0]);
//     let total = 0;
//     p1 = 0;
//     p2 = 0;
//     p3 = 0;
//     p4 = 0;
//     p5 = 0;

//     for (let i = 1; i <= groups; i++) {
//         let numX = Number(input[i]);

//         if (numX <= 5) {
//             p1 += numX;
//         } else if (numX >= 6 && numX <= 12) {
//             p2 += numX;
//         } else if (numX >= 13 && numX <= 25) {
//             p3 += numX;
//         } else if (numX >= 26 && numX <= 40) {
//             p4 += numX;
//         } else if (numX >= 41) {
//             p5 += numX;
//         }

//         total = total + numX;
//     }

//     p1 = (p1 / total * 100).toFixed(2);
//     p2 = (p2 / total * 100).toFixed(2);
//     p3 = (p3 / total * 100).toFixed(2);
//     p4 = (p4 / total * 100).toFixed(2);
//     p5 = (p5 / total * 100).toFixed(2);

//     console.log(`${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%`);
// }

// trekking(["5","25","41","31","250","6"]);

//8
// function tennis(input) {

//     let tournaments = Number(input[0]);
//     let starting_points = Number(input[1]);
//     let points_gained = 0;
//     let wins = 0;

//     for (let i = 2; i <= tournaments + 1; i++) {
        
//         switch (input[i]) {
//             case "W":
//                 points_gained += 2000;
//                 wins++;
//                 break;
//             case "F":
//                 points_gained += 1200;
//                 break;
//             case "SF":
//                 points_gained += 720;
//                 break;
//             default:
//                 break;
//         }
//     }

//     console.log(`Final points: ${Math.floor(starting_points + points_gained)}\nAverage points: ${Math.floor(points_gained / tournaments)}\n${(wins / tournaments * 100).toFixed(2)}%`);
// }

// tennis(["4","750","SF","W","SF","W"]);