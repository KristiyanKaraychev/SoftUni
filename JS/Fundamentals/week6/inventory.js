function inventory(input) {
    let heroes = [];

    for (let command of input) {
        let elements = command.split(" / ");
        let hero = {};

        hero.name = elements[0];
        hero.level = elements[1];
        hero.items = elements[2];

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(
            `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
        );
    }
}

inventory([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
]);
