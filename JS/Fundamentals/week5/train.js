function train(arr) {
    let train = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());

    for (let wagon of arr) {
        if (wagon.includes("Add")) {
            let passengers = wagon.split(" ");
            train.push(Number(passengers[1]));
        } else {
            for (let i = 0; i < train.length; i++) {
                if (Number(train[i]) + Number(wagon) <= maxCapacity) {
                    train[i] += Number(wagon);
                    break;
                }
            }
        }
    }

    console.log(train.join(" "));
}

train(["0 0 0 10 2 4", "10", "Add 0", "10", "10", "10", "8", "6", "9"]);
