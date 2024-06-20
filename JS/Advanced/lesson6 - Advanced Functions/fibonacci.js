function getFibonator() {
    let a = 0;
    let b = 1;

    return function () {
        let temp = a;
        a = b;
        b = temp + b;
        return a;
    };
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
