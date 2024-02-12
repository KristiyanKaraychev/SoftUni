function gladiatorExpenses(fights, price_helm, price_sword, price_shield, price_armor) {

    let cost = 0;
    let shield_count = 0;

    for (let i = 1; i <= Number(fights); i++){

        if (i%2 === 0){
            cost += price_helm;
        }

        if (i%3 === 0){
            cost += price_sword;
        }

        if (i%6 === 0){
            cost += price_shield;
            shield_count++;
        }

        if (shield_count === 2) {
            cost += price_armor;
            shield_count = 0;
        }
    }

    console.log(`Gladiator expenses: ${cost.toFixed(2)} aureus`);
}

function gladiatorExpenses2(fights, price_helm, price_sword, price_shield, price_armor) {

    let broken_heml = 0;
    let broken_sword = 0;
    let broken_shield = 0;
    let broken_armor = 0;

    let shield_count = 0;

    for (let i = 1; i <= Number(fights); i++){

        if (i%2 === 0){
            broken_heml++;
        }

        if (i%3 === 0){
            broken_sword++;
        }

        if (i%6 === 0){
            broken_shield++;
            shield_count++;
        }

        if (shield_count === 2) {
            broken_armor++;
            shield_count = 0;
        }
    }

    console.log(`Gladiator expenses: ${(broken_heml * price_helm + broken_sword * price_sword + broken_shield * price_shield + broken_armor * price_armor).toFixed(2)} aureus`);
}

gladiatorExpenses2(23,

    12.50,
    
    21.50,
    
    40,
    
    200);