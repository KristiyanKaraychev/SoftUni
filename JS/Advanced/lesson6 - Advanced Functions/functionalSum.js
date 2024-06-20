function add(num) {
    let result = 0;
    result += num;

    function sum(num2) {
        result += num2;
        return sum;
    }

    sum.toString = () => result;

    return sum;
}

console.log(add(3)(2)(5));
