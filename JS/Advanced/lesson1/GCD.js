function GCD(num1, num2) {
    let smaller = 0;

    if (num1 > num2) {
        smaller = num2;
    } else {
        smaller = num1;
    }

    for (let i = smaller; i > 0; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            return;
        }
    }
}

GCD(2154, 458);
