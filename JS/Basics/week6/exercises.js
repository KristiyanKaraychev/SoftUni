//1
// function pyramid(input) {

//     let num = Number(input[0]);
//     let temp = 1;
//     let isBigger = false;

//     for (let i = 1; i <= num; i++) {
        
//         let print = "";

//         for (let j = 1; j <= i; j++) {
//             if (temp > num) {
//                 isBigger = true;
//                 break;
//             }

//             print += temp + " ";
//             temp++;
//         }

//         console.log(print);

//         if (isBigger) {
//             break;
//         }
//     }
// }

// pyramid([7]);

//2
// function sums(input) {

//     let num1 = Number(input[0]);
//     let num2 = Number(input[1]);

//     let print = "";
//     let positive_sum = 0;
//     let negative_sum = 0;

//     for (let i = num1; i <= num2; i++) {

//         let temp = String(i);

//         positive_sum = 0;
//         negative_sum = 0;

//         for (let j = 0; j < temp.length; j++) {
//             if (j % 2 === 0) {
//                 positive_sum += Number(temp.charAt(j));
//             } else {
//                 negative_sum += Number(temp.charAt(j));
//             }
//         }

//         if (positive_sum == negative_sum) {
//             print += temp + " ";
//         }

//     }

//     console.log(print);

// }

// sums(["100115", "100120"]);

//3
// function sumPrime(input) {

//     let num = 0;
//     let iter = 0;
//     let prime_sum = 0;
//     let nonprime_sum = 0;

//     while (input[iter] !== "stop") {

//         num = Number(input[iter]);

//         if (num < 0) {
//             console.log("Number is negative.");
//             iter++;
//             continue;
//         }

//         let isPrime = true;

//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             prime_sum += num;
//         } else {
//             nonprime_sum += num;
//         }

//         iter++;
//     }

//     console.log(`Sum of all prime numbers is: ${prime_sum}\nSum of all non prime numbers is: ${nonprime_sum}`);
// }

// sumPrime(["30","83","33","-1","20","stop"]);

//4
// function train(input) {

//     let students = Number(input[0]);
//     let iter = 1;
//     let final_avg = 0;
//     let num_grades = 0;

//     while (input[iter] !== "Finish") {

//         let subject = input[iter];
//         let grade = 0;
//         iter ++;

//         for (let i = iter; i < iter + students; i++) {
//             grade += Number(input[i]);
//             num_grades++;
//         }

//         final_avg += grade;
//         console.log(`${subject} - ${(grade / students).toFixed(2)}.`);

//         iter += students;
//     }

//     console.log(`Student's final assessment is ${(final_avg / num_grades).toFixed(2)}.`);

// }

// train(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);

//5
// function specialNums(input) {

//     let num = Number(input[0]);
//     let print = "";
    
//     for (let i = 1111; i <= 9999; i++) {

//         let temp = String(i);
//         let isSpecial = true;

//         for (let j = 0; j < temp.length; j ++) {
//             if (num % temp.charAt(j) !== 0) {
//                 isSpecial = false;
//                 break;
//             }
//         }

//         if (isSpecial) {
//             print += i + " ";
//         }
//     }

//     console.log(print);

// }

// specialNums(["16"]);

//6
function cinema(input) {

    let tickets_student = 0;
    let tickets_standard = 0;
    let tickets_kid = 0;

    let iter = 0;
    let temp1 = input[iter];
    iter++;

    while (temp1 !== "Finish") {

        let movieTitle = temp1;
        let total_seats = Number(input[iter]);
        iter ++

        let taken_seats = 0;
        let temp2 = input[iter];
        iter++;

        while (temp2 !== "End") {

            let ticket_type = temp2;

            if (ticket_type === "student") {
                tickets_student++;
            } else if (ticket_type === "standard") {
                tickets_standard++;
            } else if (ticket_type === "kid") {
                tickets_kid++;
            }

            taken_seats++;

            if (taken_seats === total_seats) {
                break;
            }

            temp2 = input[iter];
            iter++;
        }

        let percent_full = (taken_seats / total_seats) * 100;
        console.log(`${movieTitle} - ${percent_full.toFixed(2)}% full.`);

        temp1 = input[iter];
        iter++;
    }

    let tickets_total = tickets_student + tickets_standard + tickets_kid;
    console.log(`Total tickets: ${tickets_total}`);
    
    let tickets_student_percent = (tickets_student / tickets_total) * 100;
    let tickets_standard_percent = (tickets_standard / tickets_total) * 100;
    let tickets_kid_percent = (tickets_kid / tickets_total) * 100;

    console.log(`${tickets_student_percent.toFixed(2)}% student tickets.\n${tickets_standard_percent.toFixed(2)}% standard tickets.\n${tickets_kid_percent.toFixed(2)}% kids tickets.`);
}

cinema(["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"]);