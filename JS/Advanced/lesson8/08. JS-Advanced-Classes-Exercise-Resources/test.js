class Person {
    constructor(name) {
        this.name = name;
    }

    get() {
        return this._name;
    }

    set(name) {
        this._name = name;
    }
}

let person1 = new Person("Pesho");

console.log(person1);
console.log(person1.name);
