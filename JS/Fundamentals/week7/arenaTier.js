function arenaTier(input) {
    let gladiators = {};
    let counter = 0;

    while (input[counter] !== "Ave Cesar") {
        if (input[counter].includes("vs")) {
            let command = input[counter].split(" vs ");
            let gladiator1 = command[0];
            let gladiator2 = command[1];

            if (
                gladiators.hasOwnProperty(gladiator1) &&
                gladiators.hasOwnProperty(gladiator2)
            ) {
                for (let key in gladiators[gladiator1]) {
                    if (gladiators[gladiator2].hasOwnProperty(key)) {
                        if (
                            gladiators[gladiator1][key] >
                            gladiators[gladiator2][key]
                        ) {
                            delete gladiators[gladiator2];
                            break;
                        } else if (
                            gladiators[gladiator1][key] <
                            gladiators[gladiator2][key]
                        ) {
                            delete gladiators[gladiator1];
                            break;
                        }
                    }
                }
            }
        } else {
            let command = input[counter].split(" -> ");
            let name = command[0];
            let skill = command[1];
            let power = Number(command[2]);

            if (gladiators.hasOwnProperty(name)) {
                if (
                    !gladiators[name].hasOwnProperty(skill) ||
                    gladiators[name][skill] < power
                ) {
                    gladiators[name][skill] = power;
                }
            } else {
                gladiators[name] = { [skill]: power };
            }
        }

        counter++;
    }

    for (let [gladiator, skills] of Object.entries(gladiators)) {
        let skillPoints = 0;
        for (let [name, power] of Object.entries(skills)) {
            skillPoints += power;
        }
        gladiators[gladiator]["skill"] = skillPoints;
    }

    let sortedGladiators = Object.entries(gladiators).sort((a, b) => {
        if (a[1]["skill"] !== b[1]["skill"]) {
            return b[1]["skill"] - a[1]["skill"];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });

    for (let i = 0; i < sortedGladiators.length; i++) {
        let sortedSkills = Object.entries(sortedGladiators[i][1]).sort(
            (a, b) => {
                if (a[1] !== b[1]) {
                    return b[1] - a[1];
                } else {
                    return a[0].localeCompare(b[0]);
                }
            }
        );
        sortedGladiators[i][1] = Object.fromEntries(sortedSkills);
    }

    for (let [name, skills] of sortedGladiators) {
        console.log(`${name}: ${skills["skill"]} skill`);
        for (let [skillName, skillPower] of Object.entries(skills)) {
            if (skillName !== "skill") {
                console.log(`- ${skillName} <!> ${skillPower}`);
            }
        }
    }
}

arenaTier([
    "Peter -> Duck -> 400",
    "Julius -> Shield -> 150",
    "Gladius -> Heal -> 200",
    "Gladius -> Support -> 250",
    "Gladius -> Shield -> 250",
    "Peter vs Gladius",
    "Gladius vs Julius",
    "Gladius vs Maximilian",
    "Ave Cesar",
]);
