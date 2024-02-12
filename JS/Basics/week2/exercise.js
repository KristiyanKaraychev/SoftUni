//1
// function sumSeconds(input) {
    
//     let runner1 = Number(input[0]);
//     let runner2 = Number(input[1]);
//     let runner3 = Number(input[2]);

//     let sum = runner1 + runner2 + runner3;

//     let mins = 0;
//     let secs = 0;

//     mins = Math.floor(sum / 60);
//     secs = sum % 60;

//     if (secs < 10) {
//         console.log(mins + ":0" + secs);
//     } else {
//         console.log(mins + ":" + secs);
//     }
    
// }

// sumSeconds(["14", "12", "10"]);

//2
// function bonusScore(input) {
    
//     let num = Number(input[0]);
//     let bonus = 0;

//     if (num <= 100) {
//         bonus = 5;
//     } else if (num > 100 && num <= 1000) {
//         bonus = num * 0.2;
//     } else {
//         bonus = num * 0.1;
//     }

//     if (num % 2 === 0) {
//         bonus = bonus + 1;
//     }

//     let numString = input[0];

//     if (numString[numString.length-1] === "5") {
//         bonus = bonus + 2;
//     }
    
//     console.log(bonus + "\n" + (num + bonus));
// }

// bonusScore(["175"]);

//3
// function timePlusFifteen(input) {
    
//     let hour = Number(input[0]);
//     let mins = Number(input[1]);

//     let hour_final = 0;
//     let mins_final = mins + 15;

//     if (mins_final >= 60) {
//         hour_final = hour + 1;
//         mins_final = mins_final - 60;
//     } else {
//         hour_final = hour;
//     }

//     if (hour_final > 23) {
//         hour_final = 0;
//     }

//     if (mins_final < 10) {
//         console.log(hour_final + ":0" + mins_final);
//     } else {
//         console.log(hour_final + ":" + mins_final);
//     }
// }

// timePlusFifteen(["12", "49"]);

//4
// function toyShop(input) {
    
//     let vacation_cost = Number(input[0]);
//     let num_puzzles = Number(input[1]);
//     let num_dolls = Number(input[2]);
//     let num_bears = Number(input[3]);
//     let num_minions = Number(input[4]);
//     let num_trucks = Number(input[5]);
    
//     let total_toys = num_puzzles + num_dolls + num_bears + num_minions + num_trucks;
//     let total_price = num_puzzles* 2.60 + num_dolls* 3 + num_bears* 4.10 + num_minions* 8.20 + num_trucks* 2;

//     if (total_toys >= 50) {
//         total_price = total_price * 0.75;
//     }

//     //rent
//     total_price = total_price* 0.90;

//     if (total_price >= vacation_cost) {
//         console.log("Yes! " + (total_price - vacation_cost).toFixed(2) + " lv left.");
//     } else {
//         console.log("Not enough money! " + (vacation_cost - total_price).toFixed(2) + " lv needed.");
//     }
// }

// toyShop(["320", "8", "2", "5", "5", "1"]);

//5
// function godVsKong(input) {
    
//     let budget = Number(input[0]);
//     let num_stat = Number(input[1]);
//     let costume_cost = Number(input[2]);
//     let decor = budget* 0.10;

//     let total_costume_cost = num_stat* costume_cost;

//     if (num_stat > 150) {
//         total_costume_cost = total_costume_cost* 0.90;
//     }

//     if ((total_costume_cost + decor) > budget) {
//         console.log("Not enough money!\nWingard needs " + ((total_costume_cost + decor) - budget).toFixed(2) + " leva more.");
//     } else {
//         console.log("Action!\nWingard starts filming with " + (budget - total_costume_cost - decor).toFixed(2) + " leva left.");
//     }

// }

// godVsKong(["9587.88","222","55.68"]);

//6
// function swimming(input) {
    
//     let record = Number(input[0]);
//     let distance = Number(input[1]);
//     let time_per_meter = Number(input[2]);
    
//     let slowdown = Math.floor(distance / 15) * 12.5;
//     let Ivan_time = distance* time_per_meter + slowdown;

//     if (Ivan_time >= record) {
//         console.log("No, he failed! He was " + (Ivan_time - record).toFixed(2) + " seconds slower.");
//     } else {
//         console.log("Yes, he succeeded! The new world record is " + (Ivan_time).toFixed(2) + " seconds.");
//     }

// }

// swimming(["55555.67","3017","5.03"]);

//7
// function shopping(input) {
    
//     let budget = Number(input[0]);
//     let gpu = Number(input[1]);
//     let cpu = Number(input[2]);
//     let ram = Number(input[3]);
    
//     let total_price = gpu* 250 + cpu* (gpu* 250* 0.35) + ram* (gpu* 250* 0.10);

//     if (gpu > cpu) {
//         total_price = total_price* 0.85;
//     }

//     if (total_price <= budget) {
//         console.log("You have " + (budget - total_price).toFixed(2) + " leva left!");
//     } else {
//         console.log("Not enough money! You need " + (total_price - budget).toFixed(2) + " leva more!");
//     }

// }

// shopping(["920.45","3","1","1"]);

//8
function lunchBreak(input) {
    
    let name = input[0];
    let episode_time = Number(input[1]);
    let break_time = Number(input[2]);
    
    let time_lunch = break_time / 8;
    let time_rest = break_time / 4;

    let time_left = break_time - time_lunch - time_rest;

    if (episode_time <= time_left) {
        console.log("You have enough time to watch " + name + " and left with " + Math.ceil(time_left - episode_time) + " minutes free time.");
    } else {
        console.log("You don't have enough time to watch " + name + ", you need " + Math.ceil(episode_time - time_left) + " more minutes.");
    }

}

lunchBreak(["Teen Wolf","48","60"]);