function starEnigma(input) {
    msg_num = parseInt(input.shift());
    let planet_regex =
        /@(?<name>[A-Za-z]+)[^@!>-]*:(?<population>\d+)[^@!>-]*!(?<attack>[A|D])![^@!>-]*->(?<soldier>\d+)/;

    let planets = {
        attacked: [],
        destroyed: [],
    };

    for (let i = 0; i < msg_num; i++) {
        let decryptor = 0;

        if (input[i].match(/[star]/gi) !== null) {
            decryptor = input[i].match(/[star]/gi).length;
        }

        let decrypted_msg = "";

        for (let symbol of input[i]) {
            decrypted_msg += String.fromCharCode(
                symbol.charCodeAt(0) - decryptor
            );
        }

        if (planet_regex.test(decrypted_msg)) {
            let command = planet_regex.exec(decrypted_msg);

            if (command.groups.attack === "A") {
                planets["attacked"].push(command.groups.name);
            } else if (command.groups.attack === "D") {
                planets["destroyed"].push(command.groups.name);
            }
        }
    }

    for (let cat in planets) {
        let sortedPlanets = planets[cat].sort((a, b) => a.localeCompare(b));
        planets[cat] = sortedPlanets;
    }

    for (let type of Object.entries(planets)) {
        if (type.includes("attacked")) {
            console.log(`Attacked planets: ${type[1].length}`);
            for (let planet of type[1]) {
                console.log(`-> ${planet}`);
            }
        } else {
            console.log(`Destroyed planets: ${type[1].length}`);
            for (let planet of type[1]) {
                console.log(`-> ${planet}`);
            }
        }
    }
}

starEnigma([
    "4",
    "ioioieee",
    "asdada",
    "STCDoghudd4=63333$D$0A53333",
    "EHfsytsnhf?8555&I&2C9555SR",
]);
