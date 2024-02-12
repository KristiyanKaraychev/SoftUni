function dungeonestDark(input) {

    let health = 100;
    let coins = 0;

    let rooms = input[0].split('|');

    for (let room in rooms) {
        if (rooms[room].includes("potion")) {
            
            let healing_amount = Number(rooms[room].slice("potion".length).trim());

            if (health + healing_amount > 100) {
                console.log(`You healed for ${(100 - health)} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${healing_amount} hp.`);
                health += healing_amount;
            }

            console.log(`Current health: ${health} hp.`);

        } else if (rooms[room].includes("chest")) {

            let coins_amount = Number(rooms[room].slice("chest".length).trim());

            coins += coins_amount;

            console.log(`You found ${coins_amount} coins.`);

        } else {

            let enemy = rooms[room].split(" ")[0];
            let damage = rooms[room].split(" ")[1];

            health -= damage;

            if (health > 0) {
                console.log(`You slayed ${enemy}.`);
            } else {
                console.log(`You died! Killed by ${enemy}.\nBest room: ${Number(room) + 1}`);
                return;
            }
        }
    }

    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);

}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);