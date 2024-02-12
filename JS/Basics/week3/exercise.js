//1
// function cinema(input){

//     let type = input[0];
//     let rows = Number(input[1]);
//     let columns = Number(input[2]);
//     let price = 0;
//     let revenue = 0;

//     switch (type) {
//         case "Premiere":
//             price = 12.00;
//             break;
//         case "Normal":
//             price = 7.50;
//             break;
//         case "Discount":
//             price = 5.00;
//             break;
//         default:
//             break;
//     }

//     revenue = rows* columns* price;

//     console.log(revenue.toFixed(2) + " leva");
// }

// cinema(["Normal", "21", "13"]);

//2
// function summerOutfit(input){

//     let temp = Number(input[0]);
//     let time = input[1];
//     let outfit = "";
//     let shoes = "";

//     switch (time) {
//         case "Morning":
//             if (temp >= 10 && temp <= 18) {
//                 outfit = "Sweatshirt";
//                 shoes = "Sneakers";
//             } else if (temp > 18 && temp <= 24) {
//                 outfit = "Shirt";
//                 shoes = "Moccasins";
//             } else if (temp >= 25) {
//                 outfit = "T-Shirt";
//                 shoes = "Sandals";
//             }
//             break;
//         case "Afternoon":
//             if (temp >= 10 && temp <= 18) {
//                 outfit = "Shirt";
//                 shoes = "Moccasins";
//             } else if (temp > 18 && temp <= 24) {
//                 outfit = "T-Shirt";
//                 shoes = "Sandals";
//             } else if (temp >= 25) {
//                 outfit = "Swim Suit";
//                 shoes = "Barefoot";
//             }
//             break;
//         case "Evening":
//             if (temp >= 10 && temp <= 18) {
//                 outfit = "Shirt";
//                 shoes = "Moccasins";
//             } else if (temp > 18 && temp <= 24) {
//                 outfit = "Shirt";
//                 shoes = "Moccasins";
//             } else if (temp >= 25) {
//                 outfit = "Shirt";
//                 shoes = "Moccasins";
//             }
//             break;
//         default:
//             break;
//     }

//     console.log("It's " + temp + " degrees, get your " + outfit + " and " + shoes + ".");
// }

// summerOutfit(["22","Afternoon"]);

//3
// function newHouse(input){

//     let flowers = input[0];
//     let flowers_num = Number(input[1]);
//     let budget = Number(input[2]);
//     let price = 0;

//     switch (flowers) {
//         case "Roses":
//             price = flowers_num* 5;
//             if (flowers_num > 80) {
//                 price = price* 0.90;
//             }
//             break;
//         case "Dahlias":
//             price = flowers_num* 3.80;
//             if (flowers_num > 90) {
//                 price = price* 0.85;
//             }
//             break;
//         case "Tulips":
//             price = flowers_num* 2.80;
//             if (flowers_num > 80) {
//                 price = price* 0.85;
//             }
//             break;
//         case "Narcissus":
//             price = flowers_num* 3;
//             if (flowers_num < 120) {
//                 price = price* 1.15;
//             }
//             break;
//         case "Gladiolus":
//             price = flowers_num* 2.50;
//             if (flowers_num < 80) {
//                 price = price* 1.20;
//             }
//             break;
//         default:
//             break;
//     }

//     if (budget >= price){
//         console.log("Hey, you have a great garden with " + flowers_num + " " + flowers + " and " + (budget - price).toFixed(2) + " leva left.");
//     } else {
//         console.log("Not enough money, you need " + (price - budget).toFixed(2) + " leva more.");
//     }
    
// }

// newHouse(["Tulips","88","260"]);

//4
// function fishingBoat(input){

//     let budget = Number(input[0]);
//     let season = input[1];
//     let people = Number(input[2]);
    
//     let boat_price = 0;

//     switch (season) {
//         case "Spring":
//             boat_price = 3000;
//             break;
//         case "Winter":
//             boat_price = 2600;
//             break;
//         case "Summer":
//         case "Autumn":
//             boat_price = 4200;
//             break;
//         default:
//             break;
//     }

//     switch (true) {
//         case people <= 6:
//             boat_price = boat_price* 0.90;
//             break;
//         case people >= 7 && people <= 11:
//             boat_price = boat_price* 0.85;
//             break;
//         case people >= 12:
//             boat_price = boat_price* 0.75;
//             break;
//         default:
//             break;
//     }

//     if (people % 2 === 0 && season !== "Autumn") {
//         boat_price = boat_price* 0.95;
//     }

//     if (budget >= boat_price){
//         console.log("Yes! You have " + (budget - boat_price).toFixed(2) + " leva left.");
//     } else {
//         console.log("Not enough money! You need " + (boat_price - budget).toFixed(2) + " leva.");
//     }
    
// }

// fishingBoat(["3000","Summer","11"]);

//5
// function journey(input){

//     let budget = Number(input[0]);
//     let season = input[1];

//     let place = "";
//     let place_type = "";

//     let cost = 0;

//     switch (true) {
//         case budget <= 100:
//             place = "Bulgaria";
//             switch (season) {
//                 case "summer":
//                     cost = budget* 0.30;
//                     place_type = "Camp";
//                     break;
//                 case "winter":
//                     cost = budget* 0.70;
//                     place_type = "Hotel";
//                     break;
//                 default:
//                     break;
//             }
//             break;
//         case budget > 100 && budget <= 1000:
//             place = "Balkans";
//             switch (season) {
//                 case "summer":
//                     cost = budget* 0.40;
//                     place_type = "Camp";
//                     break;
//                 case "winter":
//                     cost = budget* 0.80;
//                     place_type = "Hotel";
//                     break;
//                 default:
//                     break;
//             }
//             break;
//         case budget > 1000:
//             place = "Europe";
//             place_type = "Hotel";
//             cost = budget* 0.90;
//             break;
//         default:
//             break;
//     }

