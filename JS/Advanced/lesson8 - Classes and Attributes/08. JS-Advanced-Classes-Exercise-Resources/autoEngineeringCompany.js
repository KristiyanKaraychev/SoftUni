function solve(arr) {
    let store = new Map();

    class Company {
        constructor(name) {
            this.name = name;
            this.cars = new Map();
        }

        addCar(model, quantity) {
            if (!this.cars.has(model)) {
                this.cars.set(model, 0);
            }
            this.cars.set(model, this.cars.get(model) + quantity);
        }
    }

    for (const element of arr) {
        let [brand, model, quantity] = element.split(" | ");
        quantity = Number(quantity);

        if (!store.has(brand)) {
            store.set(brand, new Company(brand));
        }

        store.get(brand).addCar(model, quantity);
    }

    for (const [brand, company] of store) {
        console.log(`${brand}`);
        for (const model of company.cars) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
    }
}

solve([
    "Audi | Q7 | 1000",

    "Audi | Q6 | 100",

    "BMW | X5 | 1000",

    "BMW | X6 | 100",

    "Citroen | C4 | 123",

    "Volga | GAZ-24 | 1000000",

    "Lada | Niva | 1000000",

    "Lada | Jigula | 1000000",

    "Citroen | C4 | 22",

    "Citroen | C5 | 10",
]);
