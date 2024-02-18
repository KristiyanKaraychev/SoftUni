function spaceTravel(input) {
    let route = input.shift().split("||");
    let fuel = Number(input.shift());
    let ammo = Number(input.shift());

    for (index of route) {
        let elements = index.split(" ");
        let command = elements.shift();
        let number = Number(elements.shift());

        switch (command) {
            case "Travel":
                if (fuel >= number) {
                    fuel -= number;
                    console.log(
                        `The spaceship travelled ${number} light-years.`
                    );
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case "Enemy":
                if (ammo >= number) {
                    ammo -= number;
                    console.log(`An enemy with ${number} armour is defeated.`);
                } else {
                    fuel -= number * 2;
                    if (fuel >= 0) {
                        console.log(
                            `An enemy with ${number} armour is outmaneuvered.`
                        );
                    } else {
                        console.log(`Mission failed.`);
                        return;
                    }
                }
                break;
            case "Repair":
                fuel += number;
                ammo += number * 2;
                console.log(`Ammunitions added: ${number * 2}.`);
                console.log(`Fuel added: ${number}.`);
                break;
            case "Titan":
                console.log(`You have reached Titan, all passengers are safe.`);
                return;
            default:
                break;
        }
    }
}

spaceTravel([
    "Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan",
    "60",
    "100",
]);