//     if (budget >= cost){
//         console.log("Somewhere in " + place + "\n" + place_type + " - " + (cost).toFixed(2));
//     }
    
// }

// journey(["1500", "summer"]);

//6
// function ops(input){

//     let num1 = Number(input[0]);
//     let num2 = Number(input[1]);
//     let operator = input[2];

//     let result = 0;
//     let even_odd = "";


//     switch (operator) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             if (num2 === 0) {
//                 console.log(`Cannot divide ${num1} by zero`);
//                 return;
//             } else {
//                 result = (num1 / num2).toFixed(2);
//             }
//             break;
//         case "*":
//             result = num1 + num2;
//             break;
//         case "%":
//             if (num2 === 0) {
//                 console.log(`Cannot divide ${num1} by zero`);
//                 return;
//             } else {
//                 result = num1 % num2;
//             }
//             break;
//         default:
//             break;
//     }
    
//     if (operator === "+" || operator === "-" || operator === "*") {
//         if (result % 2 === 0) {
//             even_odd = "even";
//         } else {
//             even_odd = "odd";
//         }
//         console.log(`${num1} ${operator} ${num2} = ${result} - ${even_odd}`);
//     } else {
//         console.log(`${num1} ${operator} ${num2} = ${result}`);
//     }
    
// }

// ops(["10", "3", "%"]);

//7
// function hotel(input){

//     let month = input[0];
//     let nights = Number(input[1]);

//     let studio_price = 0;
//     let apt_price = 0;
//     let studio_discount = 1;
//     let apt_discount = 1;

//     switch (month) {
//         case "May":
//         case "October":
//             studio_price = 50;
//             apt_price = 65;
//             if (nights > 7 && nights <= 14) {
//                 studio_discount = 0.95;
//             } else if (nights > 14) {
//                 studio_discount = 0.70;
//                 apt_discount = 0.90;
//             }
//             break;
//         case "June":
//         case "September":
//             studio_price = 75.20;
//             apt_price = 68.70;
//             if (nights > 14) {
//                 studio_discount = 0.80;
//                 apt_discount = 0.90;
//             }
//             break;
//         case "July":
//         case "August":
//             studio_price = 76;
//             apt_price = 77;
//             if (nights > 14) {
//                 apt_discount = 0.90;
//             }
//             break;
//         default:
//             break;
//     }
    
//     studio_price = (studio_price* studio_discount* nights).toFixed(2);
//     apt_price = (apt_price* apt_discount* nights).toFixed(2);

//     console.log(`Apartment: ${apt_price} lv.\nStudio: ${studio_price} lv.`);
    
// }

// hotel(["August","20"]);

//8
// function onTime(input){

//     let hour_exam = Number(input[0]);
//     let min_exam = Number(input[1]);
//     let hour_arrival = Number(input[2]);
//     let min_arrival = Number(input[3]);

//     let time_exam_mins = hour_exam * 60 + min_exam;
//     let time_arrival_mins = hour_arrival * 60 + min_arrival;
//     let status = "";

//     if (time_arrival_mins <= time_exam_mins) {
//         if (time_exam_mins - time_arrival_mins <= 30) {
//             status = "On time";
//         } else {
//             status = "Early";
//         }
//     } else {
//         status = "Late";
//     }

//     if (Math.abs(time_arrival_mins - time_exam_mins) < 60) {
//         if (time_arrival_mins <= time_exam_mins) {
//             console.log(`${status}\n${time_exam_mins - time_arrival_mins} minutes before the start`);
//         } else {
//             console.log(`${status}\n${time_arrival_mins - time_exam_mins} minutes after the start`);
//         }
//     } else {
//         let hour_late = Math.floor(Math.abs(time_arrival_mins - time_exam_mins) / 60);
//         let mins_late = Math.abs(time_arrival_mins - time_exam_mins) % 60;

//         if (time_arrival_mins <= time_exam_mins) {
//             if (mins_late < 10) {
//                 console.log(`${status}\n${hour_late}:0${mins_late} hours before the start`);
//             } else {
//                 console.log(`${status}\n${hour_late}:${mins_late} hours before the start`);
//             }
//         } else {
//             if (mins_late < 10) {
//                 console.log(`${status}\n${hour_late}:0${mins_late} hours after the start`);
//             } else {
//                 console.log(`${status}\n${hour_late}:${mins_late} hours after the start`);
//             }
//         }
//     }
    
// }

// onTime(["14", "00", "13", "55"]);

//9
function skiTrip(input){

    let days = Number(input[0]);
    let room = input[1];
    let review = input[2];

    let price_per_night = 0;
    let discount = 1;
    let total = 0;

    switch (room) {
        case "room for one person":
            price_per_night = 18.00;
            break;
        case "apartment":
            price_per_night = 25.00;
            if (days < 10) {
                discount = discount * 0.70;
            } else if (days >= 10 && days <= 15) {
                discount = discount * 0.65;
            } else {
                discount = discount * 0.50;
            }
            break;
        case "president apartment":
            price_per_night = 35.00;
            if (days < 10) {
                discount = discount * 0.90;
            } else if (days >= 10 && days <= 15) {
                discount = discount * 0.85;
            } else {
                discount = discount * 0.80;
            }
            break;
        default:
            break;
    }

    total = ((days - 1)* price_per_night) * discount;

    switch (review) {
        case "positive":
            total = total * 1.25;
            break;
        case "negative":
            total = total * 0.90;
            break;
        default:
            break;
    }
    
    console.log(total.toFixed(2));
}

skiTrip(["30","president apartment","negative"]);