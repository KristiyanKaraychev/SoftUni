let names = ["A", "B", "C", { key1: "name1" }];
[name1, name2, ...others] = names;
console.log(name1, name2);
console.log(others);

names[0] = "Aa";
names[2] = "Cc";
names[3]["key1"] = "ShallowCopy";
console.log(names);
console.log(name1);
console.log(others);

////

let nums = [];
nums.push();

////

let nums2 = [1, 2, 3, 4, 5, 6];
nums2.splice(3);
console.log(nums2);

////

let cars = ["Audi", "BMW", "Volvo", "Mercedes"];
cars = cars.map((car) => car.toUpperCase());
console.log(cars);
