function solve() {
    function fighter(name) {
        let state = {
            name: name,
            health: 100,
            stamina: 100,
            fight: function () {
                console.log(`${this.name} slashes at the foe!`);
                this.stamina--;
            },
        };

        return state;
    }

    function mage(name) {
        let state = {
            name: name,
            health: 100,
            mana: 100,
            cast: function (spell) {
                console.log(`${this.name} cast ${spell}`);
                this.mana--;
            },
        };

        return state;
    }

    return { mage: mage, fighter: fighter };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
