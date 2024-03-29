class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }

    addProduct(product) {
        this.storage.push(product);
        this.totalCost += product.quantity * product.price;
        this.capacity -= product.quantity;
    }

    getProducts() {
        let productString = "";

        for (let product of this.storage) {
            productString += JSON.stringify(product) + "\n";
        }

        productString = productString.slice(0, -1);

        return productString;
    }
}

let productOne = { name: "Cucamber", price: 1.5, quantity: 15 };
let productTwo = { name: "Tomato", price: 0.9, quantity: 25 };
let productThree = { name: "Bread", price: 1.1, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);

// let productOne = { name: "Tomato", price: 0.9, quantity: 19 };
// let productTwo = { name: "Potato", price: 1.1, quantity: 10 };
// let storage = new Storage(30);
// storage.addProduct(productOne);
// storage.addProduct(productTwo);
// console.log(storage.totalCost);
