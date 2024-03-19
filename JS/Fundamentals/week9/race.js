function race(input) {
    let names = input.shift().split(", ");
    let participants = {};

    for (let name of names) {
        participants[name] = 0;
    }

    let temp = 0;

    while (input[temp] !== "end of race") {
        let name = input[temp].match(/[A-Za-z]/g).join("");

        if (participants.hasOwnProperty(name)) {
            let distance = 0;
            input[temp].match(/[0-9]/g).forEach((num) => {
                distance += Number(num);
            });
            participants[name] += distance;
        }

        temp++;
    }

    let winners = Object.entries(participants).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${winners.shift()[0]}`);
    console.log(`2nd place: ${winners.shift()[0]}`);
    console.log(`3rd place: ${winners.shift()[0]}`);
}

race([
    "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
    "Mi*&^%$ch123o!#$%#nne787) ",
    "%$$B(*&&)i89ll)*&) ",
    "R**(on%^&ald992) ",
    "T(*^^%immy77) ",
    "Ma10**$#g0g0g0i0e",
    "end of race",
]);
