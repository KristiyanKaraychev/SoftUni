class List {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    add(element) {
        this.items.push(element);
        this.items.sort((a, b) => a - b);
        this.size = this.items.length;
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds.");
        }
        this.items.splice(index, 1);
        this.size = this.items.length;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds.");
        }
        return this.items[index];
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
