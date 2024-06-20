function extensibleObject() {
    //TODO:
    function ObjectCreator() {
        this.extend = function (obj) {
            for (const property in obj) {
                if (typeof obj[property] == "function") {
                    Object.getPrototypeOf(this)[property] = obj[property];
                    //this[property] = obj[property];
                } else {
                    this[property] = obj[property];
                }
            }
        };
    }

    return new ObjectCreator();
}

const myObj = extensibleObject();

console.log(myObj);

const template = {
    extensionMethod: function () {},
    extensionProperty: "someString",
};

myObj.extend(template);

console.log(myObj);

let obj2 = new myObj.constructor();
let obj3 = extensibleObject();
console.log(obj2);
console.log(obj3);
