function travelTime(input) {
    let destinations = {};

    for (let entry of input) {
        let command = entry.split(" > ");
        let country = command[0];
        let town = command[1];
        let cost = command[2];

        if (destinations.hasOwnProperty(country)) {
            if (
                !destinations[country].hasOwnProperty(town) ||
                cost < destinations[country][town]
            ) {
                destinations[country][town] = cost;
            }
        } else {
            destinations[country] = { [town]: cost };
        }
    }

    for (let [key, value] of Object.entries(destinations)) {
        let sortedTowns = Object.entries(destinations[key]).sort(
            (a, b) => a[1] - b[1]
        );
        destinations[key] = sortedTowns;
    }

    let destinationsSorted = Object.entries(destinations).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    let print = "";

    for (let destination of destinationsSorted) {
        print += `${destination[0]} -> `;
        for (let town of destination[1]) {
            print += `${town[0]} -> ${town[1]} `;
        }
        print += "\n";
    }

    console.log(print);
}

travelTime([
    "Bulgaria > Sofia > 25000",
    "Bulgaria > Sofia > 25000",
    "Kalimdor > Orgrimar > 25000",
    "Albania > Tirana > 25000",
    "Bulgaria > Varna > 25010",
    "Bulgaria > Lukovit > 10",
]);
