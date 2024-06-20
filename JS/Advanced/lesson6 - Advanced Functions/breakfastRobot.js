function solution() {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    function restock(element, quantity) {
        storage[element] += Number(quantity);
        return "Success";
    }

    function prepare(recipe, quantity) {
        if (recipes.hasOwnProperty(recipe)) {
            for (const ingredient in recipes[recipe]) {
                if (
                    storage[ingredient] <
                    recipes[recipe][ingredient] * quantity
                ) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (const ingredient in recipes[recipe]) {
                if (
                    storage[ingredient] >=
                    recipes[recipe][ingredient] * quantity
                ) {
                    storage[ingredient] -=
                        recipes[recipe][ingredient] * quantity;
                }
            }

            //console.log("Success.");
            return "Success";
        }
    }

    function report() {
        let string = "";
        for (const key in storage) {
            string += `${key}=${storage[key]} `;
        }
        return string.trim();
    }

    function management(input) {
        let inputSplit = input.split(" ");
        let command = inputSplit.shift();
        let outcome = "";

        switch (command) {
            case "restock":
                outcome = restock(inputSplit[0], inputSplit[1]);
                break;
            case "prepare":
                outcome = prepare(inputSplit[0], inputSplit[1]);
                break;
            case "report":
                outcome = report();
                break;
            default:
                break;
        }

        //console.log(outcome);
        return outcome;
    }

    return management;
}

let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
