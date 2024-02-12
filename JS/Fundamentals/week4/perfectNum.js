function perfectNum(num) {

    function sumOfDivisors(num) {

        let sum = 0;

        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        return sum;
    }

    if (num === sumOfDivisors(num)) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNum(28);