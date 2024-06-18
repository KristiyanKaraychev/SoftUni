function solve(arr) {
    let juices = new Map();
    let bottles = new Map();

    for (let element of arr) {
        let command = element.split(" => ");
        let flavor = command[0];
        let quantity = Number(command[1]);

        if (!juices.has(flavor)) {
            juices.set(flavor, quantity);
        } else {
            juices.set(flavor, juices.get(flavor) + quantity);
        }

        if (juices.get(flavor) >= 1000) {
            let numOfBottles = Math.floor(juices.get(flavor) / 1000);

            if (!bottles.has(flavor)) {
                bottles.set(flavor, numOfBottles);
            } else {
                bottles.set(flavor, bottles.get(flavor) + numOfBottles);
            }

            juices.set(flavor, juices.get(flavor) - numOfBottles * 1000);
        }
    }

    for (let [bottle, amount] of bottles) {
        console.log(`${bottle} => ${amount}`);
    }
}

solve([
    "Kiwi => 234",

    "Pear => 2345",

    "Watermelon => 3456",

    "Kiwi => 4567",

    "Pear => 5678",

    "Watermelon => 6789",
]);
