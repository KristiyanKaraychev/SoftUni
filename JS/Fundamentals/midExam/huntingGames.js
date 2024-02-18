function huntingGames(input) {
    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());

    let currentWater = days * players * waterPerPerson;
    let currentFood = days * players * foodPerPerson;
    let count = 1;

    while (count <= days) {
        energy = energy - Number(input.shift());

        if (energy <= 0) {
            console.log(
                `You will run out of energy. You will be left with ${currentFood.toFixed(
                    2
                )} food and ${currentWater.toFixed(2)} water.`
            );
            return;
        }

        if (count % 2 === 0) {
            energy = energy * 1.05;
            currentWater = currentWater * 0.7;
        }

        if (count % 3 === 0) {
            energy = energy * 1.1;
            currentFood = currentFood - currentFood / players;
        }

        count++;
    }

    console.log(
        `You are ready for the quest. You will be left with - ${energy.toFixed(
            2
        )} energy!`
    );
}

huntingGames([
    "2",
    "1",
    "5035.50",
    "5",
    "5",
    "5035.40",
    "0.00",
    "555.68",
    "0",
    "505.99",
    "630.3",
    "7777.20",
    "321.21",
    "456.8",
    "330",
    "111",
]);
