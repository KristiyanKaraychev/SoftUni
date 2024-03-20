function netherRealms(input) {
    let demons = {};
    let health_regex = /[^0-9+\-*\/.]/g;
    let damage_regex = /\-?\d+\.?\d*/g;
    let operator_regex = /[*\/]/g;

    for (let demon of input.split(",")) {
        demon = demon.trim();
        let health_values = demon.match(health_regex);
        let health = 0;

        if (health_values !== null) {
            for (let char of health_values) {
                health += char.charCodeAt(0);
            }
        }

        let damage_values = demon.match(damage_regex);
        let damage = 0;

        if (damage_values !== null) {
            for (let char of damage_values) {
                damage += Number(char);
            }
        }

        let operators = demon.match(operator_regex);

        if (operators !== null) {
            for (let char of operators) {
                if (char === "*") {
                    damage *= 2;
                } else if (char === "/") {
                    if (damage !== 0) {
                        damage /= 2;
                    }
                }
            }
        }

        demons[demon] = [health, damage];
    }

    let sortedDemons = Object.entries(demons).sort((a, b) =>
        a[0].localeCompare(b[0])
    );

    for (let demon of sortedDemons) {
        console.log(
            `${demon[0]} - ${demon[1][0]} health, ${demon[1][1].toFixed(
                2
            )} damage`
        );
    }
}

netherRealms("Mph-6-0.5s-0.5t0.0**");
