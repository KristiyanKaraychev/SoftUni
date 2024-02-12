function houseParty(arr) {
    let peopleGoing = [];

    for (let index of arr) {
        let name = index.split(" ").shift();
        if (index.includes("not")) {
            if (peopleGoing.includes(name)) {
                peopleGoing.splice(peopleGoing.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (peopleGoing.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                peopleGoing.push(name);
            }
        }
    }
    console.log(peopleGoing.join("\n"));
}

houseParty([
    "Tom is going!",

    "Annie is going!",

    "Tom is going!",

    "Garry is going!",

    "Jerry is going!",
]);
