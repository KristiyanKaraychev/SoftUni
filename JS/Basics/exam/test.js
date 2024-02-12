//1
// function PCStore(input) {

//     let CPU_price = Number(input[0]);
//     let GPU_price = Number(input[1]);
//     let RAM_price = Number(input[2]);
//     let RAM_count = Number(input[3]);
//     let discout = Number(input[4]);
//     let dollars_to_bgn = 1.57;

//     let cost = dollars_to_bgn * ((CPU_price + GPU_price) * (1 - discout) + (RAM_price * RAM_count));

//     console.log(`Money needed - ${cost.toFixed(2)} leva.`);
// }

// PCStore(["1200",
// "850",
// "120",
// "4",
// "0.1"]);

//2
// function maidenParty(input) {

//     let total_cost = Number(input[0]);
//     let num_letters = Number(input[1]);
//     let num_roses = Number(input[2]);
//     let num_keychains = Number(input[3]);
//     let num_paintings = Number(input[4]);
//     let num_fortunes = Number(input[5]);

//     let sum = num_letters * 0.60 + num_roses * 7.20 + num_keychains * 3.60 + num_paintings * 18.20 + num_fortunes * 22;
    
//     // 35% discount
//     if (num_letters + num_roses + num_keychains + num_paintings + num_fortunes >= 25) {
//         sum = sum * 0.65;
//     }

//     //  10% expenses
//     sum = sum * 0.90;

//     if (sum >= total_cost) {
//         console.log(`Yes! ${(sum - total_cost).toFixed(2)} lv left.`);
//     } else {
//         console.log(`Not enough money! ${(total_cost - sum).toFixed(2)} lv needed.`);
//     }

// }

// maidenParty(["320",
// "8",
// "2",
// "5",
// "5",
// "1"]);

//3
// function calculator(input) {

//     let num_people = Number(input[0]);
//     let season = input[1];
//     let cost_per_person = 0;
//     let season_discount = 1;
//     let total_cost = 0;

//     switch (season) {
//         case "spring":
//             if (num_people <= 5) {
//                 cost_per_person = 50.00;
//             } else {
//                 cost_per_person = 48.00;
//             }
//             break;
//         case "summer":
//             if (num_people <= 5) {
//                 cost_per_person = 48.50;
//             } else {
//                 cost_per_person = 45.00;
//             }
//             season_discount = 0.85;
//             break;
//         case "autumn":
//             if (num_people <= 5) {
//                 cost_per_person = 60.00;
//             } else {
//                 cost_per_person = 49.50;
//             }
//             break;
//         case "winter":
//             if (num_people <= 5) {
//                 cost_per_person = 86.00;
//             } else {
//                 cost_per_person = 85.00;
//             }
//             season_discount = 1.08;
//             break;
//         default:
//             break;
//     }

//     total_cost = num_people * cost_per_person * season_discount;

//     console.log(`${total_cost.toFixed(2)} leva.`)
// }

// calculator(["20",
// "winter"]);

//4
// function workout(input) {

//     let num_days = Number(input[0]);
//     let distance_initial = Number(input[1]);
//     let distance_daily = distance_initial;
//     let distance_total = distance_initial;
//     let goal = 1000;

//     for (let i = 2; i <= num_days + 1; i++) {

//         let increase = 1 + Number(input[i]) / 100;
//         distance_daily = distance_daily * increase;

//         distance_total += distance_daily;
//     }

//     if (distance_total >= goal) {
//         console.log(`You've done a great job running ${Math.ceil(distance_total - goal)} more kilometers!`);
//     } else {
//         console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(goal - distance_total)} more kilometers`);
//     }
// }

// workout(["4",
// "100",
// "30",
// "50",
// "60",
// "80"]);

//5
// function bestPlayer(input) {

//     let name = "";
//     let goals = 0;

//     let didHatTrick = false;
//     let biggest = 0;
//     iter = 0;

//     while (input[iter] !== "END") {

//         if (iter % 2 !== 0) {
//             goals = Number(input[iter]);
//             if (goals > biggest) {
//                 biggest = goals;
//                 name = input[iter - 1];

//                 if (goals >= 3) {
//                     didHatTrick = true;
                    
//                     if (goals >= 10) {
//                         break;
//                     }
//                 }
//             }
//         }
//         iter ++;
//     }
    
//     if (didHatTrick) {
//         console.log(`${name} is the best player!\nHe has scored ${biggest} goals and made a hat-trick !!!`);
//     } else {
//         console.log(`${name} is the best player!\nHe has scored ${biggest} goals.`);
//     }

// }

// bestPlayer(["Rooney",
// "1",
// "Junior",
// "4",
// "Paolinio",
// "2",
// "Paolinio","3","END"]);

//6
function uniquePIN(input) {

    let digit1_upper_limit = Number(input[0]);
    let digit2_upper_limit = Number(input[1]);
    let digit3_upper_limit = Number(input[2]);

    if (digit2_upper_limit > 7) {
        digit2_upper_limit = 7;
    }

    for (let i = 1; i <= digit1_upper_limit; i++) {

        if (i % 2 === 0) {

            for (let j = 2; j <= digit2_upper_limit; j++) {

                let isPrime = true;

                for (let m = 2; m < j; m++){
                    if (j % m === 0) {
                        isPrime = false;
                        break;
                    }
                }

                if (isPrime) {
                    for (let k = 1; k <= digit3_upper_limit; k++) {
                        if (k % 2 === 0) {
                            console.log(`${i} ${j} ${k}`);
                        }
                    }
                }
            }
        }
    }
}

uniquePIN(["8",
"9",
"8"]);
